import React from 'react';
import PropTypes from 'prop-types';
import './VendorProductContainer.scss';
import VendorProductForm from '../VendorProductForm/VendorProductForm';
import VendorProductCard from '../VendorProductCard/VendorProductCard';

export const VendorProductContainer = ({ products, setProducts }) => {

  let productCards;
  if (products.length) {
    productCards = products.map(product => {
      return (<VendorProductCard name={product.name} price={product.price} description={product.description}/>)
    });
  } else {
    productCards = (<p>You do not have any products on your account!</p>)
  }

  return (
    <section className='vendor-product-form-section'>
      <h2 className='vendor-product-form-title'>Add Vendor Product</h2>
      <VendorProductForm products={products} setProducts={setProducts}/>
      <section className='product-cards-container'>
        {productCards}
      </section>
    </section>
  )
}

export default VendorProductContainer;
