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
      .when('/b/playerStats', {
        templateUrl: 'views/b/playerStats.html',
        controller: 'BLeaguePlayerStatsCtrl'
      })
      .when('/a/playerStats', {
        templateUrl: 'views/a/playerStats.html',
        controller: 'ALeaguePlayerStatsCtrl'
      })
      .otherwise({
        redirectTo: '/b/playerStats'
      });
  });
