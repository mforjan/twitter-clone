import React from 'react';
import styles from '../../build/main.css';
import { addTweet } from '../actions/actions.js'
import { connect } from 'react-redux'

const username = 'Matt Forjan'
const handle = '@Matt'

class InputBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      chars: 140
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
      chars: 140 - event.target.value.length
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const date = new Date();
    this.props.addTweetClick(username, handle, this.refs.message.value, date.toLocaleDateString());
    this.setState({
      text: '',
      chars: 140
    })
  }

  render() {
    return(
      <form className="box col" onSubmit={this.handleSubmit}>
        <textarea
          type="text"
          id="input-field"
          placeholder="Enter tweet..."
          maxLength="140"
          onChange={this.handleChange}
          ref="message"
          value={this.state.text}
        ></textarea>
        <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%"}}>
          <div style={{marginRight: "10px"}}>{this.state.chars}</div>
          <button id="submit-button">submit</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTweetClick: (username, handle, message, date) => dispatch(addTweet(username, handle, message, date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputBox);
