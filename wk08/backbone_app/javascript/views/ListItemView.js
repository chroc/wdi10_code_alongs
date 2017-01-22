var ListItemView = Backbone.View.extend({
  tagName: 'p',
  initialize: function() {
    this.listenTo(this.model, 'change:name', this.render);
  },
  render: function() {
    var html = Handlebars.templates.cookie(this.model.toJSON());
    this.$el.html(html);
  }
})

