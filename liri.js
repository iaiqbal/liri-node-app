require("dotenv").config();

const keys = require("./keys.js");

const fs = require("fs");

// const spotifyKeys = new Spotify(keys.spotify);

// const spotify = require("node-spotify-api");

const request = require("request");

// const omdb = require("omdb");
const axios = require("axios");

// const ticketmaster = require("ticketmaster");


const movie = process.argv[2];
const omdbQuery = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
// const omdbQuery = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=" + omdb;
console.log(omdbQuery);


axios.get(omdbQuery)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });