import React from 'react'
import {Scene, Router} from 'react-native-router-flux'
import LoginForm from './src/components/LoginForm'
import Main from './src/components/Main'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
     
      <Scene key='main'>

        <Scene
          key='employeeCreate'
          component={Main}
          title='Coin Market Tracker' />

      </Scene>

      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Login' initial />
      </Scene>
    </Router>
  )
}

export default RouterComponent
