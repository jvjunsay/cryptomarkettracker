import axios from 'axios'
import * as type from './Types'

export const fetchCMC = (params) => async (dispatch) => {
  try {
    const url = 'https://api.coinmarketcap.com/v1/ticker/'
    const url2 = 'https://api.coinmarketcap.com/v1/global/'
    let data = await axios.get(url)
    let data2 = await axios.get(url2)
    dispatch({ type: type.FETCH_COIN_MARKET_CAP, payload: {data: data.data, globalMarket: data2.data} })
  } catch (e) {
    console.error(e)
  }
}

export const fetchCMCGlobal = (params) => async (dispatch) => {
  try {
    const url = 'https://api.coinmarketcap.com/v1/global/'
    let data = await axios.get(url)
    dispatch({ type: type.FETCH_COIN_MARKET_CAP_GLOBAL, payload: data })
  } catch (e) {
    console.error(e)
  }
}
