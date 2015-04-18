'use strict';

angular.module('universalHockeyApp')
  .controller('ALeagueCtrl', function ($scope, $routeParams) {

    $scope.sortField = '-points';

    $scope.setSortField = function (newSortField) {
      $scope.sortField = newSortField;
    };

    $scope.allStats = { 'teams' :
      [
        {
          'id': 1,
          'league': 'A',
          'name': 'Warriors',
          'wins': 5,
          'losses': 3,
          'sol': 0,
          'players': [{
            'name': 'Matt Lind',
            'number': 75,
            'goals': 6,
            'assists': 7,
            'pims': 0
          },{
            'name': 'Nelson Peebles',
            'number': 55,
            'goals': 3,
            'assists': 1,
            'pims': 2
          },{
            'name': 'Ethan Halpern',
            'number': 10,
            'goals': 10,
            'assists': 2,
            'pims': 4

          },{
            'name': 'Ryan Novalis',
            'number': 30,
            'goals': 0,
            'assists': 9,
            'pims': 2

          },{
            'name': 'David Novalis',
            'number': 81,
            'goals': 15,
            'assists': 9,
            'pims': 0

          },{
            'name': 'Joe Barrett',
            'number': 28,
            'goals': 0,
            'assists': 1,
            'pims': 2

          },{
            'name': 'Danny Snyder',
            'number': 88,
            'goals': 3,
            'assists': 1,
            'pims': 4

          },{
              'name': '?',
              'number': 5,
              'goals': 0,
              'assists': 3,
              'pims': 0

          },{
            'name': '?',
            'number': 11,
            'goals': 0,
            'assists': 1,
            'pims': 0

          },{
            'name': '?',
            'number': 27,
            'goals': 1,
            'assists': 0,
            'pims': 2

          },{
            'name': 'Dan Snyder Sr.',
            'position': 'G',
            'shots': 209,
            'saves': 171,
            'goals': 0,
            'assists': 0,
            'pims': 0
          }
          ]
        },
        {
          'id': 2,
          'league': 'A',
          'name': 'Hitmen',
          'wins': 2,
          'losses': 3,
          'sol': 1,
          'players': [
            {
              'name': 'Lane Pierce',
              'number': 77,
              'goals': 1,
              'assists': 7,
              'pims': 4
            },
            {
              'name': 'Bobby Navaille',
              'number': 25,
              'goals': 5,
              'assists': 3,
              'pims': 0
            },
            {
              'name': 'Blake Kanikovsky',
              'number': 13,
              'goals': 2,
              'assists': 1,
              'pims': 0
            },
            {
              'name': 'Matt Goddard',
              'number': 91,
              'goals': 6,
              'assists': 6,
              'pims': 2
            },
            {
              'name': 'Ryan Kusev',
              'number': 90,
              'goals': 7,
              'assists': 2,
              'pims': 0
            },
            {
              'name': 'Shaun Classe',
              'number': 59,
              'goals': 2,
              'assists': 0,
              'pims': 8
            },
            {
              'name': 'Jarrod Hancock',
              'number': 53,
              'position': 'D',
              'goals': 7,
              'assists': 2,
              'pims': 2
            },
            {
              'name': 'Matt Javitt',
              'number': 13,
              'goals': 3,
              'assists': 4,
              'pims': 4
            },
            {
              'name': 'Kyle Sirota',
              'position': 'G',
              'shots': 177,
              'saves': 133,
              'pims': 0,
              'goals': 0,
              'assists': 0
            }
          ]
        },
        {
          'id': 3,
          'league': 'A',
          'name': 'Alumknights',
          'wins': 3,
          'losses': 5,
          'sol': 1,
          'players': [
            {
              'name': 'Adam Weinberg',
              'number': 90,
              'goals': 13,
              'assists': 5,
              'pims': 4
            },
            {
              'name': 'Jason San',
              'number': 27,
              'goals': 2,
              'assists': 2,
              'pims': 4
            },
            {
              'name': 'Andrew Wolodkiewicz',
              'number': 32,
              'goals': 1,
              'assists': 2,
              'pims': 0
            },
            {
              'name': 'Jason Crook',
              'number': 39,
              'goals': 5,
              'assists': 4,
              'pims': 4
            },
            {
              'name': 'Gabriel Galperin',
              'number': 63,
              'goals': 2,
              'assists': 6,
              'pims': 4
            },
            {
              'name': 'Jason Burkhardt',
              'number': 79,
              'goals': 0,
              'assists': 0,
              'pims': 0
            },
            {
              'name': 'Craig Hughes',
              'number': 0,
              'goals': 0,
              'assists': 2,
              'pims': 0
            },
            {
              'name': 'Patrick Cahill',
              'number': 0,
              'goals': 0,
              'assists': 1,
              'pims': 0
            },
            {
              'name': '?',
              'number': 23,
              'goals': 0,
              'assists': 1,
              'pims': 2
            },
            {
              'name': '?',
              'number': 24,
              'goals': 7,
              'assists': 3,
              'pims': 0
            },
            {
              'name': '?',
              'number': 14,
              'goals': 0,
              'assists': 1,
              'pims': 0
            },
            {
              'name': '?',
              'number': 69,
              'goals': 4,
              'assists': 3,
              'pims': 0
            },
            {
              'name': '?',
              'number': 65,
              'goals': 2,
              'assists': 1,
              'pims': 4
            },
            {
              'name': '?',
              'number': 1,
              'goals': 7,
              'assists': 5,
              'pims': 0
            },
            {
              'name': 'Luis \'Big Lou\' Barroso',
              'position': 'G',
              'shots': 203,
              'saves': 154,
              'pims': 0,
              'goals': 0,
              'assists': 0

            }
          ]
        },
        {
          'id': 4,
          'league': 'A',
          'name': 'UCF Gold',
          'wins': 7,
          'losses': 1,
          'sol': 0,
          'players': [
            {
              'name': 'Shane Tamaddon',
              'number': 76,
              'goals': 4,
              'assists': 4,
              'pims': 4
            },
            {
              'name': 'Tyler Gilbert',
              'number': 93,
              'goals': 8,
              'assists': 11,
              'pims': 0
            },
            {
              'name': 'Henry Schultz',
              'number': 8,
              'goals': 11,
              'assists': 6,
              'pims': 0
            },
            {
              'name': 'Daniel Taule',
              'number': 2,
              'goals': 16,
              'assists': 11,
              'pims': 0
            },
            {
              'name': 'Josh Staskus',
              'number': 87,
              'goals': 2,
              'assists': 1,
              'pims': 0
            },
            {
              'name': 'Charlie Ferrara',
              'number': 21,
              'goals': 2,
              'assists': 2,
              'pims': 0
            },
            {
              'name': 'Bret Sirota',
              'number': 56,
              'goals': 0,
              'assists': 4,
              'pims': 6
            },
            {
              'name': '?',
              'number': 55,
              'goals': 2,
              'assists': 3,
              'pims': 4
            },
            {
              'name': 'Cody Smith',
              'number': 23,
              'goals': 3,
              'assists': 1,
              'pims': 4
            },
            {
              'name': '?',
              'number': 7,
              'goals': 7,
              'assists': 2,
              'pims': 2
            },
            {
              'name': '?',
              'number': 30,
              'goals': 1,
              'assists': 1,
              'pims': 0
            },
            {
              'name': '?',
              'number': 97,
              'goals': 0,
              'assists': 2,
              'pims': 0
            },
            {
              'name': 'Dan Herman',
              'position': 'G',
              'shots': 186,
              'saves': 158,
              'goals': 0,
              'assists': 1,
              'pims': 0
            }
          ]
        },{
        'id': 5,
        'league': 'A',
        'name': 'UCF Czechs',
        'wins': 4,
        'losses': 3,
        'sol': 0,
        'players': [
          {
            'name': 'Juraj Haas',
            'number': 18,
            'goals': 2,
            'assists': 0,
            'pims': 2
          },
          {
            'name': 'Scott Gratton',
            'number': 12,
            'goals': 2,
            'assists': 2,
            'pims': 0
          },
          {
            'name': 'Ryan Lejeune',
            'number': 63,
            'goals': 1,
            'assists': 1,
            'pims': 0
          },
          {
            'name': 'Cooper Knicely',
            'number': 52,
            'goals': 4,
            'assists': 4,
            'pims': 2
          },
          {
            'name': 'David Dillon',
            'number': 91,
            'goals': 7,
            'assists': 7,
            'pims': 2
          },
          {
            'name': '?',
            'number': 17,
            'goals': 0,
            'assists': 0,
            'pims': 4
          },
          {
            'name': '?',
            'number': 7,
            'goals': 8,
            'assists': 8,
            'pims': 4
          },
          {
            'name': '?',
            'number': 20,
            'goals': 1,
            'assists': 0,
            'pims': 12
          },
          {
            'name': 'Jack Josko',
            'number': 24,
            'goals': 3,
            'assists': 1,
            'pims': 2
          },
          {
            'name': 'Michal Homola',
            'position': 'G',
            'number': 99,
            'shots': 153,
            'saves': 123,
            'pims': 2,
            'goals': 1,
            'assists': 3

          }
        ]
      },{
        'id': 6,
        'league': 'A',
        'name': 'Alter Boyles',
        'wins': 6,
        'losses': 2,
        'sol': 0,
        'players': [
          {
            'name': 'Ryan Herman',
            'number': 39,
            'goals': 10,
            'assists': 8,
            'pims': 2
          },
          {
            'name': 'Brett Dutton',
            'number': 99,
            'goals': 5,
            'assists': 4,
            'pims': 2
          },
          {
            'name': 'Willie Boyle',
            'number': 68,
            'goals': 4,
            'assists': 3,
            'pims': 0
          },
          {
            'name': 'Matt Hudson',
            'number': 92,
            'goals': 0,
            'assists': 0,
            'pims': 0
          },
          {
            'name': 'Randy Graves',
            'number': 9,
            'goals': 0,
            'assists': 0,
            'pims': 2
          },
          {
            'name': 'Austin Francis',
            'number': 32,
            'goals': 3,
            'assists': 2,
            'pims': 4
          },
          {
            'name': 'Corey Bloxam',
            'number': 17,
            'goals': 6,
            'assists': 11,
            'pims': 2
          },
          {
            'name': 'Matt Homish',
            'number': 6,
            'goals': 10,
            'assists': 8,
            'pims': 6
          },
          {
            'name': '?',
            'number': 23,
            'goals': 10,
            'assists': 10,
            'pims': 2
          },
          {
            'name': '?',
            'number': 1,
            'goals': 1,
            'assists': 3,
            'pims': 2
          },
          {
            'name': '?',
            'number': 47,
            'goals': 1,
            'assists': 1,
            'pims': 4
          },
          {
            'name': '?',
            'number': 19,
            'goals': 0,
            'assists': 0,
            'pims': 2
          },
          {
            'name': '?',
            'number': 22,
            'goals': 2,
            'assists': 0,
            'pims': 0
          },
          {
            'name': 'Ryan Rapp',
            'position': 'G',
            'shots': 188,
            'saves': 152,
            'pims': 0,
            'goals': 0,
            'assists': 1

          }
        ]
      },{
        'id': 7,
        'league': 'A',
        'name': 'Misfits',
        'wins': 1,
        'losses': 8,
        'sol': 0,
        'players': [
          {
            'name': 'Jeff Scott',

            'goals': 0,
            'assists': 0,
            'pims': 0
          },
          {
            'name': 'Matt Djak',
            'number': 77,
            'goals': 5,
            'assists': 3,
            'pims': 4
          },
          {
            'name': 'Ben Chainciola',

            'goals': 0,
            'assists': 0,
            'pims': 0
          },
          {
            'name': 'Frank Faisst',

            'goals': 0,
            'assists': 0,
            'pims': 0
          },
          {
            'name': 'Steven Catalano',

            'goals': 0,
            'assists': 0,
            'pims': 0
          },
          {
            'name': 'Marc Culicchia',

            'goals': 0,
            'assists': 0,
            'pims': 0
          },
          {
            'name': 'John Joenson',

            'goals': 0,
            'assists': 0,
            'pims': 0
          },
          {
            'name': 'Brian Pajor',

            'goals': 0,
            'assists': 0,
            'pims': 0
          },
          {
            'name': 'Paul Cabrera',
            'position': 'G',
            'shots': 223,
            'saves': 167,
            'pims': 0,
            'goals': 0,
            'assists': 0

          }
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