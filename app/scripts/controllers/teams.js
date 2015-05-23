'use strict';

angular.module('universalHockeyApp')
  .controller('TeamsCtrl', function ($scope, TeamService) {
    TeamService.loadById('cb505831-b061-47bd-9a8b-c5551855c0f9').then(function(team){
      $scope.dekes = team;
    });
  });