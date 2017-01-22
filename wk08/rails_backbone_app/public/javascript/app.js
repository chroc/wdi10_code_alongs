var view = new ListView({
  collection: cookies
});

$('#list').append(view.render().el);

