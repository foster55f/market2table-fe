import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './VendorForm.scss';
import { addVendors } from '../../actions';
import images from '../../images/images';
import VendorProductContainer from '../VendorProductContainer/VendorProductContainer';

export const VendorForm = () => {
  const [vendorName, setVendorName] = useState('');
  const [vendorDescription, setVendorDescription] = useState('');
  const [vendorImage, setVendorImage] = useState('');
  const [vendorProdocts, setVendorProducts] = useState([]);


  return (
    <section className='vendor-form-main-section'>
      <header className='vendor-form-header'>
        <Link to='/vendor/account' className='link-back-to-vendors'>
          <p>Back To Vendors</p>
        </Link>
        <h2 className='vendor-form-title'>Vendor Form</h2>
        <div className='vendor-form-header-space'></div>
      </header>
      <div className='vendor-form-line'></div>
      <form className='vendor-form-info' id='vendor-form-info'>
        <div className='vendor-form-input-container'>
          <label for='vendor-name-input' className='vendor-name-label'>* Enter Vendor Name:</label>
          <input value={vendorName} onChange={(event) => setVendorName(event.target.value)}
            type='text' className='vendor-name-input' maxlength='35'
            placeholder='Vendor Name...' id='vendor-name-input' />
        </div>
        <div className='vendor-form-input-container'>
          <label for='vendor-description-textarea' className='vendor-description-label'>* Enter Vendor Description:</label>
          <textarea value={vendorDescription} onChange={(event) => setVendorDescription(event.target.value)}
            form='vendor-form-info' name='vendor-description-textarea'
            className='vendor-description-textarea' placeholder='Vender Description...'
            id='vendor-description-textarea' rows='6' columns='25' maxlength='150'>
          </textarea>
        </div>
        <div className='image-uploader-container'>
        </div>
      </form>
      <VendorProductContainer />
      <button className='submit-vendor-info-button' type='button'>Create Vendor +</button>
    </section>
  )
}

export default VendorForm;