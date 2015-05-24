'use strict';

angular.module('universalHockeyApp')
  .controller('TeamsCtrl', function ($scope, TeamService, PlayerService) {

    TeamService.loadAll().then(function(teams){
      $scope.teams = teams;
    });

    $scope.viewTeam = function(team) {
      $scope.selectedTeam = team;
    };

    $scope.addNewTeam = function() {
      $scope.selectedTeam = null;
      $scope.newTeam = {
        players: [{}]
      };
    };

    $scope.addPlayerToTeam = function () {
      $scope.newTeam.players.push({});
    };

    $scope.saveNewTeam = function() {
      TeamService.saveNewTeam($scope.newTeam).then(function() {
        _.each($scope.newTeam.players, function(player){
          PlayerService.saveNewPlayer(player, $scope.newTeam.id);
        });
        delete $scope.newTeam;

      });
    };

    $scope.cancelAddNewTeam = function () {
      delete $scope.newTeam;
    };
  });
