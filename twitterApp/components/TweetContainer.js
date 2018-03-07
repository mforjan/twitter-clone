import React from 'react';
import Tweet from './Tweet.js'
import { connect } from 'react-redux';

class TweetContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: []
    }
  }

  render() {
    return(
      <div id="container">
        {this.props.state.map((tweet) =>
          <Tweet
            user={tweet.user.name}
            handle={tweet.user.handle}
            message={tweet.message}
            date={tweet.date}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(TweetContainer);
