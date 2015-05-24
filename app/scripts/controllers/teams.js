'use strict';

angular.module('universalHockeyApp')
  .controller('TeamsCtrl', function ($scope, TeamService, PlayerService) {

    $scope.addNewTeam = function() {
      $scope.newTeam = {
        players: [{}]
      };
    };

    $scope.addPlayerToTeam = function () {
      $scope.newTeam.players.push({});
    };

    $scope.saveNewTeam = function() {
      TeamService.saveNewTeam($scope.newTeam);
      _.each($scope.newTeam.players, function(player){
        PlayerService.saveNewPlayer(player, $scope.newTeam.id);
      });
      delete $scope.newTeam;
    };

    $scope.cancelAddNewTeam = function () {
      delete $scope.newTeam;
    };
  });
