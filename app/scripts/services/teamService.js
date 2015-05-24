'use strict';

angular.module('universalHockeyApp')
  .service('TeamService', function TeamService($http, $q, apiUrl, uuid) {

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
      team.id = uuid;
      $http.post(apiUrl + '/teams', team);
    };
  });
