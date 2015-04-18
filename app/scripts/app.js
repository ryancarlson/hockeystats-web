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
          players : ['$http','$q',function($http, $q){
            var stats = $q.defer();
            $http.get('data/2015/spring/players.json').success(function (data) {
              stats.resolve(data);
            });
            return stats.promise;
          }]
        }
      })
      .when('/standings', {
        templateUrl: 'views/standings.html',
        controller: 'MainCtrl',
        resolve: {
          players : ['$http','$q',function($http, $q){
            var stats = $q.defer();
            $http.get('data/2015/spring/players.json').success(function (data) {
              stats.resolve(data);
            });
            return stats.promise;
          }]
        }
      })
      .otherwise({
        redirectTo: '/standings'
      });
  });
