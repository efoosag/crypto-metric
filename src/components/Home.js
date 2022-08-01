/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CoinItem from './CoinItem';
import { getCoinData } from '../redux/fetchApi';

const Home = () => {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.CoinReducer);

  useEffect(() => {
    if (cryptos) {
      dispatch(getCoinData());
    }
  }, []);

  const [value, setValue] = useState('');
  const searchHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form>
        <br />
        <input
          placeholder="SEARCH BY CRYPTO COIN"
          className="search"
          type="text"
          value={value}
          onChange={searchHandler}
        />
      </form>
      <div>
        {' '}
        {value
          ? cryptos.coin
              .filter((coinData) =>
                coinData[1].name
                  .toLowerCase()
                  .includes(value.toLocaleLowerCase())
              )
              .map((coin) => <CoinItem key={coin[0]} crypto={coin[1]} />)
          : cryptos.coin.map((coin) => (
              <CoinItem key={coin[0]} crypto={coin[1]} />
            ))}
      </div>
    </div>
  );
};

export default Home;
