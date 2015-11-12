/*******************************
 * Dependencies
 *******************************/
var request = require('request');
var _ = require('lodash');
var Q = require('q');
var zlib = require('zlib');
var winston = require('winston');
var customDataBeacon = require('./customDataBeacon');

/*******************************
 * Change Me
 *******************************/
var beaconHost = process.env.EUM_URL;
var appDKey =  process.env.EUM_KEY;
var serverHost = process.env.ECOMM_URL;
var mobilePlatform = process.env.PLATFORM;
if (mobilePlatform === 'iOS') {
    var crashBeacon = require('./iosCrashBeacon');
} else {
    var crashBeacon = require('./androidCrashBeacon');
}
var debugConsole = process.env.DEBUG_CONSOLE || false;
var logFilePath = '';
var logFileLevel = 'error';
var uiHost = 'http://www.ecommerce.com';
var loginUser = 'test';
var loginPassword = 'appdynamics';
var appName = mobilePlatform === 'iOS' ? 'com.appdynamics.ECommerce-iOS' : 'com.appdynamics.pmdemoapps.ECommerceAndroid';
if (process.env.APP_NAME) {
    appName = process.env.APP_NAME;
}

/*******************************
 * Basic error checking and configuration
 *******************************/
winston.add(winston.transports.File, { filename: logFilePath + 'load.log', level : logFileLevel });
if (!debugConsole) {
    winston.remove(winston.transports.Console);
}
if (!beaconHost || !serverHost || !appDKey) {
    winston.error('Beacon host, server host or appDKey is missing');
}

/*******************************
 * Functions
 *******************************/
var session = function(sessionData) {
    if (!sessionData) {
        sessionData = {
            pages : getPages(),
            currentPage : null,
            info : getInfo()
        }
        winston.info('New session start');
        var appStartBeacon = getAppStartBeacon(sessionData);
        winston.info('App start beacon', appStartBeacon);
        sendBeacon([appStartBeacon, customDataBeacon.getStartTimer()], sessionData).then(function(beaconPost) {
            if (beaconPost.response.statusCode === 200) {
                winston.info('App start beacon posted successfully');
            } else {
                winston.error('App start beacon problem with status code ' + beaconPost.response.statusCode);
            }
        }).catch(function(error) {
            winston.error('App start beacon problem : ', error.message);
        });

    } else if (sessionData.pages.length === 0) {
        return session();
    }

    if (_.random(0,100) < 2) {
        var cb = updateCrashBeacon(sessionData, crashBeacon.getBeacon());
        sendBeacon([cb], sessionData).then(function(beaconPost) {
            if (beaconPost.response.statusCode === 200) {
                winston.info('Crash beacon posted successfully');
            } else {
                winston.error('Crash beacon problem with status code ' + beaconPost.response.statusCode);
            }
        }).catch(function(err) {
            winston.error('Crash beacon error : ', err.message);
        })
    }

    sessionData.currentPage = sessionData.pages[0];
    sessionData.pages.shift();

    winston.info("Requesting page " + sessionData.currentPage.url);
    var st = Date.now();
    sessionData.currentPage.getPage(sessionData).then(function(serverResponse) {
        var correlationInfo = sessionData.currentPage.processPage(sessionData, serverResponse);
        correlationInfo.st = st;
        winston.info("Correlation data from " + sessionData.currentPage.url + " : ", correlationInfo);
        var beacon = getNetworkRequestBeacon(sessionData, correlationInfo);
        var beaconArray = [beacon];

        if (sessionData.currentPage.url === serverHost + '/appdynamicspilot/rest/cart/co') {
            beaconArray.push(customDataBeacon.getCartSize());
        }

        return sendBeacon(beaconArray, sessionData);
    }).then(function(beaconPost) {
        if (beaconPost.response.statusCode === 200) {
            winston.info('Network beacon posted successfully');
        } else {
            winston.error('Network beacon problem with status code ' + beaconPost.response.statusCode);
        }
        session(sessionData);
    }).catch(function(err) {
        winston.error('Page flow error on ' + sessionData.currentPage.url + ' : ', err.stack);
        session();
    });
}

var getPages = function() {
    return [
        { url : serverHost + '/appdynamicspilot/rest/user', getPage : getLogin, processPage : processLogin},
        { url : serverHost + '/appdynamicspilot/rest/items/all', getPage : getPage, processPage : processPage},
        { url : serverHost + '/appdynamicspilot/rest/cart/1', getPage : getPage, processPage : processPage},
        { url : serverHost + '/appdynamicspilot/rest/cart/co', getPage : getCheckout, processPage : processPage}
    ];
}

