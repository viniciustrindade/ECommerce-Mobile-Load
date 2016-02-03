var exports = module.exports = {};

exports.getCustomMetric = function() {
    return {
        "ab": "db684041fd062487290475eedab48d151cea0860",
        "av": "1.0",
        "cc": "8",
        "cf": "-1894",
        "dmo": "iPhone5,2",
        "ds": "238552",
        "metricName": "Cart Size",
        "metricValues": [],
        "mv": "1",
        "osv": "7.1",
        "tm": "-2048",
        "type": "custom-metric"
    }
}
exports.getCustomMetricSession = function() {
    return {
        "dmo":"iPad2,1",
        "dm":"Apple",
        "av":"1.1",
        "avi":13,
        "ca":"Verizon",
        "osv":"iOS 5.1",
        "geo":"France",
        "groupId":"gid-7",
        "jailBroken":"false",
        "agentId":"agent-id-11",
        "bts":[],
        "userdata":{},
        "userdataLong":{},
        "userdataDouble":{},
        "userdataBoolean":{},
        "userdataDateTimestampMs":{},
        "USERDATA_LONG_PREFIX":"LONG:",
        "USERDATA_DOUBLE_PREFIX":"DOUBLE:",
        "USERDATA_BOOLEAN_PREFIX":"BOOLEAN:",
        "USERDATA_CURRENT_DATE_TIME":"CURRENT_DATE_TIME",
        "type":"custom-metric-event",
        "metricName":"SQLite errors",
        "val":8,
        "st":1452202542510
    }
}

exports.getNewTimer = function() {
    return {
        "dmo":"iPad2,1",
        "dm":"Apple",
        "av":"1.1",
        "avi":13,
        "ca":"AT&T",
        "osv":"iOS 6.0",
        "geo":"France",
        "groupId":"gid-7",
        "jailBroken":"false",
        "agentId":"agent-id-11",
        "bts":[],
        "userdata":{},
        "userdataLong":{},
        "userdataDouble":{},
        "userdataBoolean":{},
        "userdataDateTimestampMs":{},
        "USERDATA_LONG_PREFIX":"LONG:",
        "USERDATA_DOUBLE_PREFIX":"DOUBLE:",
        "USERDATA_BOOLEAN_PREFIX":"BOOLEAN:",
        "USERDATA_CURRENT_DATE_TIME":"CURRENT_DATE_TIME",
        "type":"timer",
        "metricValues":[],
        "timerName":"Repainting framebuffer"
    }
}

exports.getAndroidInfoPoint = function() {
    return {
        "dmo":"Kindle Fire",
        "dm":"Amazon",
        "av":"2.0",
        "avi":15,
        "ca":"AT&T",
        "osv":"Android 4.2",
        "geo":"Jordan",
        "groupId":"gid-4",
        "jailBroken":"true",
        "agentId":"agent-id-44",
        "type":"method-call",
        "st":1448046450000,
        "et":1448046454449,
        "mid":{
            "cls":"com.example.Class",
            "mth":"method",
            "icm":false,
            "ruleName":"add to shopping cart"
        },
        "args":["1014453496","0.46631253","_Gy`Qy"],
        "ret":"-1968667546"
    };
}

exports.getiOSInfoPoint = function() {
    return {
        "dmo":"iPhone5,1",
        "dm":"Apple",
        "av":"1.0",
        "avi":10,
        "ca":"Verizon",
        "osv":"iOS 5.1",
        "geo":"Jordan",
        "groupId":"gid-7",
        "jailBroken":"true",
        "agentId":"agent-id-77",
        "type":"method-call",
        "st":1448046447002,
        "et":1448046450748,
        "mid":{"cls":"ECommerce","mth":"processLogin:","icm":false,"ruleName":"image downloads"},
        "args":["-140854678","0.9124946","dcab666"],
        "ret":"0.91552484"
    };
}

exports.getInfoPoint = function() {
    return {
        "dmo":"iPhone5,1",
        "dm":"Apple",
        "av":"1.0",
        "avi":10,
        "ca":"Verizon",
        "osv":"iOS 5.1",
        "geo":"Jordan",
        "groupId":"gid-7",
        "jailBroken":"true",
        "agentId":"agent-id-77",
        "type":"method-call",
        "st":1448046447002,
        "et":1448046450748,
        "mid":{"cls":"ECommerce","mth":"processLogin:","icm":false,"ruleName":"image downloads"},
        "args":["-140854678","0.9124946","dcab666"],
        "ret":"0.91552484"
    };
}
