import React from 'react'
import {Scene, Router} from 'react-native-router-flux'
import LoginForm from './src/components//LoginForm'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Login' initial />
      </Scene>
    </Router>
  )
}

export default RouterComponent
