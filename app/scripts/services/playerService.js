'use strict';

angular.module('universalHockeyApp')
  .service('PlayerService', function TeamService($http, $q, apiUrl) {

    var saveNewPlayer = function(player, teamId) {
      $http.post(apiUrl + '/teams/' + teamId + '/players', player);
    };
  });
