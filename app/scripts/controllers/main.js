'use strict';

angular.module('universalHockeyApp')
  .controller('MainCtrl', function ($scope, $http, $location, $routeParams, players) {

    $scope.sortField = '-points';
    $scope.teamId = Number($routeParams.teamId);
    $scope.players = players;

    $scope.setSortField = function (newSortField) {
      $scope.sortField = newSortField;
    };

    var calculatePoints = function (teams) {
      _.each(teams, function (team) {
        _.each(team.players, function(player) {
          player.points = player.goals + player.assists;
        });
        team.points = team.wins * 2 + team.sol;
      });
    };

    calculatePoints($scope.players.teams);

    $scope.team = _.find($scope.players.teams, function(team){
      return team.id === $scope.teamId;
    })
  });
