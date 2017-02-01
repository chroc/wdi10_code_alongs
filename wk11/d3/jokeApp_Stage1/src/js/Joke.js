var React = require('react');

var Joke = React.createClass({
  render: function() {
    return (
      <h4>{this.props.jokeProp}</h4>
    )
  }
});

module.exports = Joke;

