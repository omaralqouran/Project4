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
let totalRating, averageRating, movieRating, newTask;

function main() {
    while (0 < 1) {
        setNewTask();
        if (newTask === 0) {
            populateMovies();
            console.log(`printing results`);
            printResults();
        } else {
            calculateAverageRating();
            printResults();
        }
    }
}

main();

function setNewTask() {
    newTask = -1;
    while (typeof newTask === 'undefined' || isNaN(newTask) || newTask < 0 || newTask > 1) {
        newTask = Number(PROMPT.question(`\nPlease choose one of the following. [0 = Edit/new movie or 1 = Show all rating]: `));
    }
}

function populateMovies() {
    const MOVIE_TITLE = 0, COLUMNS = 4, MOVIE_RATING = 1;
    let counter = 0;
    let newTitle, movieChoice;
    movies[movies.length] = [];
    let moviesEntry = movies.length - 1;
    for (let counter = 0; counter < moviesEntry; counter++) {
        console.log(`\t${counter} = ${movies[counter][MOVIE_TITLE]}`);
        newTitle = counter;
    }
    if (movies.length > 1) {
        movieChoice = Number(PROMPT.question(`If you would like to enter a new movie enter ${counter} or to edit an existing one press that movies number: `));
        if (movieChoice === newTitle) {
            while (counter < COLUMNS) {
                if (counter === MOVIE_TITLE) {
                    while (typeof movies[moviesEntry][MOVIE_TITLE] === 'undefined' || !/(^[a-zA-Z]+$){1,30}/i.test(movies[moviesEntry][MOVIE_TITLE])) {
                        movies[moviesEntry][MOVIE_TITLE] = PROMPT.question(`\nPlease enter a movie that will be tested: `);
                    }
                } else if (counter === MOVIE_RATING) {
                    while (typeof movies[moviesEntry][MOVIE_RATING] === 'undefined' || !/(^[0-5]+$){10}/i.test(movies[moviesEntry][MOVIE_RATING])) {
                        movies[moviesEntry][MOVIE_RATING] = Number(PROMPT.question(`\nPlease rate the movie on a scale of 1 to 5 stars: `));
                    }
                } else if (counter === TOTAL_RATING) {
                    totalRating = totalRating + movies[moviesEntry][TOTAL_RATING];
                } else {
                    movieRating = movies[moviesEntry][NUMBER_RATINGS] = movies[moviesEntry][NUMBER_RATINGS]++;
                }
            }
            counter++;
        } else {
            while (counter < COLUMNS) {
                if (counter === MOVIE_TITLE) {
                    movies[movieChoice][MOVIE_TITLE] = movies[movieChoice][MOVIE_TITLE]
                } else if (counter === MOVIE_RATING) {
                    while (typeof movies[movieChoice][MOVIE_RATING] === 'undefined' || !/(^[0-5]+$){1}/i.test(movies[movieChoice][MOVIE_RATING])) {
                        movies[movieChoice][MOVIE_RATING] = Number(PROMPT.question(`\nPlease rate the movie on a scale of 1 to 5 stars: `));
                    }
                } else if (counter === TOTAL_RATING) {
                    totalRating = totalRating + movies[movieChoice][TOTAL_RATING];
                } else {
                    movieRating = movies[movieChoice][NUMBER_RATINGS] = movies[movieChoice][NUMBER_RATINGS]++;
                }
            }
            counter++;
        }
    } else {
        while (counter < COLUMNS) {
            if (counter === MOVIE_TITLE) {
                while (typeof movies[0][MOVIE_TITLE] === 'undefined' || !/(^[a-z]+$){1,30}/i.test(movies[0][MOVIE_TITLE])) {
                    movies[0][MOVIE_TITLE] = PROMPT.question(`\nPlease enter a movie that will be tested: `);
                }
            } else if (counter === MOVIE_RATING) {
                while (typeof movies[0][MOVIE_RATING] === 'undefined' || !/(^[0-5]+$){1}/i.test(movies[0][MOVIE_RATING])) {
                    movies[0][MOVIE_RATING] = Number(PROMPT.question(`\nPlease rate the movie on a scale of 1 to 5 stars: `));
                }
            } else if (counter === TOTAL_RATING) {
                totalRating = totalRating + movies[0][TOTAL_RATING];
            } else {
                movieRating = movies[0][NUMBER_RATINGS] = movies[0][NUMBER_RATINGS]++;
            }
        }
        counter++;
    }
}


function calculateAverageRating(totalRating) {
    averageRating = totalRating / movieRating
}

function printResults(counter) {
    for (let moviesEntry = 0; moviesEntry < movies.length; moviesEntry++) {
        for (let counter = 0; counter < movies[moviesEntry].length; counter++) {
            console.log(`${movies[moviesEntry][counter]}`);
        }
    }
}