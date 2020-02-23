import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './VendorPage.scss';
import { addSelectedMarket, addVendors } from '../../actions';
import { mockVendors } from '../../mockVendors.js';
import { images } from "../../images/images"




export const VendorPage = () => {
  const selectedVendorId = useSelector(state => state.selectedVendor);
  const vendors = useSelector(state => state.vendors);
  const vendorInfo = vendors.find(vendor => vendor.id === selectedVendorId);


  return (
    <section className='section-market-page-container'>
      <h2>{vendorInfo.name}</h2>
      <h3>Description: </h3>
      <p>{vendorInfo.description}</p>
      <img className='vendor-img'src={images.backgroundImage}></img>
    </section>
  )
}

export default VendorPage;