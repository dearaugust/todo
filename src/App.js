import React, { Component } from 'react'
import './App.css'
import Main from './Main.js'
import { Provider } from 'react-redux'
import store from './redux/store.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default App;
