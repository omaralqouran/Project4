/**
 *   @author Al-Qouran, Omar (omaralqouran48@gmail.com)
 *   @version 0.0.1
 *   @summary Project 3  || created: 09.27.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');
const MOVIE_TITLE = 0, COLUMNS = 4, MOVIE_RATING = 1, TOTAL_RATING = 2, NUMBER_RATINGS = 3;

let movies = [];
let totalRating, averageRating, infinite = 0, movieChoice, newTask;

function main() {
    setNewTask();
    if (newTask === 0) {
        while (infinite < 1) {
            populateMovies();
        }
        calculateAverageRating();
    }
    else if (newTask = 1)
    printResults();

}
main();

function setNewTask() {
    while (typeof whichTask === 'undefined' || isNaN(newTask) || newTask < 0 || newTask > 1) {
        newTask = Number(PROMPT.question(`\nPlease choose on of the following. [0 = New Movie or 1 = Show all average ratings `));
    }
}

    function populateMovies() {
        const MAX_MOVIES = 1000000;
        let moviesNumber = (movies.length);
        movies[moviesNumber] = [];
        for (let j = 0; j < MAX_MOVIES; j++) {
            for (let i = 0; i < COLUMNS; i++) {
                if (i === MOVIE_TITLE) {
                    while (typeof movies[i][MOVIE_TITLE] === 'undefined' || !/(^[a-z]+$){1,30}/i.test(movies[i][MOVIE_TITLE])) {
                        movies[i][MOVIE_TITLE] = PROMPT.question(`\nPlease enter a movie that will be tested: `);
                    }
                } else if (i === MOVIE_RATING) {
                    while (typeof movies[i][MOVIE_RATING] === 'undefined' || !/(^[0-5]+$){1}/i.test(movies[i][MOVIE_RATING])) {
                        movies[i][MOVIE_RATING] = Number(PROMPT.question(`\nPlease rate the movie: `));
                    }
                }
            }
            if (i === TOTAL_RATING) {
                while (typeof movies[i][TOTAL_RATING] != 'undefined' || !/(^[0-9]+$){32}/i.test(movies[i][TOTAL_RATING])) {
                    totalRating = totalRating + movies[i][MOVIE_RATING];
                }
            }
            if (i === NUMBER_RATINGS) {
                while (typeof movies[i][NUMBER_RATINGS] != 'undefined' || !/(^[0-9]+$){32}/i.test(movies[i][NUMBER_RATINGS])) {
                    movies[i][NUMBER_RATINGS] = movies[i][NUMBER_RATINGS]++;
                }
            }
        }
    }

function setNewTask() {
        newTask = Number(PROMPT.question(`\nWould like to review a movie or rate a new one`));
}

function calculateAverageRating() {

}

function printResults() {
    for(let trump = 0; trump < movies.length; trump++;) {
        for (let sanders = 0; sanders < COLUMNS; sanders++) {
            console.log(`${library[trump][sanders]}`)
        }
    }
}


function populateMovies() {
    const MOVIE_TITLE = 0, COLUMNS = 4, MOVIE_RATING = 1, TOTAL_RATING = 2, NUMBER_RATINGS = 3;
    let counter = 0;
    movies[movies.length] = [];
    let moviesEntry = movies.length - 1
    while (counter < COlUMNS) {

    }
}


