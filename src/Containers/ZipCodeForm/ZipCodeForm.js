import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ZipCodeForm.scss';
import { addZipCode, addMarkets } from '../../actions';

export const ZipCodeForm = ({ path }) => {

  const [zipCodeInput, setzipCodeInput] = useState('');
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const zipCode = useSelector(state => state.zipCode);

  const handleSubmit = () => {
    if(zipCodeInput.length === 5) {
      fetch(process.env.REACT_APP_BACKEND_URL + `/v1/data.svc/zipSearch?zip=${zipCodeInput}`)
        .then(res => res.json())
        .then(markets => {
          let marketPromises = markets.results.map(market => {
            return fetch(process.env.REACT_APP_BACKEND_URL + `/v1/data.svc/mktDetail?id=${market.id}`)
              .then(res =>  res.json())
              .then(marketInfo => {
                let marketNameSplit = market.marketname.split(' ');
                if (marketNameSplit[0].includes('.')) {
                  marketNameSplit.shift();
                  marketNameSplit = marketNameSplit.join(' ');
                }
                const split1 = marketInfo.marketdetails.GoogleLink.split('=').pop();
                const split2 = split1.split('%');
                const lat = split2[0];
                const long = split2[2].slice(2);
                return {
                id: market.id,
                favorite: false,
                marketname: marketNameSplit,
                Address: marketInfo.marketdetails.Address,
                GoogleLink: marketInfo.marketdetails.GoogleLink,
                Products: marketInfo.marketdetails.Products,
                Schedule: marketInfo.marketdetails.Schedule,
                latitude: lat,
                longitude: long
                }
              })
              .catch(err => console.log(err))
          });
          return Promise.all(marketPromises);
        })
        .then(markets => {
          dispatch(addMarkets(markets));
        });
      dispatch(addZipCode(zipCodeInput));
      setzipCodeInput('');
    } else {
      setHasError(true);
      setzipCodeInput('');
    }
  }

  let opacity = 0;
    if (path.includes('markets')) {
      opacity = .9;
    }

  const handleChange = (value) => {
    if (value.length > 5) {
      value = value.slice(0, 5);
    }
    setzipCodeInput(value);
    setHasError(false);
  }

  if (zipCode > 0) {
    return (
      <Redirect to='/markets' />
    )
  }
  return (
    <section className='zip-code-form-container' style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, ${opacity}), rgba(255, 255, 255, ${opacity}))` }}>
      <form className='zip-code-form'>
        <label className="zip-code-input-label" htmlFor="zipCode">
          Enter a zip code to find farmer's markets near you:
        </label>
        <input onChange={(e) => handleChange(e.target.value)} value={zipCodeInput} className="zip-code-input" type="number" placeholder="zip code..." id="zipCode" name="zipCode" />
        <div className='error-message-container'>
          <p hidden={!hasError} className='error-message'>Error: Please enter a 5 digit zip code</p>
        </div>
        <button type='button' onClick={handleSubmit} className='submit-zip-code-button'>Find!</button>
      </form>
    </section>
  )
}

export default ZipCodeForm;
