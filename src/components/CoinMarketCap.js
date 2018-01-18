import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { Card, ListItem, SearchBar } from 'react-native-elements'
import { fetchCMC, fetchCMCGlobal } from '../actions'
import _ from 'lodash'

export class CoinMarketCap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      marketCap: 0,
      hr: 0,
      cryptocurrencies: 0,
      markets: 0
    }
  }

  componentDidMount () {
    this.props.fetchCMC()
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      marketCap: (nextProps.data.globalMarket) ? nextProps.data.globalMarket.total_market_cap_usd : 0,
      hr: (nextProps.data.globalMarket) ? nextProps.data.globalMarket.total_24h_volume_usd : 0,
      cryptocurrencies: (nextProps.data.globalMarket) ? nextProps.data.globalMarket.active_currencies : 0,
      markets: (nextProps.data.globalMarket) ? nextProps.data.globalMarket.active_markets : 0,
      coinData: nextProps.data.data || []
    })
    // console.log(nextProps)
  }

  onChangeText (value) {
    let data = this.props.data.data

    this.setState({coinData: _.filter(data, (d) => {
      return (d.name.indexOf(value) !== -1)
    })})
  }

  onClearText (value) {
    console.log(value)
  }

  render () {
    return (
      <ScrollView style={{flex: 1}}>

        <Card title='Coin Market Cap' containerStyle={{padding: 0}}>
          <Text style={styles.textView}>
            Maket Cap : $ {this.state.marketCap} {'\n'}24hr Vol : $ {this.state.hr} {'\n'}
            Cryptocurrencies : {this.state.cryptocurrencies} {'\n'}Markets : {this.state.markets}
          </Text>

          <SearchBar
            lightTheme
            clearIcon={{ color: '#86939e', name: 'close' }}
            onChangeText={this.onChangeText.bind(this)}
            onClearText={this.onClearText.bind(this)}
            placeholder='Type Here...' />

          {
          _.map(this.state.coinData, (d) => {
            return (
              <ListItem
                key={d.id}
                title={d.name}
                roundAvatar
                hideChevron
                avatar={{uri: 'https://files.coinmarketcap.com/static/img/coins/32x32/' + d.id + '.png'}}
                subtitle={

                  <View style={styles.subtitleView}>
                    <Text>
                      Price : {'$' + d.price_usd} {'\n'}
                      24Hr : {d.percent_change_24h + ' %'}
                    </Text>

                  </View>
                }
              />
            )
          })
        }
        </Card>
      </ScrollView>

    )
  }
}

const styles = {
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  textView: {
    marginLeft: 10,
    marginBottom: 3
  }
}

function mapStateToProps ({cmc}) {
  return {data: cmc}
}

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, { fetchCMC, fetchCMCGlobal })(CoinMarketCap)
