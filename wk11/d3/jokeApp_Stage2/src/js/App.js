var React = require('react');
var Input = require('./Input');
var Joke = require('./Joke');

var App = React.createClass({
  getInitialState: function() {
    return {
      jokes: ['knock knock...', 'why did the chicken cross the road?', 'three people walk into a bar...ouch!']
    }
  },

  render: function() {
    return(
      <div>
        <h1>Joke Widget</h1>
        <Input addJokeProp={this.addJoke} />
        {this.state.jokes.map(function(theJoke, index) {
          return <Joke key={index} jokeProp={theJoke} />
        })}
      </div>
    )
  },

  addJoke: function(e) {
    var joke = e.target.value
    this.setState({
      jokes: this.state.jokes.concat(joke)
    });
  }
});

module.exports = App;

