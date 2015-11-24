var exports = module.exports = {};

exports.getCartSize = function() {
    return {
        "ab": "db684041fd062487290475eedab48d151cea0860",
        "av": "1.0",
        "cc": "8",
        "cf": "-1894",
        "dmo": "iPhone5,2",
        "ds": "238552",
        "metricName": "Cart Size",
        "metricValues": [
        14
    ],
        "mv": "1",
        "osv": "7.1",
        "tm": "-2048",
        "type": "custom-metric"
    }
}

exports.getStartTimer = function() {
    return {
        "ab": "db684041fd062487290475eedab48d151cea0860",
        "av": "1.0",
        "cc": "8",
        "cf": "-1894",
        "dmo": "iPhone5,2",
        "ds": "238552",
        "metricValues": [
            1441126474267,
            1441126477779
        ],
        "mv": "1",
        "osv": "7.1",
        "timerName": "Start Up Time",
        "tm": "-2048",
        "type": "timer"
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
        "userdata":{"Item Purchased":"Pizza","Toppings":"Lotsa-Mottsa"},
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