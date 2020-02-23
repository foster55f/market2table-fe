import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './VendorForm.scss';
import { addVendors } from '../../actions';
import images from '../../images/images';
import VendorProductContainer from '../VendorProductContainer/VendorProductContainer';
import { createVendor } from '../../apiCalls';

export const VendorForm = () => {
  const [vendorName, setVendorName] = useState('');
  const [vendorDescription, setVendorDescription] = useState('');
  const [vendorImage, setVendorImage] = useState('');
  const [vendorProducts, setVendorProducts] = useState([]);

  return (
    <section className='vendor-form-main-section'>
      <header className='vendor-form-header'>
        <Link to='/vendor/account' className='link-back-to-vendors'>
          <img src={images.undo} className='undo-image' alt='icon of reverse array' />
          <p className='back-to-vendors-p'>Back To Vendors</p>
        </Link>
        <h2 className='vendor-form-title'>Vendor Form</h2>
        <div className='vendor-form-header-space'></div>
      </header>
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
      <VendorProductContainer products={vendorProducts} setProducts={setVendorProducts}/>
      <button className='submit-vendor-info-button' type='button'><p className='create-vendor-button-p'>Submit Vendor</p><img className='plus-icon-form' src={images.plus} alt='plus sign icon'/></button>
    </section>
  )
}

export default VendorForm;
