import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Image, Platform } from 'react-native'
import { TabNavigator, TabBarBottom } from 'react-navigation'

import Colors from '../constants/Color'

import CoinMarketCap from './CoinMarketCap'
import Binance from './Binance'
import Settings from './Settings'

export default TabNavigator(
  {
    CoinMarketCap: {
      screen: CoinMarketCap
    },
    Binance: {
      screen: Binance
    },
    Settings: {
      screen: Settings
    }
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName
        let color = focused ? Colors.tabIconSelected : Colors.tabIconDefault

        switch (routeName) {
          case 'CoinMarketCap':
            return (
              <Image
                source={require('../../assets/cmc.png')}
                style={[styles.icon, {}]}
                />
            )
          case 'Binance':
            return (
              <Image
                source={require('../../assets/bnb.png')}
                style={[styles.icon, {tintColor: color}]}
                />
            )
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'

            return (
              <Ionicons
                name={iconName}
                size={32}
                style={{ marginBottom: -3 }}
                color={color}
                />
            )
        }
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }

)

const styles = {
  icon: {
    width: 32,
    height: 32
  }
}
