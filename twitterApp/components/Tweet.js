import React from 'react';

const username = 'Matt Forjan '
const handle = '@Matt'

class Tweet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="box">
        <div className="tweet row">
          <div id="avatar" style={{fontSize: 36}}>MF</div>
          <div id="info">
            <div className="row sb">
              <div className="row">
                <div style={{fontSize: 12}}>{username}{'\u00A0'}</div>
                <div style={{fontSize: 12, color: "gray"}}>{handle}</div>
              </div>
              <div style={{fontSize: 12, color: "gray"}}>{this.props.date}</div>
            </div>
            <div id="message" style={{height: "50%"}}>{this.props.message}</div>
            <div className="row">
              <a>Reply</a>
              <a>Retweet</a>
              <a>Favorite</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tweet;
