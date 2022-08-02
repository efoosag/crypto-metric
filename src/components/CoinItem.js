/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import '../App.css';

const CoinItem = ({ crypto }) => {
  const { symbol, name, ath, image, id } = crypto;
  return (
    <div className="cryptoWrap">
      <div className="crypto">
        <div>
          <Link
            className="Links"
            to={`/CoinDetails/${id}`}
            state={{ crypto, id }}
          >
            <div className="icon">
              <FaRegArrowAltCircleRight />
            </div>
          </Link>
          <div className="title">
            <h2 className="Name">{name}</h2>
          </div>
          <div className="div">
            <p className="ath">{ath}</p>
            <p className="Symbol">{symbol}</p>
          </div>
          <div className="imge">
            <img src={image} alt="coinImages" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

CoinItem.propTypes = {
  crypto: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    ath: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
export default CoinItem;
