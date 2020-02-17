import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ZipCodeForm.scss';
import { addZipCode } from '../../actions';

export const ZipCodeForm = () => {

  const [zipCode, setZipCode] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addZipCode(zipCode))
  }

  return (
    <section className='zip-code-form-container'>
      <form className='zip-code-form'>
        <label className="zip-code-input-label" htmlFor="zipCode">
              Enter zip code to find farmer's markets near you:
        </label>
        <input onChange={(e) => setZipCode(e.target.value)} value={zipCode} className="zip-code-input" type="number" placeholder="Zip Code..." id="zipCode" name="zipCode"/>
        <button type='button' onClick={handleSubmit}>Find!</button>
      </form>
    </section>
  )
}

export default ZipCodeForm;
