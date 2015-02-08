'use strict';

angular.module('universalHockeyApp')
  .service('teams', function teams($http) {
    var teams;

    $http.get('teams/b.json').success(function(data) {
      teams = data;
    });

    this.getTeams = function() {
        return teams;
    };

    this.getTeam = function(id) {
      return _.find(teams, function(team) {
        return team.id === id;
      });
    };
  });
