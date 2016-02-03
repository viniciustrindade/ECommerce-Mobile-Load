/*******************************
 * Dependencies
 *******************************/
var request = require('request');
var Q = require('q');
var zlib = require('zlib');
var winston = require('winston');
var _ = require('lodash');
var customDataBeacon = require('./customDataBeacon');

/*******************************
 * Change Me
 *******************************/
var loginUser = 'aleftik';
var loginPassword = 'aleftik';
var beaconHost = process.env.EUM_URL;
var appDKey =  process.env.EUM_KEY;
var serverHost = process.env.ECOMM_URL;
var mobilePlatform = process.env.PLATFORM;
if (mobilePlatform === 'iOS') {
    var crashBeacon = require('./iosCrashBeacon');
} else {
    var crashBeacon = require('./androidCrashBeacon');
}
var uiHost = 'http://www.ecommerce.com';
var appName = mobilePlatform === 'iOS' ? 'com.appdynamics.Ecommerce-iOS' : 'com.appdynamics.pmdemoapps.EcommAndroid';
if (process.env.APP_NAME) {
    appName = process.env.APP_NAME;
}
var debugConsole = process.env.DEBUG_CONSOLE || false;
var consoleLevel = process.env.CONSOLE_LOG_LEVEL || 'info';
var logFilePath = process.env.LOG_PATH || (process.cwd().indexOf('src') !== -1) ? '../logs/' : 'logs/';
var logFileLevel =  process.env.LOG_LEVEL || 'debug';
var logFileName = serverHost.replace('http://','') + '-' + process.pid + '-' + Date.now() + '.log';
var slowCheckoutTs = 0;

/*******************************
 * Screens
 *******************************/
var getScreens = function() {
    return [
        {
            name : 'LoginView',
            network : {url : serverHost + '/appdynamicspilot/rest/user', getPage : getLogin, processPage : processLogin},
            infoPoint : {infoClass : 'Authenticate', infoMethod : 'login'},
            customMetric : {name : 'Login Attempts', value : '1'}
        },
        {
            name : 'ListView',
            network : {url : serverHost + '/appdynamicspilot/rest/items/all', getPage : getPage, processPage : processPage},
            timer : {name : 'Render Items Screen'},
            infoPoint : {infoClass : 'Catalog', infoMethod : 'parseCatalog'},
            customMetric : {name : 'Items Rendered', value : '14'}
        },
        {
            name : 'CartView',
            network : {url : serverHost + '/appdynamicspilot/rest/cart/1', getPage : getPage, processPage : processPage},
            infoPoint : {infoClass : 'Cart', infoMethod : 'checkCart'}
        },
        {
            name : 'CheckoutView',
            network : {url : serverHost + '/appdynamicspilot/rest/cart/co', getPage : getCheckout, processPage : processPage},
            infoPoint : {infoClass : 'Cart', infoMethod : 'validateOrder'},
            customMetric : {name : 'Total Cart Size', value : '56'}
        }
    ];
};
/*******************************
 * Basic error checking/logging
 *******************************/
var logger = new winston.Logger({
    transports : [
        new (winston.transports.File)({
            name : 'file',
            filename : logFilePath + logFileName,
            level : logFileLevel
        })  ,
        new (winston.transports.Console)({
            name : 'console',
            level : consoleLevel
        })
    ]
});
if (!debugConsole) {
    logger.remove('console');
}
if (!beaconHost || !serverHost || !appDKey) {
    logger.error('Beacon host, server host or appDKey is missing');
}

logger.log('info', 'Load script start', {
    beaconHost : process.env.EUM_URL,
    appDKey :  process.env.EUM_KEY,
    serverHost : process.env.ECOMM_URL,
    mobilePlatform : process.env.PLATFORM,
    debugConsole : debugConsole,
    consoleLevel : consoleLevel,
    logFilePath : logFilePath,
    logFileLevel :  logFileLevel,
    logFileName : logFileName
});
setTimeout(function() {
    logger.log('info','Heartbeat');
}, 10000);

/*******************************
 * Functions
 *******************************/