var getLogin = function(sessionData) {

    var deferred = Q.defer();
    var options = {
        url : sessionData.currentPage.url,
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

var getCheckout = function(sessionData) {
    return getPage(sessionData,  {'appdynamicssnapshotenabled' : 'true'});
}
var getPage= function(sessionData, headers) {
    var headers = headers || {};
    var deferred = Q.defer();
    var options = {
        url : sessionData.currentPage.url,
        headers : {
            'ADRUM' : 'isAjax:true',
            'ADRUM_1' : 'isMobile:true',
            'User-Agent' : 'Ecommerce Mobile Application/1.0 CFNetwork/711.2.23 Darwin/13.4.0',
            'JSESSIONID' : sessionData.jSessionId + '.route2',
            'USERNAME' : loginUser,
            'ROUTEID' : 'ROUTEID=.route2',
            'Cookie' : 'JSESSIONID=' + sessionData.jSessionId + '.route2'
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
    var c = {};

    if (headers['adrum_0']) {
        c.correlationId = headers['adrum_0'].split(':')[1];
    }
    if (headers['adrum_1']) {
        c.btId = headers['adrum_1'].split(':')[1];
    }
    if (headers['adrum_2']) {
        c.btERT =  headers['adrum_2'].split(':')[1];
    }
    return c;
}

var getInfo = function() {
    var platformsAndDevices = {"iOS": [["iPhone5,1", "Apple"], ["iPad2,1", "Apple"], ["iPhone5,4", "Apple"], ["iPhone6,2", "Apple"], ["iPhone5,4", "Apple"]], "Android": [["Galaxy Nexus", "Samsung"], ["Kindle Fire", "Amazon"], ["Moto X", "Motorola"], ["Nexus", "Google"]]};
    var osVersions = {"iOS": ["7.0", "7.1.2", "8.0", "8.1", "8.3", "8.4", "8.4.1", "9.0"], "Android": ["Android 2.3", "Android 4.1", "Android 4.2"]}
    //var versions = ['1.0', '1.2', '1.3', '2.0'];
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
        agentId : 'agent-id-' + _.random(0,100)
    };
}

var getNetworkRequestBeacon = function(sessionData, correlationInfo) {
    var beacon = getDefaultNetworkRequestBeacon();
    beacon.st = correlationInfo.st;
    beacon.et = Date.now();
    beacon.crg = correlationInfo.correlationId;
    beacon.hrc = 200;
    beacon.bts[0].btId = correlationInfo.btId
    beacon.url = sessionData.currentPage.url.replace(serverHost, uiHost).replace('/appdynamicspilot','');
    beacon.dmo = sessionData.info.device[0];
    beacon.dm = sessionData.info.device[1];
    beacon.geo = sessionData.info.geo;
    beacon.ca = sessionData.info.carrier;
    beacon.osv = sessionData.info.version;
    beacon.av = sessionData.info.appVersion;
    beacon.mv = sessionData.info.appVersion;
    beacon.ct = sessionData.info.connection;

    if (_.random(0,100) < 3) {
        beacon.ne = 'Cannot find host';
        delete beacon.hrc;
        delete beacon.crg;
        delete beacon.bts[0].btId;
        winston.info('Adding network error for ' + sessionData.currentPage.url);
    }
    return beacon;
}


var getDefaultNetworkRequestBeacon = function() {
    return {
            "ab": "db684041fd062487290475eedab48d151cea0860",
            "av": "1.0",
            "bts": [
                {
                    "btId": "42",
                    "estimatedTime": -1,
                    "time": 42
                }
            ],
            "ca": "O2",
            "cc": "8",
            "cf": "-1894",
            "crg": "client request guid",
            "ct": "cell",
            "dmo": "iPhone4,1",
            "ds": "238552",
            "et": "timestamp",
            "hrc": 200,
            "mv": "1",
            "osv": "7.1",
            "see": false,
            "sst": "f",
            "st": "timestamp",
            "tm": "-2048",
            "type": "network-request",
            "url": "http://192.168.59.103/",
            "geo" : "India"
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

var getAppStartBeacon = function(sessionData) {
    var beacon = getDefaultAppStartBeacon();
    beacon.st = Date.now();
    beacon.osv = sessionData.info.version;
    beacon.geo = sessionData.info.geo;
    beacon.dmo = sessionData.info.device[0];
    beacon.dm = sessionData.info.device[1];
    beacon.av = sessionData.info.appVersion;
    beacon.ca = sessionData.info.carrier;
    return beacon;
}

var getDefaultAppStartBeacon = function() {
    return {
        "st" : '$ST',
        "cf" : "-1994",
        "type" : "ui",
        "osv" : '$OSVERSION',
        "geo" : '$COUNTRYNAME',
        "dmo" : '$IPHONE',
        //"mv" : '$VERSION',
        "ec" : '1015',
        "event" : 'App Start',
        "tm" : "-2048",
        "cc" : "8",
        "ab" : '3861444463b35dce6e4b16e930e05a39ebc4a323',
        "agv" : '4.1.0.0',
        "rootView" : "UITabBarController",
        "ds" : "475962",
        "av" : "1.0"
    };
};

var sendBeacon = function(beacon, sessionData) {

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
                'bid' : '1a9d6f577463cca8d8f0720e279d007'
            },
            body : gzippedBeacon
        }

        winston.info(beacon);
        request.post(options, function(error, response, body) {
            if (error) {
                return deferred.reject(new Error(error));
            }
            deferred.resolve({response : response, body : body});
        });
    });
    return deferred.promise;
}

session();
