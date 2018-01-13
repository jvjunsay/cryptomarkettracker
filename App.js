import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './src/reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import RouterComponent from './Router'

export class App extends Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyDZU8nEPTFfE9o48CJTw5SIxe2ZP13iu0A',
      authDomain: 'cryptotracker-9b5a2.firebaseapp.com',
      databaseURL: 'https://cryptotracker-9b5a2.firebaseio.com',
      projectId: 'cryptotracker-9b5a2',
      storageBucket: 'cryptotracker-9b5a2.appspot.com',
      messagingSenderId: '381314834925'
    }
    firebase.initializeApp(config)
  }

  render () {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponent />
      </Provider>
    )
  }
}

export default App
