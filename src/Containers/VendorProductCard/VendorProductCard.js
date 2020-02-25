import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './VendorProductCard.scss';

export const VendorProductCard = ({ products, setProducts, name, price, description, id }) => {

  const handleDelete = () => {
    const filteredProducts = products.filter(product => product.id !== id);
    setProducts(filteredProducts);
  }

  return (
    <article className='product-card-article'>
      <section className='product-card-section'>
        <p className='product-card-p'>{name}</p>
        <p className='product-card-p'>${price}</p>
      </section>
      <p className='product-card-description'>{description}</p>
      <button type='button' className='delete-product-button' onClick={handleDelete}>X</button>
    </article>
  )
}

export default VendorProductCard;

VendorProductCard.propTypes = {
  history: PropTypes.object,
  products: PropTypes.array,
  setProducts:PropTypes.func,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string
}
