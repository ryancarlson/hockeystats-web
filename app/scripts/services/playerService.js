'use strict';

angular.module('universalHockeyApp')
  .service('PlayerService', function PlayerService($http, $q, apiUrl) {

    this.saveNewPlayer = function(player, teamId) {
      $http.post(apiUrl + '/teams/' + teamId + '/players', player);
    };
  });
