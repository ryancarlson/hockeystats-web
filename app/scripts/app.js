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
        controller: 'MainCtrl',
        resolve: {
          aLeagueStats : ['$http','$q',function($http, $q){
            var stats = $q.defer();
            $http.get('data/2015/spring/a.json').success(function (data) {
              stats.resolve(data);
            });
            return stats.promise;
          }],
          bLeagueStats : ['$http','$q', function($http, $q) {
            var stats = $q.defer();
            $http.get('data/2015/spring/b.json').success(function (data) {
              stats.resolve(data);
            });
            return stats.promise;
          }]
        }
      })
      .when('/stats/:league', {
        templateUrl: 'views/stats.html',
        controller: 'MainCtrl',
        resolve: {
          aLeagueStats : ['$http','$q',function($http, $q){
            var stats = $q.defer();
            $http.get('data/2015/spring/a.json').success(function (data) {
              stats.resolve(data);
            });
            return stats.promise;
          }],
          bLeagueStats : ['$http','$q', function($http, $q) {
            var stats = $q.defer();
            $http.get('data/2015/spring/b.json').success(function (data) {
              stats.resolve(data);
            });
            return stats.promise;
          }]
        }
      })
      .when('/stats/:league/:teamId', {
        templateUrl: 'views/stats.html',
        controller: 'MainCtrl',
        resolve: {
          aLeagueStats : ['$http','$q',function($http, $q){
            var stats = $q.defer();
            $http.get('data/2015/spring/a.json').success(function (data) {
              stats.resolve(data);
            });
            return stats.promise;
          }],
          bLeagueStats : ['$http','$q', function($http, $q) {
            var stats = $q.defer();
            $http.get('data/2015/spring/b.json').success(function (data) {
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
          aLeagueStats : ['$http','$q',function($http, $q){
            var stats = $q.defer();
            $http.get('data/2015/spring/a.json').success(function (data) {
              stats.resolve(data);
            });
            return stats.promise;
          }],
          bLeagueStats : ['$http','$q', function($http, $q) {
            var stats = $q.defer();
            $http.get('data/2015/spring/b.json').success(function (data) {
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
