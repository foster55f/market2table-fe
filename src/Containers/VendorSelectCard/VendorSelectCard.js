import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './VendorSelectCard.scss';
import { addSelectedVendor } from '../../actions';

export const VendorSelectCard = ({ name, vendor }) => {

  const dispatch = useDispatch();

  return (
    <article className='vendor-select-article'>
      <h2 className='vendor-article-header'>{name}</h2>
      <section className='vendor-article-button-container'>
        <button className='vendor-article-markets-button'>Link to Markets</button>
        <Link to='/vendor/account/form' className='link-edit-vendor-form'>
          <button className='vendor-article-edit-button' onClick={() => dispatch(addSelectedVendor(vendor))}>Edit</button>
        </Link>
      </section>
    </article>
  )
}

export default VendorSelectCard;
