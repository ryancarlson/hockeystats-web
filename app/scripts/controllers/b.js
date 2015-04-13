'use strict';

angular.module('universalHockeyApp')
  .controller('BLeagueCtrl', function ($scope, $routeParams) {

    $scope.sortField = '-points';

    $scope.setSortField = function (newSortField) {
      $scope.sortField = newSortField;
    };

    $scope.allStats = { 'teams' :
      [
        {
          'id': 1,
          'league': 'B',
          'name': 'Dekes of Hazard',
          'wins': 6,
          'losses': 4,
          'sol': 0,
          'players': [{
            'name': 'Ryan Carlson',
            'number': 14,
            'position': 'D',
            'goals': 1,
            'assists': 7,
            'pims': 0
          },{
            'name': 'Nick Clark',
            'number': 12,
            'position': 'F',
            'goals': 5,
            'assists': 10,
            'pims': 4
          },{
            'name': 'Ryan Kusev',
            'number': 90,
            'position': 'F',
            'goals': 11,
            'assists': 0,
            'pims': 0

          },{
            'name': 'Chris Liseo',
            'number': 72,
            'position': 'F',
            'goals': 5,
            'assists': 7,
            'pims': 2

          },{
            'name': 'Spencer Glick',
            'number': 88,
            'position': 'F',
            'goals': 8,
            'assists': 3,
            'pims': 0

          },{
            'name': 'Sean Wissel',
            'number': 17,
            'position': 'D',
            'goals': 4,
            'assists': 7,
            'pims': 4

          },{
            'name': 'Matt Wissel',
            'number': 9,
            'position': 'D',
            'goals': 2,
            'assists': 8,
            'pims': 2

          },{
            'name': 'Chef Barbarow',
            'number': 21,
            'position': 'D',
            'goals': 3,
            'assists': 4,
            'pims': 0

          },{
            'name': 'Ryno (sub)',
            'number': 30,
            'goals': 1,
            'assists': 1,
            'pims': 7485

          },{
            'name': 'Steve Gernenz',
            'number': 33,
            'position': 'G',
            'shots': 173,
            'saves': 147,
            'goals': 0,
            'assists': 0,
            'pims': 2
          }
          ]
        },
        {
          'id': 2,
          'league': 'B',
          'name': 'Puckaneers',
          'wins': 8,
          'losses': 1,
          'sol': 1,
          'players': [
            {
              'name': 'Ryan LeJeune',
              'number': 63,
              'position': 'F',
              'goals': 3,
              'assists': 7,
              'pims': 2
            },
            {
              'name': 'Cody Smith',
              'number': 23,
              'position': 'F',
              'goals': 9,
              'assists': 10,
              'pims': 9
            },
            {
              'name': 'Steve Kleier',
              'number': 19,
              'position': 'F',
              'goals': 5,
              'assists': 2,
              'pims': 2
            },
            {
              'name': 'Steven Mercer',
              'number': 37,
              'goals': 2,
              'assists': 1,
              'pims': 0
            },
            {
              'name': 'Scott MacCord',
              'number': 13,
              'goals': 1,
              'assists': 1,
              'pims': 0
            },
            {
              'name': 'Brian Lloyd',
              'number': 2,
              'position': 'D',
              'goals': 1,
              'assists': 4,
              'pims': 0
            },
            {
              'name': 'Gabriel Maduro',
              'number': 1,
              'position': 'F',
              'goals': 20,
              'assists': 12,
              'pims': 2
            },
            {
              'name': 'Michael Fiumara',
              'number': 53,
              'position': 'D',
              'goals': 3,
              'assists': 2,
              'pims': 2
            },
            {
              'name': 'Gary Kleier',
              'position': 'G',
              'shots': 128,
              'saves': 106,
              'goals': 0,
              'assists': 0,
              'pims': 0

            }
          ]
        },
        {
          'id': 3,
          'league': 'B',
          'name': 'Great Scott',
          'wins': 2,
          'losses': 8,
          'sol': 0,
          'players': [
            {
              'name': 'Mike Symons',
              'number': 23,
              'position': 'F',
              'goals': 11,
              'assists': 6,
              'pims': 4,
              'shots': 25,
              'saves': 14
            },
            {
              'name': 'Jason Shafer',
              'number': 22,
              'goals': 3,
              'assists': 1,
              'pims': 0
            },
            {
              'name': 'Adam Marino',
              'number': 93,
              'goals': 0,
              'assists': 0,
              'pims': 0
            },
            {
              'name': 'Akash Patel',
              'number': 50,
              'goals': 1,
              'assists': 1,
              'pims': 0
            },
            {
              'name': 'Roman Makarov',
              'number': 12,
              'goals': 5,
              'assists': 8,
              'pims': 2
            },
            {
              'name': '?',
              'number': 48,
              'position': 'D',
              'goals': 0,
              'assists': 0,
              'pims': 0
            },
            {
              'name': '?',
              'number': 17,
              'goals': 1,
              'assists': 2,
              'pims': 0
            },
            {
              'name': 'Josh Carp',
              'number': 4,
              'position': 'D',
              'goals': 2,
              'assists': 1,
              'pims': 10
            },
            {
              'name': 'John Coliton',
              'number': 0,
              'position': 'D',
              'goals': 0,
              'assists': 1,
              'pims': 0
            },
            {
              'name': 'Scott Symons',
              'position': 'G',
              'shots': 181,
              'saves': 136,
              'goals': 0,
              'assists': 0,
              'pims': 0

            }
          ]
        },
        {
          'id': 4,
          'league': 'B',
          'name': 'Czech Mates',
          'wins': 5,
          'losses': 5,
          'sol': 0,
          'players': [
            {
              'name': 'Michal Homola',
              'number': 99,
              'position': 'G',
              'shots': 52,
              'saves': 48,
              'goals': 2,
              'assists': 2,
              'pims': 0
            },
            {
              'name': 'Jack Josko',
              'number': 24,
              'goals': 10,
              'assists': 8,
              'pims': 4
            },
            {
              'name': 'John Baselice',
              'number': 11,
              'goals': 12,
              'assists': 11,
              'pims': 0
            },
            {
              'name': 'Jake Hayden',
              'number': 0,
              'goals': 5,
              'assists': 5,
              'pims': 0
            },
            {
              'name': 'Eric Hayden',
              'number': 5,
              'goals': 7,
              'assists': 4,
              'pims': 0
            },
            {
              'name': 'Scott Chipner',
              'number': 4,
              'position': 'D',
              'goals': 1,
              'assists': 2,
              'pims': 0
            },
            {
              'name': 'Rick Underwood',
              'number': 96,
              'position': 'D',
              'goals': 0,
              'assists': 2,
              'pims': 2
            },{
              'name': 'Ashley Roseman',
              'position': 'G',
              'shots': 106,
              'saves': 73,
              'goals': 0,
              'assists': 0,
              'pims': 0
            }
          ]
        },{
        'id': 5,
        'league': 'B',
        'name': 'Blanks',
        'wins': 5,
        'losses': 5,
        'sol': 1,
        'players': [
          {
            'name': 'Kevin Scarpati',
            'number': 7,
            'position': 'D',
            'goals': 11,
            'assists': 10,
            'pims': 2
          },
          {
            'name': 'Mark Caruso',
            'number': 9,
            'position': 'D',
            'goals': 8,
            'assists': 13,
            'pims': 9
          },
          {
            'name': 'Chris Jack',
            'number': 47,
            'goals': 7,
            'assists': 4,
            'pims': 4
          },
          {
            'name': 'Justin Burkhardt',
            'number': 55,
            'goals': 3,
            'assists': 3,
            'pims': 0
          },
          {
            'name': 'Chris Heath',
            'number': 97,
            'goals': 4,
            'assists': 3,
            'pims': 0
          },
          {
            'name': 'Jeff Hart',
            'number': 52,
            'goals': 1,
            'assists': 4,
            'pims': 0
          },
          {
            'name': 'Robert Courtney',
            'number': 95,
            'goals': 0,
            'assists': 0,
            'pims': 2
          },
          {
            'name':'Chris Fabian',
            'number': 3,
            'goals': 9,
            'assists': 7,
            'pims': 0
          },
          {
            'name':'Ryno (sub)',
            'number':30,
            'goals': 1,
            'assists':3,
            'pims':31513
          }
        ]
      },{
        'id': 6,
        'league': 'B',
        'name': 'Beer Me',
        'wins': 9,
        'losses': 1,
        'sol': 0,
        'players': [
          {
            'name': 'Austin Francis',
            'number': 32,
            'position': 'D',
            'goals': 2,
            'assists': 7,
            'pims': 6
          },
          {
            'name': 'Brett Dutton',
            'number': 99,
            'goals': 6,
            'assists': 2,
            'pims': 0
          },
          {
            'name': 'Randy Graves',
            'number': 47,
            'goals': 6,
            'assists': 7,
            'pims': 4
          },
          {
            'name': 'Tyler Thomas',
            'number': 91,
            'goals': 2,
            'assists': 7,
            'pims': 2
          },
          {
            'name': 'Jonathan Sprague',
            'number': 54,
            'goals': 4,
            'assists': 5,
            'pims': 2
          },
          {
            'name': 'Matt Hudson',
            'number': 19,
            'goals': 0,
            'assists': 0,
            'pims': 2
          },
          {
            'name': 'Nathan Marshall',
            'number': 7,
            'goals': 2,
            'assists': 4,
            'pims': 2
          },
          {
            'name': '?',
            'number': 27,
            'goals': 13,
            'assists': 8,
            'pims': 2
          },
          {
            'name': 'Eric Taylor',
            'number': 36,
            'goals': 2,
            'assists': 1,
            'pims': 0
          },
          {
            'name': 'Dan Hooks',
            'position': 'G',
            'shots': 111,
            'saves': 93,
            'goals': 0,
            'assists': 0,
            'pims': 0
          }
        ]
      },{
        'id': 7,
        'league': 'B',
        'name': 'UCF Black',
        'wins': 0,
        'losses': 10,
        'sol': 0,
        'players': [

        ]
      }
      ]
    };

    _.each($scope.allStats.teams, function (team) {
      _.each(team.players, function(player) {
        player.points = player.goals + player.assists;
      });
      team.points = team.wins * 2 + team.sol;
    });

    $scope.team = _.find($scope.allStats.teams, function (team) {
      if(angular.isDefined($routeParams.team)) {
        return team.id === Number($routeParams.team);
      } else {
        return team.id === 1;
      }
    });
});
