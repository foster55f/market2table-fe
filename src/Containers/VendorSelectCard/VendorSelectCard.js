import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './VendorSelectCard.scss';

export const VendorSelectCard = ({ name }) => {

  return (
    <article className='vendor-select-article'>
      <h2 className='vendor-article-header'>{name}</h2>
      <section className='vendor-article-button-container'>
        <button className='vendor-article-markets-button'>Link to Markets</button>
        <button className='vendor-article-edit-button'>Edit</button>
      </section>
    </article>
  )
}

export default VendorSelectCard;
