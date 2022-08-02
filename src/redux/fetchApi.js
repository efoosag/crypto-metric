/* eslint-disable operator-linebreak */
const FETCH_COIN = 'FETCH_COIN';

const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=4&sparkline=false';
const initialState = {
  coin: [],
};

export const getCoin = (payload) => ({
  type: FETCH_COIN,
  payload,
});

export const getCoinData = () => async (dispatch) => {
  const request = await fetch(url);
  const response = await request.json();
  const entries = Object.entries(response);
  dispatch(getCoin(entries));
};

const CoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COIN:
      return { ...state, coin: action.payload };
    default:
      return state;
  }
};

export default CoinReducer;
