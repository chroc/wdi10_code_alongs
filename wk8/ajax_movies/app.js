var getMovies = function() {
  var movie = $('#search').val();
  var settings = {
    url: 'http://omdbapi.com',
    method: 'get',
    dataType: 'json',
    data: { s: movie }
  }
  $.ajax(settings).done(function(response) {
    var movies = response.Search;
    _.each(movies, function(movie) {
      var source = $('#movie-template').html();
      var template = Handlebars.compile(source);
      var html = template({
        title: movie.Title,
        year: movie.Year
      });
      $('#list').append(html);

      // var html = Handlebars.compile($('#movie-template').html())({title: movie.Title, year: movie.Year});

      // $('#list').append(movie.Title + '<br />');
    });
  });
};

$('button').on('click', getMovies);

