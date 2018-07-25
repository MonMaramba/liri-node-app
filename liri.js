require("dotenv").config();
//code to import the keys.js file and store to variable
var keys = require("./keys.js");


var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);
