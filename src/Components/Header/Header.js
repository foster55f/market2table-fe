import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';
import { addZipCode, addVendors, addSelectedMarket, addMarkets } from '../../actions';
import { mockVendors } from '../../mockVendors.js';

export const Header = ({ path }) => {

const zipCode = useSelector(state => state.zipCode);
const selectedMarketId = useSelector(state => state.selectedMarket);
const dispatch = useDispatch();

let vendorHomeButton;
if (path.includes('account')) {
  vendorHomeButton = (<Link to='/' className='link-to-vendors'>
    <button className='vendor-login-button' onClick={() => dispatch(addVendors([]))}>Home</button>
  </Link>)
} else {
  vendorHomeButton = (<Link to='/vendor/account' className='link-to-vendors'>
    <button className='vendor-login-button' onClick={() => {dispatch(addVendors(mockVendors)); dispatch(addZipCode('')); dispatch(addSelectedMarket({})); dispatch(addMarkets([]))}}>Vendor Login</button>
  </Link>)
}

  return (
    <header className='main-header'>
      <section className='zip-code-section'>
        {zipCode &&
        <>
        <p>Zip Code: {zipCode}</p>
        {!selectedMarketId && <button className='zip-code-reset-button' onClick={() => dispatch(addZipCode(''))}>Reset Zip Code</button>}
        </>}
      </section>
      <h1 className='header-title'>Market 2 Table</h1>
      {vendorHomeButton}
    </header>
  )
}

export default Header
