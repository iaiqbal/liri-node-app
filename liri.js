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
            omdbRun(item);
            break;

        case "search-concerts":
            concertsRun(item1);
            break;
        
        case "search-songs":
            songsRun(item2);
            break;
        
        case "feeling-lucky":
            luckyRun(item3);
            break;
    }
};

function spotifySong(item2) {


    let track;
    if (item2 === undefined) {
        searchTrack = "Separate Ways";
    } else {
        searchTrack = item2;
    }

    spotify.search({
        type: 'track',
        query: track
    }, function (error, data) {
        if (errorDisplay) {
            display('The error is the following: ' + errorDisplay);
            return;
        } else {
            
            console.log("Artist name is: " + data.tracks.items[0].artists[0].name);
            console.log("Song name is: " + data.tracks.items[0].name);
            console.log("Preview: " + data.tracks.items[3].preview_url);
            console.log("Album name is: " + data.tracks.items[0].album.name);
            

        }

    });
};

axios.get(omdbQuery)
    .then(function (response) {

        function omdbRun(item) {
            let choiceMovie = par;
            if (item === undefined) {
                choiceMovie = "Mr. Nobody";
            } else choiceMovie = item;
            
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

if ("search-concerts") {
axios.get(ticketQuery)
    .then(function (response) {

        function concertsRun(item1) {
            let choiceConcert = item1;
        };

        console.log(response.data._embedded);

    })
    .catch(function (error) {
        console.log(error);
    });
};