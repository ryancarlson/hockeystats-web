'use strict';

angular
  .module('universalHockeyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/stats/:teamId', {
        templateUrl: 'views/stats.html',
        controller: 'MainCtrl',
        resolve: {

        }
      })
      .when('/standings', {
        templateUrl: 'views/standings.html',
        controller: 'MainCtrl',
        resolve: {

        }
      })
      .otherwise({
        redirectTo: '/standings'
      });
  });
