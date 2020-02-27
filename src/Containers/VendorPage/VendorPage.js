import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './VendorPage.scss';
import { addSelectedMarket, addVendors } from '../../actions';
import { images } from "../../images/images";

export const VendorPage = ({ history }) => {
  const { selectedVendor, selectedMarket } = useSelector(state => state);
  const products = selectedVendor.products.map(product => {
    return (
      <article className='product-article' key={product.id}>
        <p className='product-name'>{product.name}: ${product.price}</p>
        <p className='product-description'>{product.description}</p>
      </article>
    )
  })

  const handleBackToMarket = () => {
      history.push(`/markets/${selectedMarket}/vendors/`)
  }

  return (
    <section className='section-vendor-page-container'>
      <div className='vendor-info'>
        <h2 className='vendor-page-vendor-name'>{selectedVendor.name}</h2>
        <h3>Description: </h3>
          <p className='description'>{selectedVendor.description}</p>
        <img className='vendor-img-vendor-page' src={selectedVendor.image_link}></img>
          <h3 className='products'>Products: </h3>
            {products}
      </div>
      <button className='vendor-page-button' onClick={handleBackToMarket} >Back to Vendors Page</button>
    </section>
  )
}

export default withRouter(VendorPage);

VendorPage.propTypes = {
  history: PropTypes.object,
  selectedMarketId: PropTypes.string,
  selectedVendor: PropTypes.object
}
