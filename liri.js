require("dotenv").config();

var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var command = process.argv[2];
var item = process.argv[3];


//code to import the keys.js file and store to variable
var keys = require("./keys.js");


var Spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
//console.log(Spotify);
//console.log(client);
//commands liri will take in and call the corresponding function
switch(command) {
  case 'my-tweets':
  twitter(item);
  break;

  case 'spotify-this-song':
  spotify(item)
  break;

  case 'movie-this':
  //omdb function call
  break;

  case 'do-what-it-says':
  //do what it says function call
  break;
};

//`my-tweets`
function twitter(item){
  var params = {screen_name: item, count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) {
    console.log(error);
  } else {
      for (i=0; i < tweets.length; i++){
      console.log(tweets);
      console.log(response);
    }
  }
})
};

//`spotify-this-song`
function spotify(item){
  Spotify.search({type: 'track', query: item}), function(err,data) {
    if (err) {
      return console.log("An error occurred" + err);
    }else {
      console.log(data);
    }
  }

}
  

//`movie-this`    "http://www.omdbapi.com/?t=" + input + "&apikey=3c68cd9d"


//`do-what-it-says`

  
//`to read from random.txt
/* var fs = require("fs");
 fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error)
    }
    console.log(data);
  })*/