'use strict';

angular.module('universalHockeyApp')
  .service('TeamService', function TeamService($http, $q, apiUrl, uuid) {

    this.loadAll = function() {
      var deferred = $q.defer();

      $http.get(apiUrl + '/teams/')
        .success(function(data){
          deferred.resolve(data);
        });

      return deferred.promise;
    };

    this.loadById = function(teamId) {
      var deferredTeam = $q.defer();

      $http.get(apiUrl + '/teams/' + teamId)
        .success(function(data){
          deferredTeam.resolve(data);
      }).error(function(){
          deferredTeam.reject('Not able to retrieve team ' + teamId);
        });

      return deferredTeam.promise;
    };

    this.saveNewTeam = function(team) {
      team.id = uuid();
      var deferredSave = $q.defer();
      $http.post(apiUrl + '/teams', team)
        .success(function(){
          deferredSave.resolve();
        });

      return deferredSave.promise;
    };

    this.deleteTeam = function(team) {
      $http.delete(apiUrl + "/teams/" + team.id);
    }
  });
