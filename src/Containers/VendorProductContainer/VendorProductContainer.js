import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './VendorProductContainer.scss';
import VendorProductForm from '../VendorProductForm/VendorProductForm';
import VendorProductCard from '../VendorProductCard/VendorProductCard';

export const VendorProductContainer = ({ products, setProducts }) => {
  const vendor = useSelector(state => state.selectedVendor);

  if (vendor.products && !products.length) {
    setProducts(vendor.products);
  }

  let productCards;
  if (products.length) {
    productCards = products.map(product => {
      return (<VendorProductCard products={products} setProducts={setProducts} name={product.name} price={product.price} description={product.description} id={product.id}/>)
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
