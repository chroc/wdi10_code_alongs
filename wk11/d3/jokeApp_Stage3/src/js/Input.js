var React = require('react');

var Input = React.createClass({
  render: function() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input placeholder="Write your joke here..." ref="inputElement" />
        <button>Add Joke</button>
      </form>
    )
  },

  _handleSubmit(e) {
    e.preventDefault();

    this.props.addJokeProp(this.refs.inputElement)
  }
});

module.exports = Input;

