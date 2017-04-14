// This function picks a film at random from the array and returns a search string for that film's object
var pickFilm = function() {
    todaysFilmnumber = Math.floor(Math.random() * myFilms.length) + 1;
    todaysFilmIMDB = myFilms[todaysFilmnumber];

    console.log(todaysFilmnumber);
    console.log(todaysFilmIMDB);
    var searchString = 'http://www.omdbapi.com/?i=' + todaysFilmIMDB + '&plot=short&r=json'
    console.log(searchString);
    return searchString;
}

// var randomFilm = function() {
//         todaysFilmnumber = Math.floor(Math.random() * myFilms.length) + 1;
//         todaysFilmIMDB = myFilms[todaysFilmnumber];

//         console.log(todaysFilmnumber);
//         console.log(todaysFilmIMDB);
//         // var searchString = 'http://www.omdbapi.com/?i=' + todaysFilmIMDB + '&plot=short&r=json'
//         // console.log(searchString);
//         return todaysFilmIMDB;
//     }

    
    //
    // This function is triggered by the button, and it executes the film object and inserts the film that has been chosen at random and renders the image and title on the page
var go = function() {

    var min = filmObj(pickFilm());

    $('#title h1').text(min.Title);
    $('#poster img').attr('src', min.Poster);


}

// This function takes a searchstring and retrieves the json object from the website and returns the object.
var filmObj = function(searchString) {
    var filmObj = null;
    console.log(searchString);
    $.ajax({
        'async': false,
        'global': false,
        'url': searchString,
        'dataType': "json",
        'success': function(data) {
            filmObj = data;
        }
    });
    // console.log(filmObj);
    return filmObj;
};

var clearShow = function() {
    $('li').remove();
    // alert('boo');
}


// Buttons etc:


$(document).ready(function() {

    $('button#find').on('click', function() {
        clearShow();
        go();
    });

    $('button#show').on('click', function() {
        showAll(myFilms);
    });

});
