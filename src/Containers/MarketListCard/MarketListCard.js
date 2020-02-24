import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MarketListCard.scss';
// import { addVendors } from '../../actions';
import images from '../../images/images';
import { createMarketVendorLink } from '../../apiCalls';

export const MarketListCard = ({ vendorId, name, id }) => {

  const handleAddSubmit = () => {
    const vendorIdInt = parseInt(vendorId);
    const marketIdInt = parseInt(id);
    createMarketVendorLink(marketIdInt, vendorIdInt)
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

  return (
    <article className='market-list-card-article'>
      <h3 className='market-list-card-header'>{name}</h3>
      <button className='market-list-card-add-button' type='button' onClick={handleAddSubmit}>Add</button>
    </article>
  )
}

export default MarketListCard;
