import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';
import { addZipCode } from '../../actions';
import { mockVendors } from '../../mockVendors.js';

export const Header = () => {

const zipCode = useSelector(state => state.zipCode);
const selectedMarketId = useSelector(state => state.selectedMarket);
const vendors = useSelector(state => state.vendors);
  
const dispatch = useDispatch();

  return (
    <header className='main-header'>
      <section className='zip-code-section'>
        {zipCode && 
        <>
        <p>Zip Code: {zipCode}</p>
        {!selectedMarketId && <button className='zip-code-reset-button' onClick={() => dispatch(addZipCode(''))}>Reset Zip Code</button>}
          </>}
        {vendors &&
          <button className='vendor-page-button'>Back to Market Detail</button>
        }
      </section>
      <h1 className='header-title'>Market 2 Table</h1>
      <button className='vendor-login-button'>Vendor Login</button>
    </header>
  )
}

export default Header
