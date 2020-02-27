import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './VendorSelectCard.scss';
import { addSelectedVendor } from '../../actions';

export const VendorSelectCard = ({ id, name, vendor }) => {

  const dispatch = useDispatch();

  return (
    <article className='vendor-select-article'>
      <h2 className='vendor-article-header'>{name}</h2>
      <section className='vendor-article-button-container'>
        <Link to={`/vendor/account/link/${id}`} className='link-market-vendor-link'>
          <button className='vendor-article-markets-button' onClick={() => dispatch(addSelectedVendor(vendor))}>Link to Markets</button>
        </Link>
        <Link to='/vendor/account/form' className='link-edit-vendor-form'>
          <button id ='edit' className='vendor-article-edit-button' onClick={() => dispatch(addSelectedVendor(vendor))}>Edit</button>
        </Link>
      </section>
    </article>
  )
}

export default VendorSelectCard;
