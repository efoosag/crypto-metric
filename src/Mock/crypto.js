/* eslint-disable implicit-arrow-linebreak */
const cryptos = () =>
  Promise.resolve({
    coin: [
      {
        id: 'Btc_coin',
        property: {
          crypto_name: 'BTC',
          crypto_volume: 2334444455,
          crypto_market_cap_change_24h: '-23',
        },
      },
      {
        id: 'Eth+coin',
        property: {
          crypto_name: 'ETH',
          crypto_volume: 2334433399,
          crypto_market_cap_change_24h: '-15',
        },
      },
    ],
  });

const fetchingData = () => cryptos().then((coin) => coin);

export default fetchingData;
