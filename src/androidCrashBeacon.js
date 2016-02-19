var exports = module.exports = {};

exports.getBeacon = function() {
    return {
        "type": "crash-report",
        "ec": "1015",
        "avi": 1,
        "av": "${VERSION}",
        "agv": "4.1.4.0",
        "ab": "bd7bfaab131f9ead6cf916905f927f3e57cc38c2",
        "dm": "${DEVICE}",
        "dmo": "sdk_phone_armv7",
        "ds": 541,
        "tm": "731",
        "cf": "Unknown",
        "cc": 1,
        "osv": "${OSVERSION}",
        "geo": '${COUNTRYNAME}',
        "ca": "${CARRIER}",
        "ct": '${CONNTYPE}',
        "bid":"66ce9cb5a13f7436fb21b39c6c6c8fb7",
        "bcs": [
            {
                "text": 'ChangeAddressView',
                "ts": 1443104460535
            },
            {
                "text": 'SettingsView',
                "ts": 1443104463476
            },
            {
                "text": 'CartView',
                "ts": 1443104460419
            },
            {
                "text": 'ListView',
                "ts": 1443104460572
            },
            {
                "text": 'LoginView',
                "ts": 1443104460700
            }
        ],
        "androidCrashReport": {
            "stackTrace": {
                "exceptionClassName": 'java.lang.IllegalStateException',
                "message": 'Could not execute method of the activity',
                "cause": {
                    'exceptionClassName': 'java.lang.reflect.InvocationTargetException',
                    "message": '',
                    "cause": {
                        'exceptionClassName': 'java.lang.NullPointerException',
                        "message": 'Attempt to invoke virtual method boolean java.lang.String.equals java.lang.Object on a null object reference',
                        "stackTraceElements": [{
                            "c": 'com.appdynamics.pmdemoapps.android.ECommerceAndroid.CartFragment',
                            "m": "crashMe",
                            "f": 'CartFragment.java',
                            "l": 238
                        },
                            {
                                "c": "com.appdynamics.pmdemoapps.android.ECommerceAndroid.ItemListActivity",
                                "m": "crashAction",
                                "f": "ItemListActivity.java",
                                "l": 176
                            },
                            {
                                "c": "java.lang.reflect.Method",
                                "m": "invoke",
                                "f": "Method.java",
                                "l": -2
                            }, {"c": "java.lang.reflect.Method", "m": "invoke", "f": "Method.java", "l": 372},
                            {
                                "c": 'android.view.View$1',
                                "m": "onClick",
                                "f": "View.java",
                                "l": 4015
                            }, {"c": "android.view.View", "m": "performClick", "f": "View.java", "l": 4780},
                            {
                                "c": 'android.view.View$PerformClick',
                                "m": "run",
                                "f": "View.java",
                                "l": 19866
                            }, {"c": "android.os.Handler", "m": "handleCallback", "f": "Handler.java", "l": 739},
                            {
                                "c": "android.os.Handler",
                                "m": "dispatchMessage",
                                "f": "Handler.java",
                                "l": 95
                            }, {"c": "android.os.Looper", "m": "loop", "f": "Looper.java", "l": 135},
                            {
                                "c": "android.app.ActivityThread",
                                "m": "main",
                                "f": "ActivityThread.java",
                                "l": 5257
                            }, {"c": "java.lang.reflect.Method", "m": "invoke", "f": "Method.java", "l": -2},
                            {"c": "java.lang.reflect.Method", "m": "invoke", "f": "Method.java", "l": 372},
                            {
                                "c": 'com.android.internal.os.ZygoteInit$MethodAndArgsCaller',
                                "m": "run",
                                "f": "ZygoteInit.java",
                                "l": 903
                            },
                            {"c": "com.android.internal.os.ZygoteInit", "m": "main", "f": "ZygoteInit.java", "l": 698}]
                    },
                    "stackTraceElements": [{
                        "c": "java.lang.reflect.Method",
                        "m": "invoke",
                        "f": "Method.java",
                        "l": -2
                    },
                        {"c": "java.lang.reflect.Method", "m": "invoke", "f": "Method.java", "l": 372},
                        {
                            "c": 'android.view.View$1',
                            "m": "onClick",
                            "f": "View.java",
                            "l": 4015
                        }, {"c": "android.view.View", "m": "performClick", "f": "View.java", "l": 4780},
                        {
                            "c": 'android.view.View$PerformClick',
                            "m": "run",
                            "f": "View.java",
                            "l": 19866
                        }, {"c": "android.os.Handler", "m": "handleCallback", "f": "Handler.java", "l": 739},
                        {
                            "c": "android.os.Handler",
                            "m": "dispatchMessage",
                            "f": "Handler.java",
                            "l": 95
                        }, {"c": "android.os.Looper", "m": "loop", "f": "Looper.java", "l": 135},
                        {
                            "c": "android.app.ActivityThread",
                            "m": "main",
                            "f": "ActivityThread.java",
                            "l": 5257
                        }, {"c": "java.lang.reflect.Method", "m": "invoke", "f": "Method.java", "l": -2},
                        {"c": "java.lang.reflect.Method", "m": "invoke", "f": "Method.java", "l": 372},
                        {
                            "c": 'com.android.internal.os.ZygoteInit$MethodAndArgsCaller',
                            "m": "run",
                            "f": "ZygoteInit.java",
                            "l": 903
                        },
                        {"c": "com.android.internal.os.ZygoteInit", "m": "main", "f": "ZygoteInit.java", "l": 698}]
                },
                "stackTraceElements": [{
                    "c": 'android.view.View$1',
                    "m": "onClick",
                    "f": "View.java",
                    "l": 4020
                }, {"c": "android.view.View", "m": "performClick", "f": "View.java", "l": 4780},
                    {
                        "c": 'android.view.View$PerformClick',
                        "m": "run",
                        "f": "View.java",
                        "l": 19866
                    }, {"c": "android.os.Handler", "m": "handleCallback", "f": "Handler.java", "l": 739},
                    {
                        "c": "android.os.Handler",
                        "m": "dispatchMessage",
                        "f": "Handler.java",
                        "l": 95
                    }, {"c": "android.os.Looper", "m": "loop", "f": "Looper.java", "l": 135},
                    {
                        "c": "android.app.ActivityThread",
                        "m": "main",
                        "f": "ActivityThread.java",
                        "l": 5257
                    }, {"c": "java.lang.reflect.Method", "m": "invoke", "f": "Method.java", "l": -2},
                    {"c": "java.lang.reflect.Method", "m": "invoke", "f": "Method.java", "l": 372},
                    {
                        "c": 'com.android.internal.os.ZygoteInit$MethodAndArgsCaller',
                        "m": "run",
                        "f": "ZygoteInit.java",
                        "l": 903
                    },
                    {"c": "com.android.internal.os.ZygoteInit", "m": "main", "f": "ZygoteInit.java", "l": 698}]
            },
            "thread": 'Thread[main,5,main]',
            "time":"${AT}"
        }
    };

}

