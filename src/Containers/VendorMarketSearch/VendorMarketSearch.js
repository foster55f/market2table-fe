import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MarketListCard from '../MarketListCard/MarketListCard';
import './VendorMarketSearch.scss';
import { getMarketsByZip } from '../../apiCalls';
import { addZipCode, addMarkets } from '../../actions';

export const VendorMarketSearch = () => {
  const [hasError, setHasError] = useState(false);
  const [zipCodeInput, setZipCodeInput] = useState('');
  const zipCode = useSelector(state => state.zipCode);
  const markets = useSelector(state => state.markets);
  const dispatch = useDispatch();

  const handleZipCodeSubmit = () => {
    if (zipCodeInput.length === 5) {
      getMarketsByZip(zipCodeInput)
        .then(markets => {
          dispatch(addMarkets(markets));
        })
      .catch(error => console.log(error))
      zipCodeText = zipCodeInput;
      dispatch(addZipCode(zipCodeInput));
      setZipCodeInput('');
    } else {
      setHasError(true);
      setZipCodeInput('');
    }
  }

  let zipCodeText = 'Please enter zip code';
  if (zipCode.length === 5) {
    zipCodeText = zipCode;
  }


  let marketsToDisplay = (<p>Please select a zip code to display markets</p>);
  if (markets.length) {
    marketsToDisplay = markets.map(market => {
      return (
        <MarketListCard name={market.name} id={market.id} key={market.id} />
      )
    });
  }

  return (
    <section className='vendor-market-search-section'>
      <h3 className='vendor-market-search-title'>Search For Markets</h3>
      <form className='vendor-market-search-form'>
        <p className='vendor-market-search-par'>Zip Code: {zipCodeText}</p>
        <div className='vendor-market-search-container'>
          <input value={zipCodeInput} onChange={(event) => {setZipCodeInput(event.target.value); setHasError(false)}} className='vendor-market-input' type='text' type="number" placeholder="zip code..." id="zipCode" name="zipCode" />
          <button onClick={handleZipCodeSubmit} className='vendor-market-search-button' type='button'>Find!</button>
          <div className='error-message-search-container'>
            <p hidden={!hasError} className='error-message'>Error: Please enter a 5 digit zip code</p>
          </div>
        </div>
      </form>
      <section className='vendor-market-list-container'>
        {marketsToDisplay}
      </section>
    </section>
  )
}

export default VendorMarketSearch;
