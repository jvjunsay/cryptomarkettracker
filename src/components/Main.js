import React, { Component } from 'react'
import { View, Image, Dimensions } from 'react-native'

import MainTabNavigator from './MainTabNavigator'

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default class Main extends Component {
  

  render () {
    return (
      <View style={{flex:1,backgroundColor:'transparent'}}>
        <View>
          <Image style={{ height: height, width: width, position: 'absolute', top:0, left:0, flex:1 }} source={require('../../assets/bgrnd.jpg')} />
        </View>
        <MainTabNavigator />
      </View>
      
    )
  }
}
