'use strict';

angular.module('universalHockeyApp')
  .service('TeamService', function TeamService($http, $q) {

    this.loadById = function(teamId) {
      var deferredTeam = $q.defer();

      $http.get('http://localhost:8080/hockeystats-api-1.0-SNAPSHOT/rest/teams/' + teamId)
        .success(function(data){
          deferredTeam.resolve(data);
      }).error(function(){
          deferredTeam.reject('Not able to retrieve team ' + teamId);
        });

      return deferredTeam.promise;
    };

    this.saveNewTeam = function(team) {
      $http.post('http://localhost:8080/hockeystats-api-1.0-SNAPSHOT/rest/teams', team)
        .success(function(data){

        });
    };
  });
