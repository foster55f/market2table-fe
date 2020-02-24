import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MarketListCard from '../MarketListCard/MarketListCard';
import './VendorMarketSearch.scss';
import { getMarketsByZip } from '../../apiCalls';
import { addZipCode, addMarkets } from '../../actions';
// import images from '../../images/images';

export const VendorMarketSearch = () => {
  const [hasError, setHasError] = useState(false);
  const [zipCodeInput, setZipCodeInput] = useState('');
  const zipCode = useSelector(state => state.zipCode);

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
    }
  }
  let zipCodeText = 'Please enter zip code';
  if (zipCode.length === 5) {
    zipCodeText = zipCode;
  }

  return (
    <section className='vendor-market-search-section'>
      <h3 className='vendor-market-search-title'>Search For Markets</h3>
      <form className='vendor-market-search-form'>
        <div className='vendor-market-search-label-container'>
          <p className='vendor-market-search-par'>Zip Code: {zipCodeText}</p>
        </div>
        <div className='vendor-market-search-container'>
          <input value={zipCodeInput} onChange={(event) => setZipCodeInput(event.target.value)} className='vendor-market-input' type='text' type="number" placeholder="zip code..." id="zipCode" name="zipCode" />
          <button onClick={handleZipCodeSubmit} className='vendor-market-search-button' type='button'>Find!</button>
          <div className='error-message-search-container'>
            <p hidden={!hasError} className='error-message'>Error: Please enter a 5 digit zip code</p>
          </div>
        </div>
      </form>
      <section>
        <MarketListCard />
      </section>
    </section>
  )
}

export default VendorMarketSearch;
