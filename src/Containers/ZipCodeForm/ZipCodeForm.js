import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ZipCodeForm.scss';
import { addZipCode, addMarkets } from '../../actions';
import { getMarketsByZip } from '../../apiCalls';

export const ZipCodeForm = ({ path }) => {

  const [zipCodeInput, setzipCodeInput] = useState('');
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const zipCode = useSelector(state => state.zipCode);

  const handleSubmit = () => {
    if (zipCodeInput.length === 5) {
      getMarketsByZip(zipCodeInput)
        .then(markets => {
          dispatch(addMarkets(markets));
        })
      .catch(error => console.log(error))
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

  const zipInputHandler = event => {
    if (event.key === "Enter") {
      event.preventDefault()
      handleSubmit()
      }
    }

  if (zipCode > 0) {
    return (
      <Redirect to='/markets' />
    )
  }
  return (
    <section className='zip-code-form-container' style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, ${opacity}), rgba(255, 255, 255, ${opacity}))` }}>
      <form className='zip-code-form'>
        <label className='zip-code-input-label' htmlFor='zipCode'>
          Enter a zip code to find farmer's markets near you:
        </label>
        <input onChange={(e) => handleChange(e.target.value)} onKeyDown={event => zipInputHandler(event)} value={zipCodeInput} className="zip-code-input" type="number" placeholder="insert zip code" id="zipCode" name="zipCode" />
        <div className='error-message-container'>
          <p hidden={!hasError} className='error-message'>Error: Please enter a 5 digit zip code</p>
        </div>
        <button type='button' onClick={handleSubmit} className='submit-zip-code-button'>Find!</button>
      </form>
    </section>
  )
}

export default ZipCodeForm;
