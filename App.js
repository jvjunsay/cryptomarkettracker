import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner, CardSection } from './src/components/common'
import LoginFrom from './src/components/LoginForm'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: null

    }
  }

  componentWillMount () {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyDZU8nEPTFfE9o48CJTw5SIxe2ZP13iu0A',
        authDomain: 'cryptotracker-9b5a2.firebaseapp.com',
        databaseURL: 'https://cryptotracker-9b5a2.firebaseio.com',
        projectId: 'cryptotracker-9b5a2',
        storageBucket: 'cryptotracker-9b5a2.appspot.com',
        messagingSenderId: '381314834925'

      }
    )

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent () {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        )
      case false:
        return (<LoginFrom />)
      default:
        return (<View style={{justifyContent: 'center', alignItems: 'center', height: 100}}><Spinner /></View>)
    }
  }

  render () {
    return (
      <View style={{height: 20}}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}
