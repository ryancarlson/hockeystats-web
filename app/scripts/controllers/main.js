'use strict';

angular.module('universalHockeyApp')
  .controller('MainCtrl', function ($scope, $routeParams) {

    $scope.sortField = '-points';

    $scope.setSortField = function (newSortField) {
      $scope.sortField = newSortField;
    };

    _.each($scope.allStats.teams, function (team) {
      _.each(team.players, function(player) {
        player.points = player.goals + player.assists;
      });
      team.points = team.wins * 2 + team.sol;
    });

    $scope.team = _.find($scope.allStats.teams, function (team) {
      if(angular.isDefined($routeParams.team)) {
        return team.id === Number($routeParams.team);
      } else {
        return team.id === 1;
      }
    });
  });
