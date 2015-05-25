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

    $scope.saveNewTeam = function() {
      TeamService.saveNewTeam($scope.activeTeam).then(function() {
        _.each($scope.activeTeam.players, function(player){
          PlayerService.saveNewPlayer(player, $scope.activeTeam.id);
        });
        delete $scope.activeTeam;
      });
    };

    $scope.deleteTeam = function(team) {
      TeamService.deleteTeam(team);
      $scope.selectedTeam = null;
    };

    $scope.activeTeamIsNew = false;
  });
