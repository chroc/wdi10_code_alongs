var React = require('react');

var TweetBox = React.createClass({
  getInitialState: function() {
    return {
      content: '',
      maxTweet: this.props.maxTweetLength
    }
  },

  handleChange: function(e) {
    this.setState({ content: e.target.value });
  },

  render: function() {
    // var maxTweet = this.state.mTL;
    // var content = this.state.content;

    var { content, maxTweet } = this.state;
    
    var isDisabled = content.length <= 0 || content.length > maxTweet;

    var spanStyle = content.length > maxTweet ? { color: 'red' } : {}

    var spanClass = content.length > maxTweet ? 'warning' : ''

    return (
      <div>
        <textarea onChange={this.handleChange}></textarea>
        <button disabled={isDisabled}>tweet</button>
        <span className={spanClass}>
          {maxTweet - content.length}
        </span>
      </div>
    )
  }
});

module.exports = TweetBox;

