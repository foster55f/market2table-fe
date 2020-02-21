import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './VendorProductCard.scss';

export const VendorProductCard = ({ name, price, description }) => {

  return (
    <article className='product-card-article'>
      <section className='product-card-section'>
        <p className='product-card-p'>{name}</p>
        <p className='product-card-p'>${price}</p>
      </section>
      <p className='product-card-p'>{description}</p>
    </article>
  )
}

export default VendorProductCard;
