'use strict';

angular.module('universalHockeyApp')
  .controller('MainCtrl', function ($scope, $http, $location, $routeParams, aLeagueStats, bLeagueStats) {

    $scope.sortField = '-points';
    $scope.league = $routeParams.league;
    $scope.teamId = Number($routeParams.teamId);
    $scope.aLeagueStats = aLeagueStats;
    $scope.bLeagueStats = bLeagueStats;

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

    calculatePoints($scope.aLeagueStats.teams);
    calculatePoints($scope.bLeagueStats.teams);

    var findTeam = function() {
      var teams;

      if($scope.league === 'A') {
        teams = $scope.aLeagueStats.teams;
      } else if($scope.league === 'B') {
        teams = $scope.bLeagueStats.teams;
      }

      var foundTeam;

      if(angular.isDefined($scope.teamId)) {
        foundTeam = _.find(teams, function (team) {
          return team.id === Number($scope.teamId);
        });
      }

      return foundTeam;
    };

    $scope.team = findTeam();

    $scope.updateTeam = function() {
      $scope.apply();
      $scope.team = findTeam();
    }
  });
