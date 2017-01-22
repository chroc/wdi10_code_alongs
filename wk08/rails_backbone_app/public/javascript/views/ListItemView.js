var ListItemView = Backbone.View.extend({
  tagName: 'p',
  
  events: {
    'focusout .name': 'updateModel',
    'focusout .description': 'updateModel'
  },
    
  initialize: function() {
    // this.listenTo(this.model, 'change:name', this.render);
  },

  render: function() {
    var html = Handlebars.templates.cookie(this.model.toJSON());
    this.$el.html(html);

    return this;
  },
  
  updateModel: function(e) {
    this.model.updateProps(e.currentTarget);
  }
})

