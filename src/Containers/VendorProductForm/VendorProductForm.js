import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './VendorProductForm.scss';

export const VendorProductForm = () => {

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [hasError, setHasError] = useState(false);

  return (
    <form className='vendor-product-form'>
      <section className='vendor-product-from-section'>
        <input value={productName} onChange={(event) => setProductName(event.target.value)} type='text' placeholder='Product Name...' className='product-name-input' maxlength='25'/>
        <input value={productPrice} onChange={(event) => setProductPrice(event.target.value)}type='number' placeholder='Price...' className='product-price-input'/>
      </section>
      <textarea value={productDescription} onChange={(event) => setProductDescription(event.target.value)}
        form='vendor-form-info' name='vendor-description-textarea'
        className='product-description-textarea' placeholder='Product Description...'
        rows='3' columns='25' maxlength='65'>
      </textarea>
      <button type='button' className='submit-new-product-button'>Create Product</button>
    </form>
  )
}

export default VendorProductForm;
