'use strict';

angular.module('universalHockeyApp')
  .service('PlayerService', function PlayerService($http, $q, apiUrl) {

    this.saveNewPlayer = function(player, teamId) {
      $http.post(apiUrl + '/teams/' + teamId + '/players', player);
    };

    this.updatePlayer = function(player, teamId) {
      if(angular.isDefined(player.id)) {
        $http.put(apiUrl + '/teams/' + teamId + '/players/' + player.id, player);
      } else {
        this.saveNewPlayer(player, teamId);
      }
    };
  });
