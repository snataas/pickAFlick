


// This function takes a film id and returns a film object for it

var gimmeObject = function(filmID){
  var theObject = null;
  var searchString = 'http://www.omdbapi.com/?i=' + filmID + '&plot=short&r=json';
  // console.log(searchString);

  $.ajax({
      'async': false,
      'global': false,
      'url': searchString,
      'dataType': "json",
      'success': function (data) {
          theObject = data;
      }
  });

  return theObject;

}

var showAll = function(theFilms){
	var n = -1;
	var x = 0;
	while (n < theFilms.length-1) {
	  n++;
		console.log(n);
    var thisFilm = gimmeObject(theFilms[n]);
    console.log(thisFilm.Title);
    $('ul').append('<li><div class="poster"><img src="' + thisFilm.Poster + '"></div><div class="title"><h1>' + thisFilm.Title + '</h1></div><div class="rating"><span>Rating: </span>'+thisFilm.imdbRating+'</div></li>');

	  x += n;
	}

}
