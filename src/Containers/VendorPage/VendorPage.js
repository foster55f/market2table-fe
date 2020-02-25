import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './VendorPage.scss';
import { addSelectedMarket, addVendors } from '../../actions';
import { mockVendors } from '../../mockVendors.js';
import { images } from "../../images/images"




export const VendorPage = ({history}) => {
  const selectedVendor = useSelector(state => state.selectedVendor);
  const selectedMarketId = useSelector(state => state.selectedMarket);
  const products = selectedVendor.products.map(product => {
    return (
      <article className='product-article'>
        <p>{product.name}: ${product.price}</p>
        <p>{product.description}</p>
      </article>
    )
  })

  const handleBackToMarket = () => {
    history.push(`/markets/${selectedMarketId}/vendors/`)
  }

  return (
    <section className='section-market-page-container'>
      <button className='vendor-page-button'onClick={handleBackToMarket}>Back to Market Page</button>
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

export default withRouter(VendorPage);