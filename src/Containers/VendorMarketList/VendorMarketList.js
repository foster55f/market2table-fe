import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MarketListCard from '../MarketListCard/MarketListCard';
import './VendorMarketList.scss';
import { addSelectedVendor } from '../../actions';
import images from '../../images/images';
// import { getAllVendors } from '../../apiCalls';

export const VendorMarketList = () => {
  const vendor = useSelector(state => state.selectedVendor);
  const dispatch = useDispatch();

  return (
    <section className='vendor-market-list-section'>
      <header className='vendor-market-list-header'>
        <Link to='/vendor/account' className='link-back-to-vendors' onClick={() => dispatch(addSelectedVendor({}))}>
          <img src={images.undo} className='undo-image' alt='icon of reverse array' />
          <p className='back-to-vendors-p'>Back To Vendors</p>
        </Link>
        <h3 className='vendor-market-list-name'>{vendor.name}</h3>
        <h4 className='vendor-market-list-title'>Markets</h4>
      </header>
      <section className='vendor-market-list-container'>
        <MarketListCard />
      </section>
    </section>
  )
}

export default VendorMarketList;
