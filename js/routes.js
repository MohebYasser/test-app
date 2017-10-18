angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.apps', {
    url: '/tab1',
    views: {
      'tab1': {
        templateUrl: 'templates/apps.html',
        controller: 'appsCtrl'
      }
    }
  })

  .state('tabsController.new', {
    url: '/tab2',
    views: {
      'tab2': {
        templateUrl: 'templates/new.html',
        controller: 'newCtrl'
      }
    }
  })

  .state('tabsController.other', {
    url: '/tab3',
    views: {
      'tab3': {
        templateUrl: 'templates/other.html',
        controller: 'otherCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab1')


});