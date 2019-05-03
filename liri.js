require("dotenv").config();

const keys = require("./keys.js");

const fs = require("fs");

// const spotifyKeys = new Spotify(keys.spotify);

// const spotify = require("node-spotify-api");
// const ticketmaster = require("ticketmaster");
// const omdb = require("omdb");
const axios = require("axios");
const request = process.argv[2];
const input = process.argv[3];
const omdbQuery = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=" + process.env.OMDB_ID;
const ticketQuery = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + input + "&city=houston&size=1&apikey=" + process.env.TICKETMASTER_ID;






function switchCase() {
    switch(request) {
        case "search-movies":
            omdbRun(par);
            break;

        case "search-concerts":
            concertsRun(par1);
            break;
        
        case "search-songs":
            songsRun(par);
            break;
        
        case "feeling-lucky":
            luckyRun(par);
            break;
    }
};

axios.get(omdbQuery)
    .then(function (response) {

        function omdbRun(par) {
            let choiceMovie = par;
            if (par === undefined) {
                choiceMovie = "Mr. Nobody";
            } else choiceMovie = par;
            
        };
        console.log(response.data.Title);
        console.log(response.data.Year);
        console.log(response.data.Rated);
        console.log(response.data.Country);
        console.log(response.data.Language);
        console.log(response.data.Plot);
        console.log(response.data.Actors);
        console.log(response.data.Ratings);
        // return response.Actors;
    })
    .catch(function (error) {
        console.log(error);
    });

axios.get(ticketQuery)
    .then(function (response) {

        function concertsRun(par1) {
            let choiceConcert = par1;
        };

        console.log(response.data._embedded);

    })
    .catch(function (error) {
        console.log(error);
    });