'use strict';

angular.module('universalHockeyApp')
  .controller('ALeaguePlayerStatsCtrl', function ($scope, $http) {

    $http.get('stats/a/stats.json').success(function(data) {
      $scope.allStats = data;

      _.each($scope.allStats.teams, function (team) {
        _.each(team.players, function (player) {
          player.points = player.goals + player.assists;
          if(player.position === 'G') {
            player.savePercentage = player.saves / player.shots;
          }
        })
      })
    });

    $scope.sortField = '!goals';

    $scope.setSortField = function (newSortField) {
      $scope.sortField = newSortField;
    }

  });
