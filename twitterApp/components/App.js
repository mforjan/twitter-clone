import React from 'react'
import InputBox from './InputBox.js'
import TweetContainer from './TweetContainer.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers/reducer'
const store = createStore(reducer)

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <div className="main">
          <InputBox />
          <TweetContainer />
        </div>
      </Provider>
    )
  }
}

export default App;
