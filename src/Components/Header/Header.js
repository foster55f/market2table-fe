import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';
import { mockVendors } from '../../mockVendors.js';
import { addZipCode, addVendors, addSelectedMarket, addMarkets } from '../../actions';


export const Header = ({history, path}) => {

const zipCode = useSelector(state => state.zipCode);
const selectedMarketId = useSelector(state => state.selectedMarket);
const vendors = useSelector(state => state.vendors);
  
  const dispatch = useDispatch();
  
  const handleSubmit = () => {
    history.push(`/markets/${selectedMarketId}`)
    dispatch(addVendors([]))
  }

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
        {vendors.length > 0 &&
          <button onClick={handleSubmit}className='vendor-back-button'>Back to Market Detail</button>
        }
      </section>
      <h1 className='header-title'>Market 2 Table</h1>
      {vendorHomeButton}
    </header>
  )
}

export default withRouter(Header)