var session = function(sessionData) {
    if (!sessionData) {
        sessionData = {
            screens: getScreens(),
            currentScreen: null,
            info: getInfo()
        }

        //introduce checkout crash and new steps
        if (_.random(0,100) < 5) {
            sessionData.screens.splice(3,0,{name : 'SettingsView'});
            sessionData.screens.splice(4,0,{name : 'ChangeAddressView', infoPoint : {infoClass : 'Settings', infoMethod : 'changeBillingAddress'}});
            sessionData.screens[5].crash = true;
        }


        logger.log('info', 'New session start');
        var appStartBeacon = getAppStartBeacon(sessionData);
        sendBeacon([appStartBeacon], sessionData, 'App Start').then(function (beaconPost) {
            setTimeout(function() {
                sendBeacon([getTimer(sessionData, 'Render Screen')], sessionData,  'Render Screen Timer');
            },400);

            setTimeout(function() {
                session(sessionData);
            }, _.random(1200,2800));
        }).catch(function (error) {
            session();
        });
    } else if (sessionData.screens.length === 0) {
        session();
    } else {

        sessionData.currentScreen = sessionData.screens[0];
        sessionData.screens.shift();
        sendBeacon([getRootViewChangeBeacon(sessionData, sessionData.currentScreen.name)], sessionData, 'Screen Change');

        if (!_.isUndefined(sessionData.currentScreen.crash)) {
            setTimeout(function() {
                var cb = updateCrashBeacon(sessionData, crashBeacon.getBeacon());
                sendBeacon([cb], sessionData, 'Crash Report');
            },600);
            setTimeout(function() {
                session();
            }, _.random(2000,4000));
            return;
        }

        if (!_.isUndefined(sessionData.currentScreen.network)) {

            var st = Date.now();

            sessionData.currentScreen.network.getPage(sessionData).then(function(serverResponse) {
                var correlationInfo = sessionData.currentScreen.network.processPage(sessionData, serverResponse);
                correlationInfo.st = st;
                logger.log('info', 'Page Request successful : ' + sessionData.currentScreen.network.url);
                logger.log('debug', "Correlation data from " + sessionData.currentScreen.network.url + " : ", correlationInfo);
                var beacon = getNetworkRequestBeacon(sessionData, correlationInfo);

                var ms = Date.now() - st;
                //if (sessionData.currentScreen.name === 'CheckoutView' && correlationInfo.fullSnapshot === true && ms > 5000 && Date.now() > (slowCheckoutTs + (60000 * 1))) {
                if (correlationInfo.fullSnapshot === true && ms > 2000 && Date.now() > (slowCheckoutTs + (60000 * 20))) {
                    beacon.userdata  = {
                        UserId : 'ROB-BOL99'
                    }
                    slowCheckoutTs = Date.now();
                }

                sendBeacon([beacon], sessionData, 'Network Request').then(function() {
                    setTimeout(function() {
                        session(sessionData);
                    }, _.random(2000,4000));
                });

                var customBeacon = getCustomBeacon(sessionData);
                if (customBeacon.length > 0) {
                    sendBeacon(customBeacon, sessionData, 'Custom Data');
                }
            }).catch(function(err) {
                logger.log('error', 'App request error : ' + err.message, err.stack);
                setTimeout(session(sessionData), 1000);
            });

        } else {
            var customBeacon = getCustomBeacon(sessionData);
            if (customBeacon.length > 0) {
                sendBeacon(customBeacon, sessionData, 'Custom Data');
            }
            setTimeout(function() {
                session(sessionData);
            }, _.random(2000,4000));
        }
    }
}

var getCustomBeacon = function(sessionData) {
    var customBeacon = [];

    if (!_.isUndefined(sessionData.currentScreen.timer)) {
        customBeacon.push(getTimer(sessionData, sessionData.currentScreen.timer.name));
    }

    if (!_.isUndefined(sessionData.currentScreen.infoPoint)) {
        customBeacon.push(getInfoPoint(sessionData,sessionData.currentScreen.infoPoint.infoClass,sessionData.currentScreen.infoPoint.infoMethod));
    }

    if (!_.isUndefined(sessionData.currentScreen.customMetric)) {
        customBeacon.push(getCustomSessionMetric(sessionData,sessionData.currentScreen.customMetric.name,sessionData.currentScreen.customMetric.value));
    }
    return customBeacon;
}
var getCheckout = function(sessionData) {
    return getPage(sessionData,  {'appdynamicssnapshotenabled' : 'true'});
}

