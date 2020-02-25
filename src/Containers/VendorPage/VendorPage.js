import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './VendorPage.scss';
import { addSelectedMarket, addVendors } from '../../actions';
import { images } from "../../images/images";

export const VendorPage = () => {
  const { selectedVendor, vendors } = useSelector(state => state);
  const products = selectedVendor.products.map(product => {
    return (
      <article className='product-article' key={product.id}>
        <p>{product.name}: ${product.price}</p>
        <p>{product.description}</p>
      </article>
    )
  })

  return (
    <section className='section-market-page-container'>
      <div>
        <h2 className='vendor-page-vendor-name'>{selectedVendor.name}</h2>
        <h3>Description: </h3>
          <p>{selectedVendor.description}</p>
        <img className='vendor-img-vendor-page' src={selectedVendor.image_link}></img>
          <h3>Products: </h3>
            {products}
      </div>
    </section>
  )
}

export default VendorPage;
