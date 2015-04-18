'use strict';

angular.module('universalHockeyApp')
  .controller('ALeaguePlayerStatsCtrl', function ($scope, $http) {

    $http.get('stats/a/stats.json').success(function(data) {
      $scope.allStats = data;

      _.each($scope.allStats.teams, function (team) {
        _.each(team.players, function (player) {
          player.points = player.goals + player.assists;
          if(player.position === 'G') {
            player.savePercentage = player.saves / player.shots;
          }
        })
      })
    });

    $scope.sortField = '!goals';

    $scope.setSortField = function (newSortField) {
      $scope.sortField = newSortField;
    }

    $scope.allStats = { "teams" :
      [
        {
          "id": 1,
          "league": "A",
          "name": "Warriors",
          "players": [{
            "name": "Matt Lind",
            "number": 75,
            "goals": 0,
            "assists": 2,
            "pims": 0
          },{
            "name": "Nelson Peebles",
            "number": 55,
            "goals": 1,
            "assists": 0,
            "pims": 0
          },{
            "name": "Ethan Halpern",
            "number": 12,
            "goals": 0,
            "assists": 0,
            "pims": 0

          },{
            "name": "Ryan Novalis",
            "number": 30,
            "goals": 0,
            "assists": 3,
            "pims": 0

          },{
            "name": "David Novalis",
            "number": 81,
            "goals": 3,
            "assists": 2,
            "pims": 0

          },{
            "name": "Joe Barrett",
            "number": 28,
            "goals": 0,
            "assists": 0,
            "pims": 2

          },{
            "name": "Danny Snyder",
            "number": 88,
            "goals": 2,
            "assists": 0,
            "pims": 0

          },{
            "name": "Dan Snyder Sr.",
            "position": "G",
            "shots": 20,
            "saves": 17,
            "goals": 0,
            "assists": 0,
            "pims": 0
          }
          ]
        },
        {
          "id": 2,
          "league": "A",
          "name": "Hitmen",
          "players": [
            {
              "name": "Lane Pierce",
              "number": 77,
              "goals": 0,
              "assists": 1,
              "pims": 0
            },
            {
              "name": "Bobby Navaille",
              "number": 25,
              "goals": 0,
              "assists": 0,
              "pims": 0
            },
            {
              "name": "Blake Kanikovsky",
              "number": 13,
              "goals": 1,
              "assists": 0,
              "pims": 0
            },
            {
              "name": "Matt Goddard",
              "number": 91,
              "goals": 1,
              "assists": 0,
              "pims": 0
            },
            {
              "name": "Ryan Kusev",
              "number": 90,
              "goals": 0,
              "assists": 0,
              "pims": 0
            },
            {
              "name": "Shaun Classe",
              "number": 59,
              "goals": 0,
              "assists": 0,
              "pims": 2
            },
            {
              "name": "Jarrod Hancock",
              "number": 53,
              "position": "D",
              "goals": 0,
              "assists": 0,
              "pims": 0
            },
            {
              "name": "Matt Javitt",
              "number": 13,
              "goals": 1,
              "assists": 0,
              "pims": 0
            },
            {
              "name": "Kyle Sirota",
              "position": "G",
              "shots": 19,
              "saves": 13,
              "pims": 0,
              "goals": 0,
              "assists": 0
            }
          ]
        },
        {
          "id": 3,
          "league": "A",
          "name": "Alumknights",
          "players": [
            {
              "name": "Adam Weinberg",
              "number": 90,
              "goals": 1,
              "assists": 0,
              "pims": 0
            },
            {
              "name": "Jason San",
              "number": 27,
              "goals": 0,
              "assists": 0,
              "pims": 0
            },
            {
              "name": "Andrew Wolodkiewicz",
              "number": 32,
              "goals": 0,
              "assists": 0,
              "pims": 0
            },
            {
              "name": "Jason Crook",
              "number": 39,
              "goals": 1,
              "assists": 0,
              "pims": 0
            },
            {
              "name": "Gabriel Galperin",
              "number": 63,
              "goals": 0,
              "assists": 1,
              "pims": 0
            },
            {
              "name": "Jason Burkhardt",
              "number": 79,
              "goals": 0,
              "assists": 0,
              "pims": 0
            },
            {
              "name": "Craig Hughes",
              "number": 0,
              "goals": 0,
              "assists": 1,
              "pims": 0
            },
            {
              "name": "Patrick Cahill",
              "number": 0,
              "goals": 0,
              "assists": 1,
              "pims": 0
            },
            {
              "name": "Luis \"Big Lou\" Barroso",
              "position": "G",
              "shots": 21,
              "saves": 16,
              "pims": 0,
              "goals": 0,
              "assists": 0

            }
          ]
        },
        {
          "id": 4,
          "league": "A",
          "name": "UCF Gold",
          "players": [
            {
              "name": "Shane Tamaddon",
              "number": 76,
              "goals": 1,
              "assists": 2,
              "pims": 2
            },
            {
              "name": "Tyler Gilbert",
              "number": 93,
              "goals": 2,
              "assists": 3,
              "pims": 0
            },
            {
              "name": "Henry Schultz",
              "number": 8,
              "goals": 6,
              "assists": 3,
              "pims": 0
            },
            {
              "name": "Daniel Taule",
              "number": 2,
              "goals": 4,
              "assists": 7,
              "pims": 0
            },
            {
              "name": "Josh Staskus",
              "number": 87,
              "goals": 0,
              "assists": 0,
              "pims": 0
            },
            {
              "name": "Charlie Ferrara",
              "number": 21,
              "goals": 1,
              "assists": 1,
              "pims": 0
            },
            {
              "name": "Bret Sirota",
              "number": 56,
              "goals": 0,
              "assists": 0,
              "pims": 0
            },
            {
              "name": "Cody Smith",
              "number": 23,
              "goals": 1,
              "assists": 0,
              "pims": 2
            },
            {
              "name": "Dan Herman",
              "position": "G",
              "shots": 34,
              "saves": 28,
              "goals": 0,
              "assists": 0,
              "pims": 0
            }
          ]
        },{
        "id": 5,
        "league": "A",
        "name": "UCF Czechs",
        "players": [
          {
            "name": "Juraj Haas",
            "number": 18,
            "goals": 0,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "Scott Gratton",
            "number": 12,
            "goals": 0,
            "assists": 1,
            "pims": 0
          },
          {
            "name": "Ryan Lejeune",
            "number": 63,
            "goals": 0,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "Cooper Knicely",
            "number": 52,
            "goals": 1,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "David Dillon",
            "number": 91,
            "goals": 2,
            "assists": 1,
            "pims": 2
          },
          {
            "name": "?",
            "number": 17,
            "goals": 0,
            "assists": 0,
            "pims": 2
          },
          {
            "name": "?",
            "number": 7,
            "goals": 1,
            "assists": 1,
            "pims": 0
          },{
            "name": "Jack Josko",
            "number": 24,
            "goals": 1,
            "assists": 0,
            "pims": 2
          },
          {
            "name": "Michal Homola",
            "position": "G",
            "number": 99,
            "shots": 15,
            "saves": 9,
            "pims": 0,
            "goals": 0,
            "assists": 1

          }
        ]
      },{
        "id": 6,
        "league": "A",
        "name": "Alter Boyles",
        "players": [
          {
            "name": "Ryan Herman",
            "number": 39,
            "goals": 2,
            "assists": 1,
            "pims": 0
          },
          {
            "name": "Brett Dutton",
            "number": 99,
            "goals": 0,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "Willie Boyle",
            "number": 68,
            "goals": 1,
            "assists": 1,
            "pims": 0
          },
          {
            "name": "Matt Hudson",
            "number": 92,
            "goals": 0,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "Randy Graves",
            "number": 9,
            "goals": 0,
            "assists": 0,
            "pims": 2
          },
          {
            "name": "Austin Francis",
            "number": 32,
            "goals": 0,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "Corey Bloxam",
            "number": 17,
            "goals": 0,
            "assists": 5,
            "pims": 2
          },
          {
            "name": "Matt Homish",
            "number": 6,
            "goals": 3,
            "assists": 1,
            "pims": 2
          },
          {
            "name": "Ryan Rapp",
            "position": "G",
            "shots": 20,
            "saves": 15,
            "pims": 0,
            "goals": 0,
            "assists": 0

          }
        ]
      },{
        "id": 7,
        "league": "A",
        "name": "Misfits",
        "players": [
          {
            "name": "Jeff Scott",

            "goals": 0,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "Matt Djak",
            "number": 77,
            "goals": 0,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "Ben Chainciola",

            "goals": 0,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "Frank Faisst",

            "goals": 0,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "Steven Catalano",

            "goals": 0,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "Marc Culicchia",

            "goals": 0,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "John Joenson",

            "goals": 0,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "Brian Pajor",

            "goals": 0,
            "assists": 0,
            "pims": 0
          },
          {
            "name": "Paul Cabrera",
            "position": "G",
            "shots": 0,
            "saves": 0,
            "pims": 0,
            "goals": 0,
            "assists": 0

          }
        ]
      }
      ]
    };
  });
