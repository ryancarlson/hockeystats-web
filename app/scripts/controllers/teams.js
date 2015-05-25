'use strict';

angular.module('universalHockeyApp')
  .controller('TeamsCtrl', function ($scope, TeamService, PlayerService) {

    TeamService.loadAll().then(function(teams){
      $scope.teams = teams;
    });

    $scope.viewTeam = function(team) {
      $scope.activeTeamIsNew = false;
      $scope.activeTeam = angular.copy(team);
    };

    $scope.addNewTeam = function() {
      $scope.activeTeamIsNew = true;
      $scope.activeTeam = {
        players: [{}]
      };
    };

    $scope.addPlayerToTeam = function () {
      $scope.activeTeam.players.push({});
    };

    $scope.saveTeam = function() {
      if ($scope.activeTeamIsNew) {
        TeamService.saveNewTeam($scope.activeTeam).then(function () {
          delete $scope.activeTeam;
          TeamService.loadAll().then(function (teams) {
            $scope.teams = teams;
          });
      });
      } else {
        TeamService.updateTeam($scope.activeTeam).then(function () {
          TeamService.loadAll().then(function (teams) {
            $scope.teams = teams;
            delete $scope.activeTeam;
          });
        });
      }
    };

    $scope.deleteTeam = function(team) {
      TeamService.deleteTeam(team);
      $scope.selectedTeam = null;
    };

    $scope.activeTeamIsNew = false;
  });
