angular.module('protest', ['ionic', 'protest.controllers', 'protest.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

//Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      //delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $stateProvider

    // Setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:
    .state('tab.protests', {
      url: '/protests',
      views: {
        'tab-protests': {
          templateUrl: 'templates/tab-protests.html',
          controller: 'ProtestsCtrl'
        }
      }
    })
    .state('tab.protest-detail', {
      url: '/protest/:protestId',
      views: {
        'tab-protests': {
          templateUrl: 'templates/protest-detail.html',
          controller: 'ProtestDetailCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'tab-about': {
          templateUrl: 'templates/tab-about.html',
          controller: 'AboutCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/protests');
});

