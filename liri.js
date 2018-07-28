require("dotenv").config();

var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");
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
  spotify(item);
  break;

  case 'movie-this':
  omdbMovie(item);
  break;

  case 'do-what-it-says':
  justDoIt(item);
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
  

//`movie-this` 
function omdbMovie(item){   
var queryURL = "http://www.omdbapi.com/?t=" + item + "&apikey=3c68cd9d"

request(queryURL, function(er, response2, body) {
  if (!item){
    input = 'Animatrix';
  } else if (er){
    console.log("An error occured" + er)
  } if (!er && response2.statusCode === 200) {
    console.log(JSON.parse(body));
    console.log(response2);
  }
})
}
//`do-what-it-says`
//`to read from random.txt
function justDoIt(item) {
  
  fs.readFile("random.txt", "utf8", function(error2, data2) {
  //to split random.txt by commas and make it readable
  var dataArr = data2.split(",");

  //to remove the quotes from title because the way random.txt is written
  var item = dataArr[1].slice(0, -1);

    if (dataArr[0] === "my-tweets"){
      twitter(item)

    } else if (dataArr[0] === "spotify-this-song"){
      spotify(item);

    } else if (dataArr[0] === "movie-this"){
      omdbMovie(item);
      
    }



    if (error2) {
      return console.log(error2)
    }
    console.log(data2);
  })
}