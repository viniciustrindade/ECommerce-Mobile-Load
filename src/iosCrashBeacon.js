var exports = module.exports = {};

exports.getBeacon = function() {
  return {
    "ca": '$CARRIER',
    "st": '$START-TIME',
    "cf": "0",
    "type": 'crash-report',
    "osv": '$OSVERSION',
    "dmo": '$IPHONE',
    "mv": '$VERSION',
    "ec": "757",
    "ct": '$CONNECTION-TYPE',
    "tm": "989",
    "cc": "2",
    "ab": '3861444463b35dce6e4b16e930e05a39ebc4a323',
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
    "crashReport": {
      "processId": 447,
      "signalName": "SIGSEGV",
      "actualTimestamp": 'ACTUAL-TIMESTAMP',
      "osBuild": "13A404",
      "hardwareModel": 'iPhone7,2',
      "cpuType": {
        "type": 12,
        "subType": 9
      },
      "faultAddress": 0,
      "cpuCount": 2,
      "images": [
        {
          "baseAddress": 884736,
          "codeType": {
            "type": 12,
            "subType": 9
          },
          "imagePath": '/var/mobile/Containers/Bundle/Application/C64FEBB0-EF8E-4079-BDE0-E35C531F0CA2/ECommerce-iOS.app/ECommerce-iOS',
          "imageUUID": "feaae512eb613a75a33dee253fa87bb6",
          "imageSize": 360448
        },
        {
          "baseAddress": 663785472,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/UIKit.framework/UIKit',
          "imageUUID": "99f275fdacc23b69a316c5ddfd597633",
          "imageSize": 11558912
        },
        {
          "baseAddress": 861966336,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/WebKitLegacy.framework/WebKitLegacy',
          "imageUUID": "4129ce06c57c39808811cf10666a941a",
          "imageSize": 839680
        },
        {
          "baseAddress": 717897728,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/CoreUI.framework/CoreUI',
          "imageUUID": "cedfa98167e13781ab76da4ae1ecdb6d",
          "imageSize": 663552
        },
        {
          "baseAddress": 848986112,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/WebCore.framework/WebCore',
          "imageUUID": "b062ba7c4d5b37eaa48afa85bd40e889",
          "imageSize": 12636160
        },
        {
          "baseAddress": 601370624,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CoreImage.framework/CoreImage',
          "imageUUID": "8d627f86449331498cebf01524c0807f",
          "imageSize": 1593344
        },
        {
          "baseAddress": 801669120,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/Quagga.framework/Quagga',
          "imageUUID": "2179ed260f0e345eb6e0a34b07be2b20",
          "imageSize": 454656
        },
        {
          "baseAddress": 675344384,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/VideoToolbox.framework/VideoToolbox',
          "imageUUID": "6d35a6b42ac73bb68f1b6e22fb2b8942",
          "imageSize": 450560
        },
        {
          "baseAddress": 582213632,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/AudioToolbox.framework/AudioToolbox',
          "imageUUID": "109f074358223958bd6d38979074ea51",
          "imageSize": 3014656
        },
        {
          "baseAddress": 603582464,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CoreMedia.framework/CoreMedia',
          "imageUUID": "16a11ac9ef4a34beb0bc2263d3228373",
          "imageSize": 802816
        },
        {
          "baseAddress": 811331584,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/SpringBoardServices.framework/SpringBoardServices',
          "imageUUID": "a63ff41ed1db3c8eb8b2a1263fc2b999",
          "imageSize": 139264
        },
        {
          "baseAddress": 875577344,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libAccessibility.dylib',
          "imageUUID": "a56b70d4a5583bd985c777a914d4848f",
          "imageSize": 45056
        },
        {
          "baseAddress": 837996544,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/UIFoundation.framework/UIFoundation',
          "imageUUID": "497f1ec38297387a927cbe9aaeb79a11",
          "imageSize": 823296
        },
        {
          "baseAddress": 730918912,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/FrontBoardServices.framework/FrontBoardServices',
          "imageUUID": "b8ec4e2e973034c79a0a93cd2d33b716",
          "imageSize": 204800
        },
        {
          "baseAddress": 722481152,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/DictionaryServices.framework/DictionaryServices',
          "imageUUID": "4d1ef1f5d44838e6bec2402841722432",
          "imageSize": 131072
        },
        {
          "baseAddress": 692264960,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/BackBoardServices.framework/BackBoardServices',
          "imageUUID": "ed6d1834924c38228c82e0fce8ba4171",
          "imageSize": 122880
        },
        {
          "baseAddress": 656236544,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/QuartzCore.framework/QuartzCore',
          "imageUUID": "55464079d8e0328a8b77450493f447ac",
          "imageSize": 1519616
        },
        {
          "baseAddress": 622366720,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/MediaAccessibility.framework/MediaAccessibility',
          "imageUUID": "91afa8c7fc0430e48100d240f4ea7a08",
          "imageSize": 24576
        },
        {
          "baseAddress": 839188480,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/UserNotificationServices.framework/UserNotificationServices',
          "imageUUID": "8686b3836365325aa87dce91b52f3a0a",
          "imageSize": 40960
        },
        {
          "baseAddress": 836972544,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/TextInput.framework/TextInput',
          "imageUUID": "104c1c63c8da3b3ba6b676bb65a74cbb",
          "imageSize": 180224
        },
        {
          "baseAddress": 771092480,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/MobileAsset.framework/MobileAsset',
          "imageUUID": "f324d1361f2c31a38af3646b1c6abbfe",
          "imageSize": 57344
        },
        {
          "baseAddress": 691326976,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/AssertionServices.framework/AssertionServices',
          "imageUUID": "37d611bb8b743e68b984d6b3a953df8e",
          "imageSize": 40960
        },
        {
          "baseAddress": 606044160,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CoreText.framework/CoreText',
          "imageUUID": "71f542f8b8f532febbe5dc5ce5f4c454",
          "imageSize": 983040
        },
        {
          "baseAddress": 605646848,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CoreTelephony.framework/CoreTelephony',
          "imageUUID": "57271ea34cab34189fc9b8da54e934b2",
          "imageSize": 397312
        },
        {
          "baseAddress": 599257088,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CoreGraphics.framework/Resources/libCGXType.A.dylib',
          "imageUUID": "31a24a6321273a3987745d733a789d17",
          "imageSize": 12288
        },
        {
          "baseAddress": 884441088,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libcupolicy.dylib',
          "imageUUID": "2569eeba5e093ccd84d8588b836f8a49",
          "imageSize": 32768
        },
        {
          "baseAddress": 729788416,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/FontServices.framework/libGSFontCache.dylib',
          "imageUUID": "782ef34800a939b9a22ac5a74ee6157f",
          "imageSize": 49152
        },
        {
          "baseAddress": 728899584,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/FontServices.framework/FontServices',
          "imageUUID": "8e70cae34e513f2d922f12fd5152bcd2",
          "imageSize": 4096
        },
        {
          "baseAddress": 723980288,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/FaceCore.framework/FaceCore',
          "imageUUID": "f0d1b2d6f6d237df9055424ee680921f",
          "imageSize": 4345856
        },
        {
          "baseAddress": 692396032,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/BaseBoard.framework/BaseBoard',
          "imageUUID": "f897e25e75983b6f9b4d6969d65d2adb",
          "imageSize": 274432
        },
        {
          "baseAddress": 688873472,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/AppSupport.framework/AppSupport',
          "imageUUID": "274d8702b280376eb463ec6dc471c4fa",
          "imageSize": 262144
        },
        {
          "baseAddress": 629526528,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/MetalPerformanceShaders.framework/MetalPerformanceShaders',
          "imageUUID": "ad266dca26553d8a8d143241bc9dccf3",
          "imageSize": 299008
        },
        {
          "baseAddress": 607027200,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CoreVideo.framework/CoreVideo',
          "imageUUID": "b176abcaba7032e58f887a27d00d4df1",
          "imageSize": 102400
        },
        {
          "baseAddress": 591360000,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CoreAudio.framework/CoreAudio',
          "imageUUID": "c89e57860d39335aa0ecc3b26447f64a",
          "imageSize": 724992
        },
        {
          "baseAddress": 887541760,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/liblockdown.dylib',
          "imageUUID": "9800cfa53d1a3676980626710849f1bd",
          "imageSize": 45056
        },
        {
          "baseAddress": 881553408,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libTelephonyUtilDynamic.dylib',
          "imageUUID": "dc9437fee8a5343a80017d7702df397a",
          "imageSize": 339968
        },
        {
          "baseAddress": 839032832,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/UserFS.framework/UserFS',
          "imageUUID": "2b777c09405b36f297a8778231a533d3",
          "imageSize": 16384
        },
        {
          "baseAddress": 800600064,

          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/ProofReader.framework/ProofReader',
          "imageUUID": "36d60f77431d32be8627f1af5e3c9402",
          "imageSize": 655360
        },
        {
          "baseAddress": 795185152,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/PowerLog.framework/PowerLog',
          "imageUUID": "80f412683df23e2ba7e31e03594f5ee1",
          "imageSize": 49152
        },
        {
          "baseAddress": 794763264,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/PhysicsKit.framework/PhysicsKit',
          "imageUUID": "6594b3a0294f3a8684a87525879affef",
          "imageSize": 319488
        },
        {
          "baseAddress": 748216320,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/HangTracer.framework/HangTracer',
          "imageUUID": "38fc2cdb60b53d3299dcfccb37be406a",
          "imageSize": 4096
        },
        {
          "baseAddress": 748126208,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/GraphicsServices.framework/GraphicsServices',
          "imageUUID": "d7234b0d2d313c15bc397b5ba2df1268",
          "imageSize": 73728
        },
        {
          "baseAddress": 719134720,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/CrashReporterSupport.framework/CrashReporterSupport',
          "imageUUID": "07d6cda31c3136c38903a4dc1571f56c",
          "imageSize": 57344
        },
        {
          "baseAddress": 708202496,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/ConstantClasses.framework/ConstantClasses',
          "imageUUID": "6e18aa889fe23052b1e8f5598639949a",
          "imageSize": 20480
        },
        {
          "baseAddress": 706949120,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/CommonUtilities.framework/CommonUtilities',
          "imageUUID": "435fe2de606a3e0b974e2c7766a775e0",
          "imageSize": 73728
        },
        {
          "baseAddress": 684359680,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/AggregateDictionary.framework/AggregateDictionary',
          "imageUUID": "a132a79f3d9030b58cb758dc23763f67",
          "imageSize": 20480
        },
        {
          "baseAddress": 637161472,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/OpenGLES.framework/OpenGLES',
          "imageUUID": "833c4cf81cee3ea2aa554528d37375b7",
          "imageSize": 36864
        },
        {
          "baseAddress": 629194752,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/Metal.framework/Metal',
          "imageUUID": "16615062130a31fe9ecd15f1d02aeae5",
          "imageSize": 262144
        },
        {
          "baseAddress": 616464384,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/JavaScriptCore.framework/JavaScriptCore',
          "imageUUID": "d35dfec001e23346bc2c68416f5631bb",
          "imageSize": 4263936
        },
        {
          "baseAddress": 613531648,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/ImageIO.framework/ImageIO',
          "imageUUID": "9ecc6683b8ec3a3598cd598ec6d69842",
          "imageSize": 2932736
        },
        {
          "baseAddress": 601251840,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CoreGraphics.framework/Resources/libRIP.A.dylib',
          "imageUUID": "272ddf411f473bcb93af05fccdf33485",
          "imageSize": 118784
        },
        {
          "baseAddress": 592302080,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CoreData.framework/CoreData',
          "imageUUID": "5d7e1f2a6a40358997f68ca2e9d026a4",
          "imageSize": 2322432
        },
        {
          "baseAddress": 629825536,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/MobileCoreServices.framework/MobileCoreServices',
          "imageUUID": "119eacbf6c333085a30ce71c78f6d0bc",
          "imageSize": 679936
        },
        {
          "baseAddress": 609230848,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/Foundation.framework/Foundation',
          "imageUUID": "298c8630d8ed3b8e86a33cd0ffe83b77",
          "imageSize": 2322432
        },
        {
          "baseAddress": 597975040,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CoreGraphics.framework/CoreGraphics',
          "imageUUID": "aa08ecd0e0f63ff0840048a611267f9b",
          "imageSize": 1273856
        },
        {
          "baseAddress": 771526656,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/MobileKeyBag.framework/MobileKeyBag',
          "imageUUID": "524bf8ee45973ee99f30b420cbdb6ca8",
          "imageSize": 53248
        },
        {
          "baseAddress": 690577408,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/AppleJPEG.framework/AppleJPEG',
          "imageUUID": "b7a303c85b0239a1b9e00b1b3b816d26",
          "imageSize": 233472
        },
        {
          "baseAddress": 637235200,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/OpenGLES.framework/libGFXShared.dylib',
          "imageUUID": "10fae9911eb731da9225f43a0a3e3bb6",
          "imageSize": 36864
        },
        {
          "baseAddress": 587227136,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CFNetwork.framework/CFNetwork',
          "imageUUID": "62b2d744677b3fd78f52c22d001513cd",
          "imageSize": 2043904
        },
        {
          "baseAddress": 756858880,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/IOSurfaceAccelerator.framework/IOSurfaceAccelerator',
          "imageUUID": "64fc8adf51e43928912e1aaa70d13d1b",
          "imageSize": 8192
        },
        {
          "baseAddress": 756805632,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/IOMobileFramebuffer.framework/IOMobileFramebuffer',
          "imageUUID": "8ad717df311534a2a82e03fc5247a9c2",
          "imageSize": 28672
        },
        {
          "baseAddress": 756781056,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/IOAccelerator.framework/IOAccelerator',
          "imageUUID": "9692da5c42813d9a9724ecd96faf1a29",
          "imageSize": 16384
        },

        {
          "baseAddress": 661127168,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/Security.framework/Security',
          "imageUUID": "14af9c531516305682418fcd3b1cdc7b",
          "imageSize": 352256
        },
        {
          "baseAddress": 880746496,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libMobileGestalt.dylib',
          "imageUUID": "6efdb9687b7d34e6b67e1dba9f78becd",
          "imageSize": 110592
        },
        {
          "baseAddress": 756834304,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/IOSurface.framework/IOSurface',
          "imageUUID": "072f34794999341482dc2a6186d896a9",
          "imageSize": 24576
        },
        {
          "baseAddress": 637272064,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/OpenGLES.framework/libGLImage.dylib',
          "imageUUID": "3fd377f1f75d3cb1a533eda8ec44a926",
          "imageSize": 262144
        },
        {
          "baseAddress": 571731968,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/Accelerate.framework/Accelerate',
          "imageUUID": "6554151222cb3d6fa2278c2852fc0ea4",
          "imageSize": 4096
        },
        {
          "baseAddress": 898486272,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libxslt.1.dylib',
          "imageUUID": "c106ad6f21823ed7aefc530feecb4f5d",
          "imageSize": 139264
        },
        {
          "baseAddress": 884629504,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libextension.dylib',

          "imageUUID": "ccf02a35072231748a638d2a0efa1065",
          "imageSize": 114688
        },
        {
          "baseAddress": 882356224,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libarchive.2.dylib',
          "imageUUID": "e697137fcaec3af0be79b8aef957e282",
          "imageSize": 143360
        },
        {
          "baseAddress": 820031488,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/TCC.framework/TCC',
          "imageUUID": "51ccd53aeec8304282d754cf485a71b8",
          "imageSize": 20480
        },
        {
          "baseAddress": 772837376,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/MobileSystemServices.framework/MobileSystemServices',
          "imageUUID": "486d297a19bd35fca21a9f7d6f1dac85",
          "imageSize": 16384
        },
        {
          "baseAddress": 760791040,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/LanguageModeling.framework/LanguageModeling',
          "imageUUID": "5c9b8137d0f1351d87cce5d0ee369c41",
          "imageSize": 458752
        },
        {
          "baseAddress": 728903680,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/FontServices.framework/libFontParser.dylib',
          "imageUUID": "3b89a3ff0d713774baad0d9894067612",
          "imageSize": 884736
        },
        {
          "baseAddress": 715579392,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/CoreServicesInternal.framework/CoreServicesInternal',
          "imageUUID": "5fc050ae90e138a28fdc1ba8d2f6ead8",
          "imageSize": 131072
        },
        {
          "baseAddress": 706592768,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/ColorSync.framework/ColorSync',
          "imageUUID": "c2c6716afb61377c88bfd2e3a4a9dab5",
          "imageSize": 344064
        },
        {
          "baseAddress": 663478272,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/SystemConfiguration.framework/SystemConfiguration',
          "imageUUID": "2741989d4a1534da9047c51d38604d92",
          "imageSize": 299008
        },
        {
          "baseAddress": 637202432,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/OpenGLES.framework/libCVMSPluginSupport.dylib',
          "imageUUID": "2a810f21c9413edea04bfcb03c2470d4",
          "imageSize": 4096
        },
        {
          "baseAddress": 613146624,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/IOKit.framework/Versions/A/IOKit',
          "imageUUID": "368da9672d453fa7877896d8af3a4234",
          "imageSize": 385024
        },
        {
          "baseAddress": 578953216,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/vecLib',
          "imageUUID": "b6ad583cfcd6331099bc89eccd515c0d",
          "imageSize": 4096
        },
        {
          "baseAddress": 897736704,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libxml2.2.dylib',
          "imageUUID": "b279d22962be3dec873d1a982e1cf8df",
          "imageSize": 749568
        },
        {
          "baseAddress": 594624512,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation',
          "imageUUID": "a5fe6726c5b03d648649e90c6881e7d4",
          "imageSize": 3350528
        },
        {
          "baseAddress": 578355200,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libvDSP.dylib',
          "imageUUID": "da5671254db13467a273a4759b826b61",
          "imageSize": 520192
        },
        {
          "baseAddress": 578195456,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libLinearAlgebra.dylib',
          "imageUUID": "9cbe46f69d1c38f1ab16ef3f4f04713a",
          "imageSize": 73728
        },
        {
          "baseAddress": 891748352,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libobjc.A.dylib',
          "imageUUID": "171de81e7c493676a82be7106bb25e7f",
          "imageSize": 3584000
        },
        {
          "baseAddress": 887676928,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libmarisa.dylib',
          "imageUUID": "fcb209f94ce539d09bed2032ba8defc9",
          "imageSize": 86016
        },
        {
          "baseAddress": 885858304,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libicucore.A.dylib',
          "imageUUID": "7849837b8b79336c8613964ce759fc01",
          "imageSize": 1630208
        },
        {
          "baseAddress": 878411776,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libCRFSuite.dylib',
          "imageUUID": "94d4b31ce7dc3d9eb36f36c41ba7428d",
          "imageSize": 90112
        },
        {
          "baseAddress": 732946432,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/GPUCompiler.framework/libmetal_timestamp.dylib',
          "imageUUID": "ba77653b026133f2a74e682f34f58553",
          "imageSize": 4096
        },
        {
          "baseAddress": 637218816,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/OpenGLES.framework/libCoreVMClient.dylib',
          "imageUUID": "9a8423353c563ecdb5e366fb35504230",
          "imageSize": 16384
        },
        {
          "baseAddress": 637206528,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/OpenGLES.framework/libCoreFSCache.dylib',
          "imageUUID": "d3b4bd50926f37e2b5c30b490eff00ff",
          "imageSize": 12288
        },
        {
          "baseAddress": 571805696,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/vImage',
          "imageUUID": "99e5db4c1a5a375784736cfaa8711abf",
          "imageSize": 2486272
        },
        {
          "baseAddress": 883277824,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libcompression.dylib',
          "imageUUID": "a604a50a1c0f31a98d8ccef151ef2dd6",
          "imageSize": 77824
        },
        {
          "baseAddress": 882794496,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libc++.1.dylib',
          "imageUUID": "bad0f9c62f0635cfa0973b59e5227c18",
          "imageSize": 311296
        },
        {
          "baseAddress": 578269184,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libSparseBLAS.dylib',
          "imageUUID": "2a57c9d483dc33878f622b0cfc25e02c",
          "imageSize": 86016
        },
        {
          "baseAddress": 575254528,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libLAPACK.dylib',
          "imageUUID": "3c6985fdb6b53d1198fbde534b811e44",
          "imageSize": 2940928
        },
        {
          "baseAddress": 898625536,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libz.1.dylib',
          "imageUUID": "42afd7e4ef463d288da21bd479b428e7",
          "imageSize": 53248
        },
        {
          "baseAddress": 896450560,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libsqlite3.dylib',
          "imageUUID": "8420aea5e54f3c8099ab0739f289cbdf",
          "imageSize": 757760
        },
        {
          "baseAddress": 887586816,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/liblzma.5.dylib',
          "imageUUID": "73c7b2c8ab7c357e8b50e217276c3fed",
          "imageSize": 90112
        },
        {
          "baseAddress": 887521280,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/liblangid.dylib',
          "imageUUID": "d3f477ac7c6937d781ea9792613bb1a4",
          "imageSize": 20480
        },
        {
          "baseAddress": 884883456,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libiconv.2.dylib',
          "imageUUID": "82e0619aa3653acf8716161fb2f57a5b",
          "imageSize": 974848
        },
        {
          "baseAddress": 884580352,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libenergytrace.dylib',
          "imageUUID": "a62ba6ff87a1368299b6005729c838c5",
          "imageSize": 4096
        },
        {
          "baseAddress": 883220480,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libcmph.dylib',
          "imageUUID": "e9b8241265943e96b33724d1b5f25ab8",
          "imageSize": 57344
        },
        {
          "baseAddress": 883105792,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libc++abi.dylib',
          "imageUUID": "0412d33fb6ac3ef0a0604e078519233e",
          "imageSize": 110592
        },
        {
          "baseAddress": 882749440,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libbz2.1.0.dylib',
          "imageUUID": "5579cddde07f30a7ba666105d9d8c931",
          "imageSize": 45056
        },
        {
          "baseAddress": 882696192,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libbsm.0.dylib',
          "imageUUID": "d1d30742bb3c326fb0330013ce1c2138",
          "imageSize": 53248
        },
        {
          "baseAddress": 578875392,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libvMisc.dylib',
          "imageUUID": "37c8743a706138639e557e94b426a260",
          "imageSize": 77824
        },
        {
          "baseAddress": 574291968,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libBLAS.dylib',
          "imageUUID": "c9a9a989a2d933fbb5cfdb6fe83cd1be",
          "imageSize": 962560
        },
        {
          "baseAddress": 881025024,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libSystem.B.dylib',
          "imageUUID": "d66eae929c8034b0917f43e029350c6e",
          "imageSize": 8192
        },
        {
          "baseAddress": 900374528,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_network.dylib',
          "imageUUID": "0793fbe6708d3cc5be791eb410c6cdc0",
          "imageSize": 319488
        },
        {
          "baseAddress": 899846144,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_coreservices.dylib',
          "imageUUID": "53c87ad09a4733aebf1af2f7ae9e91b9",
          "imageSize": 8192
        },
        {
          "baseAddress": 899833856,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_containermanager.dylib',
          "imageUUID": "6265d06d00fa3e5cb9413e5a86442d2b",
          "imageSize": 12288
        },
        {
          "baseAddress": 898760704,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libcopyfile.dylib',
          "imageUUID": "fb82fe60c1e13d5086d0de54a2f08cbd",
          "imageSize": 28672
        },
        {
          "baseAddress": 900694016,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_networkextension.dylib',
          "imageUUID": "c4c9ecc1feb13c11b3b27e7b317781e0",
          "imageSize": 32768
        },
        {
          "baseAddress": 899948544,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_info.dylib',
          "imageUUID": "61f3cd55151f3d01821e2614a1679d8d",
          "imageSize": 106496
        },
        {
          "baseAddress": 899854336,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_coretls.dylib',
          "imageUUID": "d206f143da2632d998fb82a75455812b",
          "imageSize": 65536
        },
        {
          "baseAddress": 900886528,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libvminterpose.dylib',
          "imageUUID": "77410a5c684539dcad29883e615a6723",
          "imageSize": 4096
        },
        {
          "baseAddress": 899919872,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_dnssd.dylib',
          "imageUUID": "9f3ff891e8eb3fb4ac110120662cad74",
          "imageSize": 28672
        },
        {
          "baseAddress": 899821568,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_configuration.dylib',
          "imageUUID": "15ba6ddd164c3e6abe7baa29d5a052fd",
          "imageSize": 12288
        },
        {
          "baseAddress": 898699264,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libcommonCrypto.dylib',
          "imageUUID": "bc73ec7df14e3d2d9586ad2da80de84a",
          "imageSize": 40960
        },
        {
          "baseAddress": 899325952,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_asl.dylib',
          "imageUUID": "2610222c66133e0abc1dd20710dd64e7",
          "imageSize": 77824
        },
        {
          "baseAddress": 900820992,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_trace.dylib',
          "imageUUID": "24424884ac9e36779f6a0dad45912b1e",
          "imageSize": 61440
        },
        {
          "baseAddress": 900726784,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_notify.dylib',
          "imageUUID": "4744fbe4c6a33442a0b382116aa5acda",
          "imageSize": 32768
        },
        {
          "baseAddress": 899297280,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/liblaunch.dylib',
          "imageUUID": "78760f893b0c3d4fabf4ab0e4635efda",
          "imageSize": 4096
        },
        {
          "baseAddress": 900890624,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libxpc.dylib',
          "imageUUID": "2d0006e6ddcf3dcdb97d2eddbb5839e7",
          "imageSize": 126976
        },
        {
          "baseAddress": 900808704,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_sandbox.dylib',
          "imageUUID": "74b43ebde5ee37a1b661f4d543351df2",
          "imageSize": 12288
        },
        {
          "baseAddress": 898789376,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libcorecrypto.dylib',
          "imageUUID": "4a579e72a74938d19924213d19f6e3a0",
          "imageSize": 331776
        },
        {
          "baseAddress": 898678784,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libcache.dylib',
          "imageUUID": "77789952000d33aeae109a0399391491",
          "imageSize": 20480
        },
        {
          "baseAddress": 899121152,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libdispatch.dylib',
          "imageUUID": "8888af1393e63856ae2241410612f978",
          "imageSize": 159744
        },
        {
          "baseAddress": 900882432,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libunwind.dylib',
          "imageUUID": "e5c2a53d6fc33bb590283c2e1bc02883",
          "imageSize": 4096
        },
        {
          "baseAddress": 899403776,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_blocks.dylib',
          "imageUUID": "89e8584b53a23e5b8edc8d6b20c526ef",
          "imageSize": 4096
        },
        {
          "baseAddress": 899317760,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libremovefile.dylib',
          "imageUUID": "0100a51b93bc39258a5a08ac94d40c7b",
          "imageSize": 8192
        },
        {
          "baseAddress": 899301376,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libmacho.dylib',
          "imageUUID": "15e67424fc303f54bf65c5b85371fafd",
          "imageSize": 16384
        },
        {
          "baseAddress": 899293184,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libkeymgr.dylib',
          "imageUUID": "55dc1bf65a5a3c47b3e112792ab67168",
          "imageSize": 4096
        },
        {
          "baseAddress": 899407872,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_c.dylib',
          "imageUUID": "0be9e1350ed838c797a8d190197d427b",
          "imageSize": 413696
        },
        {
          "baseAddress": 900780032,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_pthread.dylib',
          "imageUUID": "7db2e13a605531cf8eaa364e59fde85f",
          "imageSize": 28672
        },
        {
          "baseAddress": 900296704,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_malloc.dylib',
          "imageUUID": "5d5574e84ec13f28a72c60c88bb07684",
          "imageSize": 77824
        },
        {
          "baseAddress": 900759552,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_platform.dylib',
          "imageUUID": "5c2320bed0463f459d52ab2a980da706",
          "imageSize": 20480
        },
        {
          "baseAddress": 900165632,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_m.dylib',
          "imageUUID": "0a8f01f3a19b3d1f803e4cbd36992234",
          "imageSize": 131072
        },
        {
          "baseAddress": 898740224,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libcompiler_rt.dylib',
          "imageUUID": "ad7b671532ac30a3a0f6939eedd946c1",
          "imageSize": 20480
        },
        {
          "baseAddress": 900055040,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libsystem_kernel.dylib',
          "imageUUID": "dd40c211f84f3cd38474536cedb95823",
          "imageSize": 110592
        },
        {
          "baseAddress": 899280896,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/system/libdyld.dylib',
          "imageUUID": "933d12d584303b71b41fe00f99afd84a",
          "imageSize": 12288
        },
        {
          "baseAddress": 697810944,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/Celestial.framework/Celestial',
          "imageUUID": "e3f236ddfd1331dbb688e699c189dad3",
          "imageSize": 1437696
        },
        {
          "baseAddress": 624668672,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/MediaToolbox.framework/MediaToolbox',
          "imageUUID": "c10cfd1a9d8b3bddb04ee6b3e32b6a84",
          "imageSize": 3657728
        },
        {
          "baseAddress": 815894528,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/StoreServices.framework/StoreServices',
          "imageUUID": "b2b01a1bbc6035a6ba374ef513425eba",
          "imageSize": 1802240
        },
        {
          "baseAddress": 604385280,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CoreMotion.framework/CoreMotion',
          "imageUUID": "abe03747914b39539adc25e78b11ce44",
          "imageSize": 1048576
        },
        {
          "baseAddress": 762925056,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/ManagedConfiguration.framework/ManagedConfiguration',
          "imageUUID": "c5de547dcf783aa493762d0e3b198a4c",
          "imageSize": 700416
        },
        {
          "baseAddress": 708808704,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/CoreAUC.framework/CoreAUC',
          "imageUUID": "dcb2f0872adf3dfaa89c63fa1e395ffe",
          "imageSize": 28672
        },
        {
          "baseAddress": 578957312,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/Accounts.framework/Accounts',
          "imageUUID": "91de348c82b23383bdbb80ca52f09710",
          "imageSize": 196608
        },
        {
          "baseAddress": 789643264,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/PersistentConnection.framework/PersistentConnection',
          "imageUUID": "5825dc82bfdf3eb2b44cebfbed274fd6",
          "imageSize": 167936
        },
        {
          "baseAddress": 801382400,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/ProtocolBuffer.framework/ProtocolBuffer',
          "imageUUID": "f1eff0dfd173360a8ba08e6133b55fea",
          "imageSize": 69632
        },
        {
          "baseAddress": 722370560,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/DataMigration.framework/DataMigration',
          "imageUUID": "e59a77e15174380e9abb5dab1fe92354",
          "imageSize": 32768
        },
        {
          "baseAddress": 779145216,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/OAuth.framework/OAuth',
          "imageUUID": "01dd2e5b0a5a31c4afc1dd3bbb616f90",
          "imageSize": 12288
        },
        {
          "baseAddress": 777457664,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/NetworkStatistics.framework/NetworkStatistics',
          "imageUUID": "85b2909294de3a2a823cc39fa6c5f481",
          "imageSize": 98304
        },
        {
          "baseAddress": 777297920,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/Netrb.framework/Netrb',
          "imageUUID": "af161b1767db36808aa4f1dd7f66eb8b",
          "imageSize": 24576
        },
        {
          "baseAddress": 771497984,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/MobileInstallation.framework/MobileInstallation',
          "imageUUID": "7255778977313377a6598895937b1f68",
          "imageSize": 28672
        },
        {
          "baseAddress": 891371520,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libmis.dylib',
          "imageUUID": "6144150fa15039da92b3b9d53528f05c",
          "imageSize": 98304
        },
        {
          "baseAddress": 789229568,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/Pegasus.framework/Pegasus',
          "imageUUID": "7eb3695245c33d56b5b78b1cc7483961",
          "imageSize": 143360
        },
        {
          "baseAddress": 811470848,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/SpringBoardUI.framework/SpringBoardUI',
          "imageUUID": "34e156764d4137a1a6997242278ce484",
          "imageSize": 94208
        },
        {
          "baseAddress": 811565056,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/SpringBoardUIServices.framework/SpringBoardUIServices',
          "imageUUID": "fbc6d05e5d3f326f99aec4cbffdf936e",
          "imageSize": 155648
        },
        {
          "baseAddress": 820109312,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/TelephonyUI.framework/TelephonyUI',
          "imageUUID": "5df6e6a7f7da3fe59111712b2e61db35",
          "imageSize": 266240
        },
        {
          "baseAddress": 811114496,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/SpringBoardFoundation.framework/SpringBoardFoundation',
          "imageUUID": "a5448e8721843442a4fab67b2a6cc942",
          "imageSize": 217088
        },
        {
          "baseAddress": 837447680,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/ToneLibrary.framework/ToneLibrary',
          "imageUUID": "f6fd9500e1ed34e79ed55e8b307e4455",
          "imageSize": 126976
        },
        {
          "baseAddress": 801452032,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/PrototypeTools.framework/PrototypeTools',
          "imageUUID": "2477056acc2b36ae9945817e5c51c03d",
          "imageSize": 208896
        },
        {
          "baseAddress": 779100160,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/NotificationsUI.framework/NotificationsUI',
          "imageUUID": "ae7c259d22fc3b7aba66fd81a355ee07",
          "imageSize": 45056
        },
        {
          "baseAddress": 692670464,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/BaseBoardUI.framework/BaseBoardUI',
          "imageUUID": "5b61219c9d7b38cd9853ecc3744d2e2a",
          "imageSize": 12288
        },
        {
          "baseAddress": 611553280,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/GLKit.framework/GLKit',
          "imageUUID": "4cfb99485fb53d719c1c421606be1dea",
          "imageSize": 188416
        },
        {
          "baseAddress": 569499648,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/AVFoundation.framework/AVFoundation',
          "imageUUID": "70fb5f8bfb603dbaaef2579b84d8fac3",
          "imageSize": 1466368
        },
        {
          "baseAddress": 630505472,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/ModelIO.framework/ModelIO',
          "imageUUID": "6ac34bb543a8321ca2fbb1fa24a73a58",
          "imageSize": 3932160
        },
        {
          "baseAddress": 820375552,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/TelephonyUtilities.framework/TelephonyUtilities',
          "imageUUID": "beec9de5dda438a2a58591c0cd7c0c2d",
          "imageSize": 376832
        },
        {
          "baseAddress": 693026816,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/BulletinBoard.framework/BulletinBoard',
          "imageUUID": "c5bb1987a4a036e88e63569ef2efb356",
          "imageSize": 475136
        },
        {
          "baseAddress": 570966016,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/AVFoundation.framework/libAVFAudio.dylib',
          "imageUUID": "a0bc543c85853703a6b01144c916207c",
          "imageSize": 479232
        },
        {
          "baseAddress": 579158016,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/AddressBook.framework/AddressBook',
          "imageUUID": "4786ecb04ea93ceea3593028830534e0",
          "imageSize": 446464
        },
        {
          "baseAddress": 753713152,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/IDS.framework/IDS',
          "imageUUID": "ac337917c1053f51b7b6a7f4d7c95a29",
          "imageSize": 430080
        },
        {
          "baseAddress": 723767296,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/FTServices.framework/FTServices',
          "imageUUID": "994be20a1c303caaac28ce42c2d0fd11",
          "imageSize": 212992
        },
        {
          "baseAddress": 800579584,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/ProgressUI.framework/ProgressUI',
          "imageUUID": "b0b87c7759243d108ae1a51e896dff98",
          "imageSize": 20480
        },
        {
          "baseAddress": 754143232,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/IDSFoundation.framework/IDSFoundation',
          "imageUUID": "692592d50c693b45a5cd4526513cbdd1",
          "imageSize": 208896
        },
        {
          "baseAddress": 763740160,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/Marco.framework/Marco',
          "imageUUID": "81ad20046cd23edd8cdc231d7aefbd89",
          "imageSize": 8192
        },
        {
          "baseAddress": 760545280,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/IncomingCallFilter.framework/IncomingCallFilter',
          "imageUUID": "2b531e37f09034f0a44c91096f0d8da4",
          "imageSize": 24576
        },
        {
          "baseAddress": 722472960,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/DiagnosticLogCollection.framework/DiagnosticLogCollection',
          "imageUUID": "d69c8a6971903a55ab65811600f86e12",
          "imageSize": 8192
        },
        {
          "baseAddress": 721772544,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/DataAccessExpress.framework/DataAccessExpress',
          "imageUUID": "c34d5a7b7a3b38d682f0c3f63c965245",
          "imageSize": 143360
        },
        {
          "baseAddress": 709525504,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/CoreDuet.framework/CoreDuet',
          "imageUUID": "9d1f0a18811e3c3d88d111089f55de29",
          "imageSize": 647168
        },
        {
          "baseAddress": 707022848,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/CommunicationsFilter.framework/CommunicationsFilter',
          "imageUUID": "5dbd7db218de3f2cb44793f90178389e",
          "imageSize": 20480
        },
        {
          "baseAddress": 756322304,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/IMFoundation.framework/IMFoundation',
          "imageUUID": "f100248f91403260998b256b2bb59e23",
          "imageSize": 430080
        },
        {
          "baseAddress": 710172672,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/CoreDuetDaemonProtocol.framework/CoreDuetDaemonProtocol',
          "imageUUID": "74fc6e42fd9133ff81e7fd8bb95aec8f",
          "imageSize": 77824
        },
        {
          "baseAddress": 717869056,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/CoreTime.framework/CoreTime',
          "imageUUID": "7378c359fb3f31c6bbdf3526654cec58",
          "imageSize": 28672
        },
        {
          "baseAddress": 710258688,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/CoreDuetDebugLogging.framework/CoreDuetDebugLogging',
          "imageUUID": "5d5a80106c6639df8e0bb215138750f5",
          "imageSize": 12288
        },
        {
          "baseAddress": 592171008,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/Frameworks/CoreBluetooth.framework/CoreBluetooth',
          "imageUUID": "0921650e30df37c4add2530317af53d7",
          "imageSize": 131072
        },
        {
          "baseAddress": 771596288,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/MobileObliteration.framework/MobileObliteration',
          "imageUUID": "af7a59e0397e3c41b1b66ebe45ce6755",
          "imageSize": 4096
        },
        {
          "baseAddress": 692248576,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/System/Library/PrivateFrameworks/BTLEAudioController.framework/BTLEAudioController',
          "imageUUID": "4fb1bde55edb3af9895ee8129cdf1abf",
          "imageSize": 16384
        },
        {
          "baseAddress": 897523712,
          "codeType": {
            "type": 12,
            "subType": 11
          },
          "imagePath": '/usr/lib/libtidy.A.dylib',
          "imageUUID": "9144d4dca8b0321da1ecb8ebc8314950",
          "imageSize": 163840
        }
      ],
      "parentProcessId": 1,
      "operatingSystem": 1,
      "appBundleId": "com.appdynamics.ECommerce-iOS",
      "processPath": '/var/mobile/Containers/Bundle/Application/C64FEBB0-EF8E-4079-BDE0-E35C531F0CA2/ECommerce-iOS.app/ECommerce-iOS',
      "osVersion": '$OSVERSION',
      "threads": [
        {
          "registers": [
            {
              "registerValue": 900766072,
              "registerName": "pc"
            },
            {
              "registerValue": 2598648,
              "registerName": "r7"
            },
            {
              "registerValue": 2598648,
              "registerName": "sp"
            },
            {
              "registerValue": 0,
              "registerName": "r0"
            },
            {
              "registerValue": 1166719,
              "registerName": "r1"
            },
            {
              "registerValue": 4,
              "registerName": "r2"
            },
            {
              "registerValue": 6384738,
              "registerName": "r3"
            },
            {
              "registerValue": 1166715,
              "registerName": "r4"
            },
            {
              "registerValue": 0,
              "registerName": "r5"
            },
            {
              "registerValue": 3,
              "registerName": "r6"

            },
            {
              "registerValue": 367111408,
              "registerName": "r8"
            },
            {
              "registerValue": 945821960,
              "registerName": "r9"
            },
            {
              "registerValue": 1206630,
              "registerName": "r10"
            },
            {
              "registerValue": 64,
              "registerName": "r11"
            },
            {
              "registerValue": 0,
              "registerName": "r12"
            },
            {
              "registerValue": 899477247,
              "registerName": "lr"
            },
            {
              "registerValue": 6192,
              "registerName": "cpsr"
            }
          ],
          "stackFrames": [
            {
              "symbolName": "_platform_memmove",
              "imageName": '/usr/lib/system/libsystem_platform.dylib',
              "instructionPointer": 900766072,
              "symbolOffset": 120
            },
            {
              "symbolName": "stpcpy",
              "imageName": '/usr/lib/system/libsystem_c.dylib',
              "instructionPointer": 899477244,
              "symbolOffset": 24
            },
            {
              "symbolName": "__strcpy_chk",
              "imageName": '/usr/lib/system/libsystem_c.dylib',
              "instructionPointer": 899779264,
              "symbolOffset": 12
            },
            {
              "symbolName": "cartcpy",
              "imageName": '/var/mobile/Containers/Bundle/Application/C64FEBB0-EF8E-4079-BDE0-E35C531F0CA2/ECommerce-iOS.app/ECommerce-iOS',
              "instructionPointer": 969214,
              "symbolOffset": 12,
              "fileName": "Cart.m",
              "lineNumber": 58
            },
            {
              "symbolName": '-[UIApplication sendAction:to:from:forEvent:]',
              "imageName": '/System/Library/Frameworks/UIKit.framework/UIKit',
              "instructionPointer": 664083670,
              "symbolOffset": 78
            },
            {
              "symbolName": '-[UIControl sendAction:to:forEvent:]',
              "imageName": '/System/Library/Frameworks/UIKit.framework/UIKit',
              "instructionPointer": 664083554,
              "symbolOffset": 62
            },
            {
              "symbolName": '-[UIControl _sendActionsForEvents:withEvent:]',
              "imageName": '/System/Library/Frameworks/UIKit.framework/UIKit',
              "instructionPointer": 663988584,
              "symbolOffset": 444
            },
            {
              "symbolName": '-[UIControl touchesEnded:withEvent:]',
              "imageName": '/System/Library/Frameworks/UIKit.framework/UIKit',
              "instructionPointer": 664081838,
              "symbolOffset": 614
            },
            {
              "symbolName": '-[UIWindow _sendTouchesForEvent:]',
              "imageName": '/System/Library/Frameworks/UIKit.framework/UIKit',
              "instructionPointer": 664080924,
              "symbolOffset": 644
            },
            {
              "symbolName": '-[UIWindow sendEvent:]',
              "imageName": '/System/Library/Frameworks/UIKit.framework/UIKit',
              "instructionPointer": 664052452,
              "symbolOffset": 640
            },
            {
              "symbolName": '-[UIApplication sendEvent:]',
              "imageName": '/System/Library/Frameworks/UIKit.framework/UIKit',
              "instructionPointer": 663861834,
              "symbolOffset": 202
            },
            {
              "symbolName": '_UIApplicationHandleEventQueue',
              "imageName": '/System/Library/Frameworks/UIKit.framework/UIKit',
              "instructionPointer": 663855724,
              "symbolOffset": 4940
            },
            {
              "symbolName": '__CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE0_PERFORM_FUNCTION__',
              "imageName": '/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation',
              "instructionPointer": 595380260,
              "symbolOffset": 12
            },
            {
              "symbolName": "__CFRunLoopDoSources0",
              "imageName": '/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation',
              "instructionPointer": 595379220,
              "symbolOffset": 452
            },
            {
              "imageName": '/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation',
              "instructionPointer": 595371900,
              "symbolOffset": 804
            },
            {
              "symbolName": "CFRunLoopRunSpecific",
              "imageName": '/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation',
              "instructionPointer": 594661862,
              "symbolOffset": 514
            },
            {
              "symbolName": "CFRunLoopRunInMode",
              "imageName": '/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation',
              "instructionPointer": 594661338,
              "symbolOffset": 106
            },
            {
              "symbolName": "GSEventRunModal",
              "imageName": '/System/Library/PrivateFrameworks/GraphicsServices.framework/GraphicsServices',
              "instructionPointer": 748165878,
              "symbolOffset": 158
            },
            {
              "symbolName": "UIApplicationMain",
              "imageName": '/System/Library/Frameworks/UIKit.framework/UIKit',
              "instructionPointer": 664281482,
              "symbolOffset": 142
            },
            {
              "imageName": '/var/mobile/Containers/Bundle/Application/C64FEBB0-EF8E-4079-BDE0-E35C531F0CA2/ECommerce-iOS.app/ECommerce-iOS',
              "instructionPointer": 920922
            },
            {
              "symbolName": "start",
              "imageName": '/usr/lib/system/libdyld.dylib',
              "instructionPointer": 899291248,
              "symbolOffset": 0
            }
          ],
          "threadNumber": 0,
          "isCrashedThread": true
        },
        {
          "isCrashedThread": false,
          "threadNumber": 1,
          "stackFrames": [
            {
              "symbolName": "kevent_qos",
              "imageName": '/usr/lib/system/libsystem_kernel.dylib',
              "instructionPointer": 900146112,
              "symbolOffset": 25
            },
            {
              "imageName": '/usr/lib/system/libdispatch.dylib',
              "instructionPointer": 899132204
            }
          ]
        },
        {
          "isCrashedThread": false,
          "threadNumber": 2,
          "stackFrames": [
            {
              "symbolName": "mach_msg_trap",
              "imageName": '/usr/lib/system/libsystem_kernel.dylib',
              "instructionPointer": 900059440,
              "symbolOffset": 21
            },
            {
              "symbolName": "__CFRunLoopServiceMachPort",
              "imageName": '/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation',
              "instructionPointer": 595379434,
              "symbolOffset": 134
            },
            {
              "symbolName": "__CFRunLoopRun",
              "imageName": '/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation',
              "instructionPointer": 595372144,
              "symbolOffset": 1048
            },
            {
              "symbolName": "CFRunLoopRunSpecific",
              "imageName": '/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation',
              "instructionPointer": 594661862,
              "symbolOffset": 514
            },
            {
              "symbolName": "CFRunLoopRunInMode",
              "imageName": '/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation',
              "instructionPointer": 594661338,
              "symbolOffset": 106
            },
            {
              "symbolName": '+[NSURLConnection(Loader) _resourceLoadLoop:]',
              "imageName": '/System/Library/Frameworks/CFNetwork.framework/CFNetwork',
              "instructionPointer": 587784364,
              "symbolOffset": 484
            },
            {
              "symbolName": '__NSThread__start__',
              "imageName": '/System/Library/Frameworks/Foundation.framework/Foundation',
              "instructionPointer": 610134010,
              "symbolOffset": 1142
            },
            {
              "symbolName": "_pthread_body",
              "imageName": '/usr/lib/system/libsystem_pthread.dylib',
              "instructionPointer": 900791440,
              "symbolOffset": 136
            },
            {
              "symbolName": "_pthread_start",
              "imageName": '/usr/lib/system/libsystem_pthread.dylib',
              "instructionPointer": 900791300,
              "symbolOffset": 108
            },
            {
              "symbolName": "thread_start",
              "imageName": '/usr/lib/system/libsystem_pthread.dylib',
              "instructionPointer": 900782626,
              "symbolOffset": 7
            }
          ]
        },
        {
          "isCrashedThread": false,
          "threadNumber": 3,
          "stackFrames": [
            {
              "symbolName": "__select",
              "imageName": '/usr/lib/system/libsystem_kernel.dylib',
              "instructionPointer": 900140980,
              "symbolOffset": 21
            },
            {
              "symbolName": "_pthread_body",
              "imageName": '/usr/lib/system/libsystem_pthread.dylib',
              "instructionPointer": 900791440,
              "symbolOffset": 136
            },
            {
              "symbolName": "_pthread_start",
              "imageName": '/usr/lib/system/libsystem_pthread.dylib',
              "instructionPointer": 900791300,
              "symbolOffset": 108
            },
            {
              "symbolName": "thread_start",
              "imageName": '/usr/lib/system/libsystem_pthread.dylib',
              "instructionPointer": 900782626,
              "symbolOffset": 7
            }
          ]
        },
        {
          "isCrashedThread": false,
          "threadNumber": 4,
          "stackFrames": [
            {
              "symbolName": "__workq_kernreturn",
              "imageName": '/usr/lib/system/libsystem_kernel.dylib',
              "instructionPointer": 900143404,
              "symbolOffset": 9
            },
            {
              "symbolName": "start_wqthread",
              "imageName": '/usr/lib/system/libsystem_pthread.dylib',
              "instructionPointer": 900782614,
              "symbolOffset": 7
            }
          ]
        },
        {
          "isCrashedThread": false,
          "threadNumber": 5,
          "stackFrames": [
            {
              "symbolName": "__workq_kernreturn",
              "imageName": '/usr/lib/system/libsystem_kernel.dylib',
              "instructionPointer": 900143404,
              "symbolOffset": 9
            },
            {
              "symbolName": "start_wqthread",
              "imageName": '/usr/lib/system/libsystem_pthread.dylib',
              "instructionPointer": 900782614,
              "symbolOffset": 7
            }
          ]
        },
        {
          "isCrashedThread": false,
          "threadNumber": 6,
          "stackFrames": [
            {
              "symbolName": "__workq_kernreturn",
              "imageName": '/usr/lib/system/libsystem_kernel.dylib',
              "instructionPointer": 900143404,
              "symbolOffset": 9
            },
            {
              "symbolName": "start_wqthread",
              "imageName": '/usr/lib/system/libsystem_pthread.dylib',
              "instructionPointer": 900782614,
              "symbolOffset": 7
            }
          ]
        }
      ],
      "cpuLogicalCount": 2,
      "timestamp": '$TIMESTAMP',
      "signalCode": "SEGV_ACCERR",
      "isNative": true,
      "architecture": 5,
      "appVersion": '$APP-VERSION',
      "processName": "com.appdynamics.ECommerce-iOS"
    },
    "agv": '4.1.0.0',
    "ds": "57050",
    "av": '$VERSION'
  };
}
