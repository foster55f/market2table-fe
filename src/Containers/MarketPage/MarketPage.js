import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MarketPage.scss';
import { addSelectedMarket } from '../../actions';

export const MarketPage = () => {
  const selectedMarketId = useSelector(state => state.selectedMarket);
  const markets = useSelector(state => state.markets);
  const dispatch = useDispatch();

  const marketInfo = markets.find(market => market.id === selectedMarketId);

  return (
    <section className='section-market-page-container'>
      <Link to='/markets' onClick={() => dispatch(addSelectedMarket(''))}>
        Back To Markets
      </Link>
      <h2>{marketInfo.marketname}</h2>
      <h3>Address: </h3>
      <p>{marketInfo.Address}</p>
      <h3>Products: </h3>
      <p>{marketInfo.Products}</p>
      <h3>Schedule: </h3>
      <p>{marketInfo.Schedule}</p>
      <h3>Google Maps: </h3>
      <a href={marketInfo.GoogleLink}>Click Here For Directions</a>
    </section>
  )

}

export default MarketPage;