var getCustomSessionMetric = function(sessionData, name, value) {
    var beacon = customDataBeacon.getCustomMetricSession();
    updateStandardBeaconProps(beacon, sessionData);
    beacon.metricName = name;
    beacon.val = value;
    beacon.st = Date.now();
    return beacon;
}

var getCustomMetric = function(sessionData, name, value) {
    var beacon = customDataBeacon.getCustomMetric();
    updateStandardBeaconProps(beacon, sessionData);
    beacon.metricName = name;
    beacon.metricValues.push(value);
    return beacon;
}

var getTimer = function(sessionData, name) {
    var timer = customDataBeacon.getNewTimer();
    timer.timerName = name;
    var t1 = Date.now();
    var t2 = t1 + _.random(10,200);
    timer.metricValues.push(t1, t2);
    updateStandardBeaconProps(timer, sessionData);
    return timer;
}
var getPage = function(sessionData, headers) {
    var headers = headers || {};
    var deferred = Q.defer();
    var options = {
        url : sessionData.currentScreen.network.url,
        headers : {
            'ADRUM' : 'isAjax:true',
            'ADRUM_1' : 'isMobile:true',
            'User-Agent' : 'Ecommerce Mobile Application/1.0 CFNetwork/711.2.23 Darwin/13.4.0',
            'JSESSIONID' : sessionData.jSessionId + '.route2',
            'USERNAME' : loginUser,
            'ROUTEID' : 'ROUTEID=.route2',
            'Cookie' : 'JSESSIONID=' + sessionData.jSessionId + '.route2',
        }
    }
    options.headers = _.merge(options.headers, headers);
    request(options, function(error, response, body) {
        if (error) {
            return deferred.reject(new Error(error));
        }
        deferred.resolve({response : response, body : body});
    });
    return deferred.promise;
}

