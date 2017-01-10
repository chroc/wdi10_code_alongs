var ListView = Backbone.View.extend({
  tagName: 'div',

  className: 'list',
  
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addCookie);
  },
  
  render: function() {
    this.collection.forEach(function(cookie) {
      var view = new ListItemView({ model: cookie });
      this.$el.append(view.render().el)
    }, this);

    return this;
  },

  addCookie: function() {
  }
});

