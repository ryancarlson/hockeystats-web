'use strict';

angular.module('universalHockeyApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams) {

    $scope.sortField = '-points';

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

    $http.get('data/2015/spring/a.json').success(function (data) {
      $scope.aLeagueStats = data;
      calculatePoints($scope.aLeagueStats.teams);
    });

    $http.get('data/2015/spring/b.json').success(function (data) {
      $scope.bLeagueStats = data;
      calculatePoints($scope.bLeagueStats.teams);
    });

//    $scope.team = _.find($scope.allStats.teams, function (team) {
//      if(angular.isDefined($routeParams.team)) {
//        return team.id === Number($routeParams.team);
//      } else {
//        return team.id === 1;
//      }
//    });
  });
