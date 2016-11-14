/**
 * @author Al-Qouran, Omar (omaralqouran48@gmail.com)
 *   @version 0.0.1
 *   @summary Project 3  || created: 11.12.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');
const MOVIE_TITLE = 0, COLUMNS = 4, MOVIE_RATING = 1, TOTAL_RATING = 2, NUMBER_RATINGS = 3;

let movies = [];
let totalRating, averageRating, infinite = 0, movieChoice, newTask;

function main() {
    populateMovies();
    calculateAverageRating();
    printResults();

}
main();

function setNewTask() {
    while (typeof whichTask === 'undefined' || isNaN(newTask) || newTask < 0 || newTask > 1) {
        newTask = Number(PROMPT.question(`\nPlease choose on of the following. [0 = New Movie or 1 = Show all average ratings `));
    }
}

function populateMovies() {
    const MOVIE_TITLE = 0, COLUMNS = 4, MOVIE_RATING = 1, TOTAL_RATING = 2, NUMBER_RATINGS = 3;
    let counter = 0;
    movies[movies.length] = [];
    let moviesEntry = movies.length - 1;
    while (counter < COLUMNS) {
        if (counter === MOVIE_TITLE) {
            while (typeof movies[moviesEntry][counter] === 'undefined' || !/(^[a-z]+$){1,30}/i.test(movies[moviesEntry][counter])) {
                movies[moviesEntry][counter] = PROMPT.question(`\nPlease enter a movie that will be tested: `);
            }
        } else if (counter === MOVIE_RATING) {
            while (typeof movies[moviesEntry][counter] === 'undefined' || !/(^[0-5]+$){1}/i.test(movies[moviesEntry][counter])) {
                movies[moviesEntry][counter] = Number(PROMPT.question(`\nPlease rate the movie on a scale 1 to 5 stars: `));
            }
        }
        if (counter === TOTAL_RATING) {
            while (typeof movies[moviesEntry][counter] != 'undefined' || !/(^[0-9]+$){32}/i.test(movies[moviesEntry][counter])) {
                totalRating = totalRating + movies[moviesEntry][counter];
            }
        }
        if (counter === NUMBER_RATINGS) {
            while (typeof movies[moviesEntry][counter] != 'undefined' || !/(^[0-9]+$){32}/i.test(movies[moviesEntry][counter])) {
                movies[moviesEntry][counter] = movies[moviesEntry][counter]++;
            }
        }
        counter++;
    }

}


function calculateAverageRating() {

}

function printResults() {
        for (let moviesEntry = 0; counter < movies.length; moviesEntry++) {
            for (let counter = 0; counter < COLUMNS; counter++) {
                console.log(`${movies[moviesEntry][counter]}`);
            }
        }
}






