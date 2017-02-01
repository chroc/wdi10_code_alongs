var React = require('react');

var Input = React.createClass({
  render: function() {
    return (
      <div>
        <input placeholder="Write your joke here..." />
        <button>Add Joke</button>
      </div>
    )
  }
});

module.exports = Input;

