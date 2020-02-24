import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';
import { addZipCode, addVendors, addSelectedMarket, addMarkets, addSelectedVendor } from '../../actions';


export const Header = ({history, path}) => {

const zipCode = useSelector(state => state.zipCode);
const selectedMarketId = useSelector(state => state.selectedMarket);
const vendors = useSelector(state => state.vendors);
const dispatch = useDispatch();

const handleBackToMarketInfo = () => {
  history.push(`/markets/${selectedMarketId}`);
  dispatch(addVendors([]));
}

const handleBacktoMarkets = () => {
  history.push('/markets');
}

let vendorHomeButton;
if (path.includes('account')) {
  vendorHomeButton = (
    <Link to='/' className='link-to-vendors'>
      <button className='vendor-login-button' onClick={() => dispatch(addVendors([]))}>Home</button>
    </Link>)
} else {
  vendorHomeButton = (
    <Link to='/vendor/account' className='link-to-vendors'>
      <button className='vendor-login-button' onClick={() => { dispatch(addVendors([])); dispatch(addZipCode('')); dispatch(addSelectedMarket('')); dispatch(addSelectedVendor({}));dispatch(addMarkets([]))}}>Vendor Login</button>
    </Link>)
}

let zipCodeButton;
if (path.includes('markets')) {
  zipCodeButton = (
    <button className='back-button' onClick={() => dispatch(addZipCode(''))}>Reset Zip Code</button>
  )
}

if (path.includes('markets') && selectedMarketId) {
  zipCodeButton = (
  <button className='back-button' onClick={() => {dispatch(addSelectedMarket('')); handleBacktoMarkets()}}>Back To Markets</button>
  )
}

if (path.includes('markets') && path.includes('vendors')) {
  zipCodeButton = (
    <button onClick={handleBackToMarketInfo} className='back-button'>Back to Market</button>
  )
}

let zipCodeButtonContainer;
if (path.includes('markets')) {
  zipCodeButtonContainer = (
    <>
      <p className='zip-code-par'>Zip Code: {zipCode}</p>
      {zipCodeButton}
    </>
  )
}

  return (
    <header className='main-header'>
      <section className='zip-code-section'>
        {zipCodeButtonContainer}
      </section>
      <h1 className='header-title'>Market 2 Table</h1>
      {vendorHomeButton}
    </header>
  )
}

export default withRouter(Header)
