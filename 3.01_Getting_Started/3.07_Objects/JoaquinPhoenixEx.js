//1. Create a variable that contains a JSON string. The properties of this JSON string should be about Joaquin Phoenix and should contain firstName, lastName, dateOFBirth, placeOfBirth, imdbRating, movies(this should be an empty array) and latestMovieTitle.

// 2. Convert that JSON to an object.

// 3. Add a function to the object above called updateImdbRating that takes as input a number and updates the object's imdbRating.

// 4. Update his IMDB rating using the function above.

// 5. Add a new property named lastMovie. It should be an object that contains the title of the movie and the year. 
//  {title: 'Gladiator', year: 2000} .

// 6. Add a function called updateLatestMovie that takes an object as an input and edits the lastMovie and the movies array.

// 7. Update his lastMovie and movies using that function. Please avoid duplicates in the movie array. Use the below object to call updateLatestMovie.
// {title: 'Walk the line', year: 2005}

// 8. Add a property called oscarsWon with the value of 0.

// 9. Make a function called updateOscarsCount that updates oscarsWon by one.

// 10. Call updateOscarsCount twice.

// 11. Add a function called addMovies that will take an array of movies (please use the spread operator ...) and will add movies to the movies array.

// 12. Call the function three times with the below arrays. Make sure your movies array has no duplicates when you update it.

// movies = [
//  {title: '8 mm', year: '1999'},
//  {title: 'Buffalo Soldiers', year: '2001'},
//  {title: 'Quills', year: '2000'}
// ]

// moreMovies = [
//  {title: 'The Village', year: 2004},
//  {title: 'Buffalo Soldiers', year: '2001'},
//  {title: 'Signs', year: 2002},
//  {title: 'Walk the line', year: 2005}
// ]

// someMoreMovies = [
//  {title: 'The Master, year: 2012},
//  {title: 'Joker', year: 2019},
//  {title: 'Inherent Vice', year: 2014},
//  {title: 'Walk the line', year: 2005},
//  {title: 'You Were Never Really Here', year: 2017},
//  {title: 'The Immigrant', year: 2013}
// ]



// 13.     Add a function called calculateNumberOfMovies that will calculate how many movies he made and it will add a new property to the initial object called totalMovies.

// 14.     Everytime you call the addMovies function, which adds more movies to the object, it should update the totalMovies and it should also update the lastMovie with the latest movie based on the year of each movie.


console.log('===========1.============');

let aboutJP = '{"firstName" : "Joaquin", "lastName" : "Phoenix", "dateOfBirth" : "2nd October 1974", "placeOfBirth" : "Puerto Rico", "imdbRating" : 70, "movies" : [], "latestMovieTitle" : "Joker"}';
console.log(aboutJP);


console.log('============2.==============');

let aboutJPObj = JSON.parse(aboutJP);
console.log(aboutJPObj);

console.log('============3.===============');

aboutJPObj.updateImdbRating = function (num) {
    this.imdbRating = num;
}
console.log(aboutJPObj);

console.log('=============4.================');

aboutJPObj.updateImdbRating(68);
console.log(aboutJPObj);

console.log('==============5.=================');

aboutJPObj.lastMovie = {
    title: 'Gladiator',
    year: 2000
};
console.log(aboutJPObj);

console.log('================6. and 7.================');

// 6. Add a function called updateLatestMovie that takes an object as an input and edits the lastMovie and the movies array.
aboutJPObj.updateMovies = function (obj) {
    //Teacher Solution

    if (this.lastMovie.year < obj.year)
        this.lastMovie = obj;

    // Check if my array is empty
    if (this.movies.length === 0)
        this.movies.push(obj)

    // Update the movies array
    let t = obj.title;
    for (let i = 0; i < this.movies.length; i++) {
        if (this.movies[i].title === t)
            return;
        else if (i == this.movies.length - 1) {
            this.movies.push(obj)
        }
    };

    // let {title} = obj;
    // for (let item of this.movies) {
    //     if (Object.values(item).includes(title))
    //         return;
    // };

    // this.movies.push(obj);
}
aboutJPObj.updateLatestMovie = function (obj) {
    this.lastMovie = obj;
    this.updateMovies(obj);
}

aboutJPObj.updateLatestMovie({
    title: 'Walk the line',
    year: 2005
});
aboutJPObj.updateLatestMovie({
    title: 'Gladiator',
    year: 2000
});
aboutJPObj.updateMovies({
    title: 'Walk the line',
    year: 2005
});
console.log(aboutJPObj);

// 7. Update his lastMovie and movies using that function. Please avoid duplicates in the movie array. Use the below object to call updateLatestMovie.
// {title: 'Walk the line', year: 2005}
//  aboutJPObj.updateMovies = function(obj) {
//      let {title} = obj;
//      for (let item of this.movies) {
//          if (Object.values(item).includes(title))
//              return;
//      };
//      this.movies.push(obj);
//  };

console.log('==================8.======================');

aboutJPObj.oscarsWon = 0;
console.log(aboutJPObj);

console.log('======================9.======================');

aboutJPObj.updateOscarsCount = function () {
    this.oscarsWon++;
}

aboutJPObj.updateOscarsCount();
console.log(aboutJPObj);

console.log('=======================10.=====================');

aboutJPObj.updateOscarsCount();
console.log(aboutJPObj);

console.log('=======================11.========================');

// 11. Add a function called addMovies that will take an array of movies (please use the spread operator ...) and will add movies to the movies array.

aboutJPObj.addMovies = function (...args) {
    //Simplest Solution
    // for(let i = 0; i < arr.length; i++){
    //     this.updateLatestMovie(arr[i]);
    // };
    //Best Solution
    args.forEach(element => this.updateMovies(element));
};

let movies = [{
        title: '8 mm',
        year: 1999
    },
    {
        title: 'Buffalo Soldiers',
        year: 2001
    },
    {
        title: 'Quills',
        year: 2000
    }
];

aboutJPObj.addMovies(...movies);

console.log(aboutJPObj);

console.log('=================12.======================');

let moreMovies = [{
        title: 'The Village',
        year: 2004
    },
    {
        title: 'Buffalo Soldiers',
        year: 2001
    },
    {
        title: 'Signs',
        year: 2002
    },
    {
        title: 'Walk the line',
        year: 2005
    }
];

aboutJPObj.addMovies(...moreMovies);

console.log(aboutJPObj);


let someMoreMovies = [{
        title: 'The Master',
        year: 2012
    },
    {
        title: 'Joker',
        year: 2019
    },
    {
        title: 'Inherent Vice',
        year: 2014
    },
    {
        title: 'Walk the line',
        year: 2005
    },
    {
        title: 'You Were Never Really Here',
        year: 2017
    },
    {
        title: 'The Immigrant',
        year: 2013
    }
];

aboutJPObj.addMovies(...someMoreMovies);

console.log(aboutJPObj);

console.log('=================13.======================');

aboutJPObj.calculateNumberOfMovies = function () {
    this.totalMovies = this.movies.length;
}
aboutJPObj.calculateNumberOfMovies();
console.log(aboutJPObj);

console.log('====================14.=======================');