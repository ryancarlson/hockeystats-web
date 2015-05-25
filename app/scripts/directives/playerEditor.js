'use strict';

angular.module('universalHockeyApp')
  .directive('playerEditor', function (){
    return {
      templateUrl: 'views/directives/playerEditor.html',
      restrict: 'E',
      scope: {
        player: '='
      }
    };
  });
