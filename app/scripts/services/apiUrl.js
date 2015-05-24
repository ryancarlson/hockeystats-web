'use strict';

angular.module('universalHockeyApp')
  .constant('apiUrl', function(){
    return 'http://localhost:8080/hockeystats-api-1.0-SNAPSHOT/rest';
  });
