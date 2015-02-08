'use strict';

angular.module('universalHockeyApp')
  .service('games', function games($http) {
        var games;

        $http.get('games/b/week1.json').success(function(data) {
            games = data;
        });

        this.getGame = function() {
            return games[0];
        }
    });
