import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BsX } from 'react-icons/bs';

const CoinDetails = () => {
  const {
    state: { crypto },
  } = useLocation();
  return (
    <div className="container">
      <div className="details-title">
        <h1 className="h1">
          <span>{crypto.name}</span>
          <span>Breakdown</span>
        </h1>

        <Link to="/">
          <div className="close">
            <BsX />
          </div>
        </Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={crypto.image} alt="details" />
          <h3 className="span">
            <span>{crypto.name}</span>
            <span>{crypto.atl}</span>
          </h3>
        </div>
        <div className="allDetail">
          <h3 className="h3">
            <span>Current Price</span>
            {crypto.current_price}
          </h3>
          <h3 className="h3">
            <span>Total Supply</span>
            {crypto.total_supply}
          </h3>
          <h3 className="h3">
            <span>Total Volume</span>
            {crypto.total_volume}
          </h3>
          <h3 className="h3">
            <span>Market Rank</span>
            {crypto.market_cap_rank}
          </h3>
          <h3 className="h3">
            <span>Market Change</span>
            {crypto.market_cap_change_24h}
          </h3>

          <h3 className="h3">
            <span>Price Change Percentage</span>
            {crypto.price_change_percentage_24h}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
