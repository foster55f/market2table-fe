import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './VendorForm.scss';
import { addVendors } from '../../actions';
import images from '../../images/images';
import VendorProductContainer from '../VendorProductContainer/VendorProductContainer';

export const VendorForm = () => {

  return (
    <section className='vendor-form-main-section'>
      <header>
        <Link to='vendors/account' className='link-to-vendors'>
          <p>Back To Vendors</p>
        </Link>
        <h2 className='vendor-form-title'>Vendor Form</h2>
      </header>
      <form>
        <label for='vendor-name-input' className='vendor-name-label'>* Enter Vendor Name:</label>
        <input className='vendor-name-input' placeholder='Vendor Name...' id='vendor-name-input' />
        <label for='vendor-description-input' className='vendor-description-label'>*Enter Vendor Description</label>
        <input className='vendor-description-input' placeholder='Vender Description...' id='vendor-description-input' />
      </form>
      <VendorProductContainer />
      <button className='submit-vendor-info-button' type='button'>Create Vendor +</button>
    </section>
  )
}

export default VendorForm;
