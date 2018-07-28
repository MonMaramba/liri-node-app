require("dotenv").config();

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

//code to import the keys.js file and store to variable
var keys = require("./keys.js");


var Spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
//console.log(Spotify);
//console.log(client);

  //`my-tweets`


  //`spotify-this-song`
  

  //`movie-this`    http://www.omdbapi.com/?i=tt3896198&apikey=3c68cd9d


  //`do-what-it-says`

  
  //`to read from random.txt
 var fs = require("fs");
 fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error)
    }
    console.log(data);
  })