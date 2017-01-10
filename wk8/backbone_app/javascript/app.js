var cookies = [
  new Cookie({
    id: 1,
    name: 'shitty cookie',
    description: 'tastes like...shit'
  }),
  new Cookie({
    id: 2,
    name: 'choc chip',
    description: 'tasty chocolate'
  }),
  new Cookie({
    id: 3,
    name: 'snickerdoodle',
    description: 'sugary cinnamon'
  })
];

_.each(cookies, function(cookie) {
  var view = new ListItemView({ model: cookie });
  view.render();
  $('#list').append(view.el);
});

