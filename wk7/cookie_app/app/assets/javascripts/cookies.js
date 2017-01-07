$(document).ready(function() {
  
  var addCookie = function() {
    var settings = {
      url: '/cookies',
      data: {
        'cookie[name]': 'snickerdoodle',
        'cookie[description]': 'sugar and spice and everything nice',
        'cookie[price]': '10',
        'cookie[tasty]': true
      },
      method: 'post',
      dataType: 'json'
    }

    $.ajax(settings).done(function(response) {
      var $liElement = $("<li>");
      var $strongElement = $("<strong>");
      $strongElement.append(response.name);
      $liElement.append($strongElement);
      $('#cookies-list').append($liElement);
    });
  } 

  // cookie button event listener
  $('#add-cookie').on('click', addCookie);
});