var sendBeacon = function(beacon, sessionData, name) {

    var name = name || 'Not Defined';
    var deferred = Q.defer();

    var strBeacon = JSON.stringify(beacon);
    zlib.gzip(strBeacon, function(err, gzippedBeacon) {
        var options = {
            url : beaconHost + '/eumcollector/mobileMetrics?version=2',
            headers : {
                'User-Agent' : 'SimpleURL/1 CFNetwork/711.1.12 Darwin/13.4.0',
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Accept' : '*/*',
                'mat' : '-1',
                'ky' : appDKey,
                'an' : appName,
                'osn' : mobilePlatform,
                'gzip' : 'true',
                'di' : sessionData.info.agentId,
                'bid' : '1a9d6f577463cca8d8f0720e279d007',
                'cap' : 's:1'
            },
            body : gzippedBeacon
        }

        request.post(options, function(error, response, body) {
            if (error || response.statusCode !== 200) {
                logger.log('error', 'Beacon failure : ' + name + ' - Status Code : '  + response.statusCode);
                return deferred.reject(new Error(error));
            }
            logger.log('info', 'Beacon sent : ' + name);
            logger.log('debug', 'Beacon ' + name, beacon);
            deferred.resolve({response : response, body : body});
        });
    });
    return deferred.promise;
}

var getLogin = function(sessionData) {
    var deferred = Q.defer();
    var options = {
        url : sessionData.currentScreen.network.url,
        headers : {
            'ADRUM' : 'isAjax:true',
            'ADRUM_1' : 'isMobile:true',
            'User-Agent' : 'Ecommerce Mobile Application/1.0 CFNetwork/711.2.23 Darwin/13.4.0',
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Cookie' : 'ROUTEID=.route2'
        },
        body : 'username=' + loginUser + '&password=' + loginPassword
    }
    request.post(options, function(error, response, body) {
        if (error) {
            return deferred.reject(new Error(error));
        }
        deferred.resolve({response : response, body : body});
    });
    return deferred.promise;
}

var processLogin = function(sessionData, serverResponse) {
    sessionData.jSessionId = getJSessionId(serverResponse.response.headers);
    return getCorrelationInfo(serverResponse.response.headers);
}

var processPage = function(sessionData, serverResponse) {
    return getCorrelationInfo(serverResponse.response.headers);
}

var getJSessionId = function(headers) {
    if (_.isUndefined(headers['set-cookie'])) {
        throw new Error('set-cookie header not present');
    }
    var j = headers['set-cookie'][0];
    return j.split('=')[1].split(';')[0].split('.')[0];
}

var getCorrelationInfo = function(headers) {
    var c = {
        fullSnapshot : false
    };

    c.responseLength = headers['content-length'];

    if (headers['adrum_0']) {
        c.correlationId = headers['adrum_0'].split(':')[1];
    }
    if (headers['adrum_1']) {
        c.btId = headers['adrum_1'].split(':')[1];
    }
    if (headers['adrum_2']) {
        c.btERT =  headers['adrum_2'].split(':')[1];
    }
    if (headers['adrum_3']) {
        var snapshot =  headers['adrum_3'].split(':')[1];
        if (snapshot === 'f') {
            c.fullSnapshot = true;
        }
    }
    return c;
}

var getInfo = function() {
    var platformsAndDevices = {"iOS": [["iPhone5,1", "Apple"], ["iPad2,1", "Apple"], ["iPhone5,4", "Apple"], ["iPhone6,2", "Apple"], ["iPhone5,4", "Apple"]], "Android": [["Galaxy Nexus", "Samsung"], ["Kindle Fire", "Amazon"], ["Moto X", "Motorola"], ["Nexus", "Google"]]};
    var osVersions = {"iOS": ["7.0", "7.1.2", "8.0", "8.1", "8.3", "8.4", "8.4.1", "9.0"], "Android": ["Android 2.3", "Android 4.1", "Android 4.2"]}

    var geos = ['United States', 'United States', 'Germany', 'France', 'Denmark', 'Italy', 'Netherlands', 'Ukraine', 'Switzerland', 'Australia', 'New Zealand', 'China', 'India', 'Japan'];
    var carriers = {
        'United States' : ['ATT', 'Verizon', 'Sprint', 'T-Mobile'],
        'Germany' : ['Telekom', 'Vodafone'],
        'France' : ['Orange', 'SFR'],
        'Denmark' : ['TDC'],
        'Italy' : ['TIM'],
        'Netherlands' : ['KPN'],
        'Ukraine' : ['MTS Ukraine'],
        'Switzerland' : ['Swisscom'],
        'Australia' : ['Telstra'],
        'New Zealand' : ['Vodafone'],
        'China' : ['China Mobile', 'China Unicom'],
        'India' : ['Airtel', 'Vodafone'],
        'Japan' : ['NTT']
    }
    var connections = ['Wifi', '4g', '3g'];
    var appVersions = ['1.0', '2.0', '2.1'];

    var platform = mobilePlatform;
    var device = platformsAndDevices[platform][_.random(0, (platformsAndDevices[platform].length - 1))];
    var version = osVersions[platform][_.random(0,(osVersions[platform].length -1))];
    var geo = geos[_.random(0, (geos.length - 1))];
    var carrier = carriers[geo][_.random(0, (carriers.length - 1))];
    var connection = connections[_.random(0, (connections.length - 1))];
    var appVersion = appVersions[_.random(0, (appVersions.length - 1))];

    return {
        platform : platform,
        device : device,
        version : version,
        geo : geo,
        carrier : carrier,
        connection : connection,
        appVersion : appVersion,
        agentId : 'agent-id-' + _.random(0,1000)
    };
};

var getAppStartBeacon = function(sessionData) {
    var beacon = getDefaultAppStartBeacon();
    updateStandardBeaconProps(beacon,sessionData);
    beacon.userdata.Id = _.random(10,99) + 'ASD-RB' + _.random(10000,99999);
    return beacon;
}

var getDefaultAppStartBeacon = function() {

    return {
        "dmo": "iPad2,1",
        "dm": "Apple",
        "av": "1.1",
        "avi": 13,
        "ca": "中国电信",
        "osv": "iOS 5.1",
        "geo": "Jordan",
        "groupId": "gid-7",
        "jailBroken": "false",
        "agentId": "agent-id-33",
        "bts": [],
        "userdata": {},
        "userdataLong": {},
        "userdataDouble": {},
        "userdataBoolean": {},
        "userdataDateTimestampMs": {},
        "USERDATA_LONG_PREFIX": "LONG:",
        "USERDATA_DOUBLE_PREFIX": "DOUBLE:",
        "USERDATA_BOOLEAN_PREFIX": "BOOLEAN:",
        "USERDATA_CURRENT_DATE_TIME": "CURRENT_DATE_TIME",
        "type": "ui",
        "event": "App Start",
        "activity": "MainScreen"
    };
};

var getRootViewChangeBeacon = function(sessionData, viewName) {
    var beacon = getDefaultRootviewChange();
    updateStandardBeaconProps(beacon,sessionData);
    beacon.rootView = viewName;
    return beacon;
}

var getDefaultRootviewChange = function() {
    return {
            "dmo": "iPad2,1",
            "dm": "Apple",
            "av": "1.1",
            "avi": 13,
            "ca": "中国电信",
            "osv": "iOS 5.1",
            "geo": "United States",
            "groupId": "gid-7",
            "jailBroken": "false",
            "agentId": "agent-id-55",
            "bts": [],
            "userdata": {},
            "userdataLong": {},
            "userdataDouble": {},
            "userdataBoolean": {},
            "userdataDateTimestampMs": {},
            "USERDATA_LONG_PREFIX": "LONG:",
            "USERDATA_DOUBLE_PREFIX": "DOUBLE:",
            "USERDATA_BOOLEAN_PREFIX": "BOOLEAN:",
            "USERDATA_CURRENT_DATE_TIME": "CURRENT_DATE_TIME",
            "type": "ui",
            "event": "Root View Change",
            "rootView": "LatestView"
        }


}

var getInfoPoint = function(sessionData, infoClass, infoMethod) {
    var infoPoint = (mobilePlatform === 'iOS') ? customDataBeacon.getiOSInfoPoint() : customDataBeacon.getAndroidInfoPoint();
    var infoTs =  Date.now()
    infoPoint.st = infoTs - _.random(10,20);
    infoPoint.et = infoTs;
    infoPoint.mid.cls = infoClass;
    infoPoint.mid.mth = infoMethod;

    updateStandardBeaconProps(infoPoint, sessionData)
    return infoPoint;
}

var getInfoPointClass = function() {
    var iOSData = [
        {"cls":"ECommerce","mth":"processLogin:"},
        {"cls":"ECommerceCart","mth":"processOrder:"},
        {"cls":"ECommerceCart","mth":"addToCart:"},
        {"cls":"ECommerceCatalog","mth":"fetchCatalog:"},
    ];

    var androidData = [
        {"cls":"com.ecommerce.Login", "mth":"doLogin"},
        {"cls":"com.ecommerce.Cart", "mth":"processOrder"},
        {"cls":"com.ecommerce.Cart", "mth":"addToCart"},
        {"cls":"com.ecommerce.Catalog", "mth":"fetchCatalog"},
    ];
    return (mobilePlatform === 'iOS') ? iOSData[_.random(0,(iOSData.length -1))] : androidData[_.random(0,(androidData.length -1))] ;
}

var updateStandardBeaconProps = function(beacon, sessionData) {
    beacon.osv = sessionData.info.version;
    beacon.geo = sessionData.info.geo;
    beacon.dmo = sessionData.info.device[0];
    beacon.dm = sessionData.info.device[1];
    beacon.av = sessionData.info.appVersion;
    beacon.ca = sessionData.info.carrier;
    beacon.agentId = sessionData.info.agentId;
    beacon.ct = sessionData.info.connection;
}

var getNetworkRequestBeacon = function(sessionData, correlationInfo) {
    var beacon = getDefaultNetworkRequestBeacon();
    updateStandardBeaconProps(beacon,sessionData);

    beacon.st = correlationInfo.st;
    beacon.et = Date.now();
    beacon.crg = correlationInfo.correlationId;
    beacon.hrc = 200;
    beacon.bts[0] = {
        "btId": correlationInfo.btId,
        "estimatedTime": -1,
        "time": 42
    };
    beacon.pcl = correlationInfo.responseLength;
    beacon.url = sessionData.currentScreen.network.url.replace(serverHost, uiHost).replace('/appdynamicspilot','');

    if (_.random(0,100) < 3) {
        beacon.ne = 'Cannot find host';
        delete beacon.hrc;
        delete beacon.crg;
        delete beacon.bts[0].btId;
        logger.info('Adding network error for ' + sessionData.currentScreen.network.url);
    }

    return beacon;
}

var getDefaultNetworkRequestBeacon = function() {

    return         {
        "dmo": "iPhone5,1",
        "dm": "Apple",
        "av": "2.0",
        "avi": 13,
        "ca": "中国电信",
        "osv": "iOS 5.1",
        "geo": "France",
        "groupId": "gid-7",
        "jailBroken": "false",
        "agentId": "agent-id-55",
        "bts": [],
        "userdataLong": {},
        "userdataDouble": {},
        "userdataBoolean": {},
        "userdataDateTimestampMs": {},
        "USERDATA_LONG_PREFIX": "LONG:",
        "USERDATA_DOUBLE_PREFIX": "DOUBLE:",
        "USERDATA_BOOLEAN_PREFIX": "BOOLEAN:",
        "USERDATA_CURRENT_DATE_TIME": "CURRENT_DATE_TIME",
        "type": "network-request",
        "st": 1452202564974,
        "et": 1452202565965,
        "hrc": 200,
        "ct": "2g",
        "url": "http://www.ecommerce.com/login",
        "qcl": 2416,
        "pcl": 839,
        "sg": "",
        "crg": ""
    }
}

var updateCrashBeacon = function(sessionData, beacon) {

    if (mobilePlatform === 'iOS') {
        var crName = 'crashReport';
        beacon[crName].actualTimestamp = Date.now();
        beacon[crName].timestamp = Date.now();
        beacon[crName].processName = appName;
        beacon[crName].appBundleId = appName;
        beacon[crName].hardwareModel = sessionData.info.device[0];
        beacon[crName].osVersion =  sessionData.info.version;
        beacon[crName].appVersion = sessionData.info.appVersion;
        beacon.dmo = sessionData.info.device[0];

        if (sessionData.info.appVersion == '2.0') {
            beacon.crashReport.threads[0].stackFrames[3].symbolName = 'add';
            beacon.crashReport.threads[0].stackFrames[3].fileName = 'Shared.m';
            beacon.crashReport.threads[0].stackFrames[3].lineNumber = '108';
        } else if (sessionData.info.appVersion == '2.1') {
            beacon.crashReport.threads[0].stackFrames[3].symbolName = 'promoview';
            beacon.crashReport.threads[0].stackFrames[3].fileName = 'Promo.m';
            beacon.crashReport.threads[0].stackFrames[3].lineNumber = '327';
        }
    } else {
        var crName = 'androidCrashReport';
        beacon[crName].time = Date.now();
        beacon.dmo = sessionData.info.device[0];
        beacon.dm = sessionData.info.device[1];

        if (sessionData.info.appVersion == '2.0') {
            beacon.androidCrashReport.stackTrace.cause.cause.stackTraceElements[0].c = 'com.appdynamics.pmdemoapps.android.ECommerceAndroid.Utilities';
            beacon.androidCrashReport.stackTrace.cause.cause.stackTraceElements[0].f = 'Utilities.java';
            beacon.androidCrashReport.stackTrace.cause.cause.stackTraceElements[0].l = '134';
        } else if (sessionData.info.appVersion == '2.1') {
            beacon.androidCrashReport.stackTrace.cause.cause.stackTraceElements[0].c = 'com.appdynamics.pmdemoapps.android.ECommerceAndroid.Promo';
            beacon.androidCrashReport.stackTrace.cause.cause.stackTraceElements[0].f = 'Promo.java';
            beacon.androidCrashReport.stackTrace.cause.cause.stackTraceElements[0].l = '84';
        }
    }

    beacon.ca = sessionData.info.carrier;
    beacon.st = Date.now();
    beacon.osv = sessionData.info.version;
    beacon.mv = sessionData.info.appVersion;
    beacon.ct = sessionData.info.connection;
    beacon.av = sessionData.info.appVersion;
    beacon.geo = sessionData.info.geo;

    var ts = Date.now();
    beacon.bcs.forEach(function(item) {
        ts = ts - _.random(3000,8000);
        item.ts = ts;
    });

    return beacon;
}

session();
