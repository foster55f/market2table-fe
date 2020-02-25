import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MarketPage.scss';
import { addSelectedMarket, addVendors } from '../../actions';
import { mockVendors } from '../../mockVendors.js';
import { getVendorsByMarketId } from '../../apiCalls';



export const MarketPage = ({ history }) => {
  const selectedMarketId = useSelector(state => state.selectedMarket);
  const markets = useSelector(state => state.markets);
  const dispatch = useDispatch();

  const marketInfo = markets.find(market => market.id === selectedMarketId);

  const handleSubmit = () => {
    console.log(history)
    history.push(`${selectedMarketId}/vendors`)
    getVendorsByMarketId(selectedMarketId)
    .then(vendors => {
      dispatch(addVendors(vendors.data.market.vendors));
    })
    .catch(error => console.log(error))
  }

  return (
    <section className='section-market-page-container'>
      <h2>{marketInfo.name}</h2>
      <h3>Address: </h3>
      <p>{marketInfo.address}</p>
      <h3>Schedule: </h3>
      <p>{marketInfo.schedule}</p>
      <h3>Google Maps: </h3>
      <a href={marketInfo.google_link}>Click Here For Directions</a>
      <button className='find-vendors-button'onClick={handleSubmit}>
        Find Vendors
      </button>
    </section>
  )
}

export default withRouter(MarketPage);

MarketPage.propTypes = {
  history: PropTypes.object,
  selectedMarketId: PropTypes.string,
  markets: PropTypes.array
}
