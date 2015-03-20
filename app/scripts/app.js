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
      .when('/stats', {
        templateUrl: 'views/stats.html',
        controller: 'BLeagueCtrl'
      })
      .when('/standings', {
        templateUrl: 'views/standings.html',
        controller: 'BLeagueCtrl'
      })
      .when('/a/playerStats', {
        templateUrl: 'views/a/playerStats.html',
        controller: 'ALeaguePlayerStatsCtrl'
      })
      .otherwise({
        redirectTo: '/standings'
      });
  });
