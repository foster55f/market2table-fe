import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './VendorProductContainer.scss';

export const VendorProductContainer = () => {

  return (
    <section className='vendor-product-form-section'>
      <h2 className='vendor-product-form-title'>Add Vendor Product</h2>
    </section>
  )
}

export default VendorProductContainer;
