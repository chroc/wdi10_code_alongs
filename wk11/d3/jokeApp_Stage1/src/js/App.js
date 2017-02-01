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
        <Input />
        {this.state.jokes.map(function(theJoke, index) {
          return <Joke key={index} jokeProp={theJoke} />
        })}
      </div>
    )
  }
});

module.exports = App;

