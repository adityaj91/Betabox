// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('betaBox', ['ionic', 'betaBox.controllers', 'betaBox.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('loading', {
      url: '/loading',
      views: {
        'mainView': {
          templateUrl: 'templates/loading.html',
          controller: 'loadingCtrl'
        }
      }
    })

  .state('login', {
    url: '/login',
    views: {
      'mainView': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('signup', {
    url: '/signup',
    views: {
      'mainView': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('forgotPassword', {
    url: '/forgotPassword',
    views: {
      'mainView': {
        templateUrl: 'templates/forgotPassword.html',
        controller: 'forgottenPasswordCtrl'
      }
    }
  })

  .state('resetPassword', {
    url: '/resetPassword',
    views: {
      'mainView': {
        templateUrl: 'templates/resetPassword.html',
        controller: 'resetPasswordCtrl'
      }
    }
  })

  .state('tabs', {
    url: '/tab',
    views: {
      'mainView': {
        abstract: true,
        templateUrl: 'templates/tabs.html',
        controller: 'tabsCtrl'
      }
    }
  })

  .state('tabs.home', {
    url: '/home',
    views: {
      'home-tab': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabs.settings', {
    url: '/settings',
    views: {
      'settings-tab': {
        templateUrl: 'templates/settings.html'
      }
    }
  })

  .state('tabs.archive', {
    url: '/archive',
    views: {
      'archive-tab': {
        templateUrl: 'templates/archive.html',
        controller: 'archiveCtrl'
      }
    }
  })

  .state('productDetail', {
    url: '/productDetail/:id',
    views: {
      'mainView': {
        templateUrl: 'templates/productDetail.html',
        controller: 'productDetailCtrl'
      }
    }
  })

  .state('companyDetail', {
    url: '/companyDetail/:id',
    views: {
      'mainView': {
        templateUrl: 'templates/companyDetail.html',
        controller: 'companyDetailCtrl'
      }
    }
  })

  .state('searchResults', {
    url: '/searchResults',
    views: {
      'mainView': {
        templateUrl: 'templates/searchResults.html',
        controller: 'searchResultsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('loading');

});