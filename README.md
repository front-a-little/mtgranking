mtgranking
==========

A ranking system for Magic: The Gathering matches to get in touch with AngularJS

Configure <HOST> in mtgRanking.js - serviceUrl

Expects RESTful service interface:

<HOST>/rest/v1/players
  List of players
<HOST>/rest/v1/players/<playerID>
  Single player of structure:
    {
      firstname: String,
      lastname: String,
      wins: Number
    }
<HOST>/rest/v1/matches
  List of matches
<HOST>/rest/v1/matches/<matchID>
  Single match of structure:
    {
      timestamp: Number,
      player1:  {
                  firstname: String,
                  lastname: String,
                  deck: Array
                }
      player2:  {
                  firstname: String,
                  lastname: String,
                  deck: Array
                }
      winner:   {
                  firstname: String,
                  lastname: String,
                  deck: Array
                }
    }
                  
      
  
