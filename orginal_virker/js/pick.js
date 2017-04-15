
var myFilms = [
    'tt1974419',
    'tt1149362',
    'tt0064115',
    'tt0080455',
    'tt0118715',
    'tt0083922',
    'tt0060827',
    'tt0074958', // The network
    'tt0050783', // Fellini
    'tt0074896', // The message
    'tt0978762', // Mary and Max
    'tt0091251', // Mary and Max
    'tt2375605' // The act of killing

]



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
// This function takes a film id and returns a film object for it
var gimmeObject = function(filmID) {
    var theObject = null;
    var searchString = 'http://www.omdbapi.com/?i=' + filmID + '&plot=short&r=json';
    // console.log(searchString);
    $.ajax({
        'async': false,
        'global': false,
        'url': searchString,
        'dataType': "json",
        'success': function(data) {
            theObject = data;
        }
    });
    return theObject;
}
var showAll = function(theFilms) {
    var n = -1;
    var x = 0;
    while (n < theFilms.length - 1) {
        n++;
        console.log(n);
        var thisFilm = gimmeObject(theFilms[n]);
        console.log(thisFilm.Title);
        $('ul').append('<li><div class="poster"><img src="' + thisFilm.Poster + '"></div><div class="title"><h1>' + thisFilm.Title + '</h1></div><div class="rating"><span>Rating: </span>' + thisFilm.imdbRating + '</div></li>');
        x += n;
    }
}