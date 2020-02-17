import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ZipCodeForm.scss';
import { addZipCode, addMarkets } from '../../actions';

export const ZipCodeForm = ({ path }) => {

  const [zipCode, setZipCode] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if(zipCode.length === 5) {
      fetch(process.env.REACT_APP_BACKEND_URL + `/v1/data.svc/zipSearch?zip=${zipCode}`)
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
      dispatch(addZipCode(zipCode));
      setZipCode('');
    }
  }

  let opacity = 0;
    if (path.includes('markets')) {
      opacity = .9;
    }

  return (
    <section className='zip-code-form-container' style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, ${opacity}), rgba(255, 255, 255, ${opacity}))` }}>
      <form className='zip-code-form'>
        <label className="zip-code-input-label" htmlFor="zipCode">
              Enter zip code to find farmer's markets near you:
        </label>
        <input onChange={(e) => setZipCode(e.target.value)} value={zipCode} className="zip-code-input" type="number" placeholder="Zip Code..." id="zipCode" name="zipCode"/>
        <Link to='/markets'>
          <button type='button' onClick={handleSubmit}>Find!</button>
        </Link>
      </form>
    </section>
  )
}

export default ZipCodeForm;
