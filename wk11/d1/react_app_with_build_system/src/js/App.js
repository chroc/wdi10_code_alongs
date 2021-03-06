var React = require('react');
var TweetBox = require('./TweetBox');

var App = React.createClass({
  getInitialState: function() {
    return { numbers: [10, 20, 30, 40] }
  },

  render: function() {
    return(
      <div>
        <h1>Tweet Box</h1>
        {this.state.numbers.map(function(elem, index) {
          return <TweetBox key={index} maxTweetLength={elem} />
        })}
      </div>
    )
  }
});

module.exports = App;

