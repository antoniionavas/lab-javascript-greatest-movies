// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors
    allDirectors = moviesArray.map(element =>{
        return element.director
    })

    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesSpielberg = 0;
    moviesArray.filter(element => {
        if (element.director === "Steven Spielberg" && element.genre.includes("Drama")) {
            return moviesSpielberg ++;
        }
    });
            return moviesSpielberg;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    let avgScore = moviesArray.reduce((acc,element) => {
    
        if (element.score !== undefined){
            return acc + Number(element.score)
        } 
        else {
            return acc
        }
    },0)/moviesArray.length; 

    let average = avgScore.toFixed(2);
    return parseFloat(average);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    
    let moviesDrama = 0;
   
    moviesArray.filter(element => {
        if (element.genre.includes("Drama")) {
            return moviesDrama ++;
        }
    });

    if (moviesDrama === 0){
        return 0
    }

    let avgScore = moviesArray.reduce((acc,element) => {
    
        if (element.score !== undefined && element.genre.includes("Drama") ){
            return acc + Number(element.score)
        } 
        else {
            return acc
        }    

    },0)/moviesDrama; 

    let average = avgScore.toFixed(2);
    return parseFloat(average);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(moviesArray) {
    let cloneMoviesArrays = JSON.parse( JSON.stringify(moviesArray) )


    cloneMoviesArrays.sort((elem2, elem1) => {
    if(elem2.year > elem1.year){
        return 1
    } else if (elem2.year < elem1.year) {
      return -1
    } else {
      return 0
    }   
}) 
    let newYearArray = cloneMoviesArrays;

    newYearArray.sort((elem2, elem1) => {
        if (elem2.year === elem1.year && elem1.title < elem2.title){
          return 1
        } else if (elem2.year === elem1.year && elem1.title > elem2.title) {
          return -1
        } else {
          return 0
        }  
})
    return newYearArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

    let cloneMoviesArrays = JSON.parse( JSON.stringify(moviesArray) )
    cloneMoviesArrays.sort((elem2, elem1) => {
        if(elem2.title > elem1.title){
            return 1
        } else if (elem2.title < elem1.title) {
          return -1
        } else {
          return 0
        }   
})
    let result = cloneMoviesArrays.slice(0,20)
    result.sort();

    return result;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
