import * as type from '../actions/Types'

const initialState = {
  globalMarket: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_COIN_MARKET_CAP:
      return action.payload

    case type.FETCH_COIN_MARKET_CAP_GLOBAL:
      return {...state, globalMarket: action.payload}

    default:
      return state
  }
}
