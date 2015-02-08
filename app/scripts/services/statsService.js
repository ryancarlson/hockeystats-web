'use strict';

angular.module('universalHockeyApp')
    .service('statsService', function teams($http,$q) {
        var stats = $q.defer();

        $http.get('stats/b/stats.json').success(function(data) {
            stats.resolve(data);
        });

        this.getStats = function() {
            return stats;
        };
    });
