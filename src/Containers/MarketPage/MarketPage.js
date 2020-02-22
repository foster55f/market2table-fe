import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MarketPage.scss';
import { addSelectedMarket, addVendors } from '../../actions';
import { mockVendors } from '../../mockVendors.js';



export const MarketPage = ({ history }) => {
  const selectedMarketId = useSelector(state => state.selectedMarket);
  const markets = useSelector(state => state.markets);
  const dispatch = useDispatch();

  const marketInfo = markets.find(market => market.id === selectedMarketId);

  const handleSubmit = () => {
    history.push(`${selectedMarketId}/vendors`)
    dispatch(addVendors(mockVendors))
  }

  return (
    <section className='section-market-page-container'>
      <h2>{marketInfo.marketname}</h2>
      <h3>Address: </h3>
      <p>{marketInfo.Address}</p>
      <h3>Products: </h3>
      <p>{marketInfo.Products}</p>
      <h3>Schedule: </h3>
      <p>{marketInfo.Schedule}</p>
      <h3>Google Maps: </h3>
      <a href={marketInfo.GoogleLink}>Click Here For Directions</a>
      <button className='find-vendors-button'onClick={handleSubmit}>
        Find Vendors
      </button>
    </section>
  )
}

export default withRouter(MarketPage);
