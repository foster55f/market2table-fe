import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MarketListCard from '../MarketListCard/MarketListCard';
import './VendorMarketList.scss';
import { addSelectedVendor, addZipCode, addMarkets } from '../../actions';
import images from '../../images/images';
import { getMarketsByVendor } from '../../apiCalls';

export const VendorMarketList = ({ marketsLinked, setMarketsLinked }) => {
  const vendor = useSelector(state => state.selectedVendor);
  const dispatch = useDispatch();

  useEffect(() => {
    const vendorIdInt = parseInt(vendor.id);
    getMarketsByVendor(vendorIdInt)
    .then(data => {
      setMarketsLinked(data.data.vendor.markets)
    })
    .catch(error => console.log(error))
  }, []);

  let marketsLinkToDisplay
  if (marketsLinked.length) {
    marketsLinkToDisplay = marketsLinked.map(market => {
      return (<MarketListCard name={market.name} key={market.id} marketsLinked={marketsLinked}/>)
    });
  }

  return (
    <section className='vendor-market-list-section'>
      <header className='vendor-market-list-header'>
        <Link to='/vendor/account' className='link-back-to-vendors' onClick={() => {dispatch(addSelectedVendor({})); dispatch(addZipCode('')); dispatch(addMarkets([]))}}>
          <img src={images.undo} className='undo-image' alt='icon of reverse array' />
          <p className='back-to-vendors-p'>Back To Vendors</p>
        </Link>
        <h3 className='vendor-market-list-name'>{vendor.name}</h3>
        <h4 className='vendor-market-list-title'>Markets</h4>
      </header>
      <section className='vendor-market-list-container'>
        {marketsLinkToDisplay}
      </section>
    </section>
  )
}

export default VendorMarketList;
