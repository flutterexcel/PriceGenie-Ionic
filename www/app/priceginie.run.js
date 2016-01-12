(function() {
    'use strict';
    angular.module('starter', ['ionic', 'angular-chartist', 'ngStorage', 'ngIOS9UIWebViewPatch'])
            .run(function($ionicPlatform, urlHelper, $rootScope) {
                document.addEventListener("offline", onOffline, false);

                function onOffline() {
                    console.log('hello1');
                    //   window.plugins.toast.showShortBottom('You Are Offline Now');
                    urlHelper.openOffline();
                }
                document.addEventListener("online", onOnline, false);

                function onOnline() {
                    urlHelper.openHome();
                    console.log("hello2");
                    //  window.plugins.toast.showShortBottom('You Are Online Now');
                }
                var ios = ionic.Platform.isIOS();
                if (ios) {
                    $rootScope.footer_ios = true;
                    $rootScope.head = false;
                }
                else {
                    $rootScope.head = true;
                    $rootScope.footer_ios = false;
                    console.log('not ios' + $rootScope.head);

                }

                $ionicPlatform.ready(function() {
                    var isWebView = ionic.Platform.isWebView();
                    console.log(isWebView);
                    try {
                        if (device.platform == 'Android') {
                            urlHelper.openHome();
                            StatusBar.backgroundColorByHexString("#06457b");
                        }
                    } catch (e) {


                    }
                    if (isWebView) {
                        urlHelper.openHome();
                    }

                });
                // this is for front view of app 
                //        if (!timeStorage.get("login") && !timeStorage.get("googleLogin") && !timeStorage.get("fbLogin")) {
                //
                //            $rootScope.show = true;
                //            $rootScope.show1 = false;
                //            // urlHelper.openFrontpage();
                //            urlHelper.openHome();
                //        }
                //        else {
                //            urlHelper.openHome();
                //        }


                // urlHelper.openHome();
                //alert(1);

                $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                    if (toState.name == "menu.product") {
                        $rootScope.heart = true;
                    }
                    else {
                        $rootScope.heart = false;
                    }
                });



            });
// var myapp = angular.module('starter', ['ionic', 'startercc', 'angular-chartist']);
// var myapps = angular.module('starterss', ['ionic', 'startercc', 'ngStorage']);
})();