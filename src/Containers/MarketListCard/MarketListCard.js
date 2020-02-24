import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MarketListCard.scss';
// import { addVendors } from '../../actions';
import images from '../../images/images';
import { createMarketVendorLink } from '../../apiCalls';

export const MarketListCard = ({ vendorId, name, id, marketsLinked, setMarketsLinked }) => {

  const handleAddSubmit = () => {
    const vendorIdInt = parseInt(vendorId);
    const marketIdInt = parseInt(id);
    createMarketVendorLink(marketIdInt, vendorIdInt)
      .then(data => {
        const marketLinked = {id, name};
        setMarketsLinked([...marketsLinked, marketLinked])
      })
      .catch(error => console.log(error))
  }

  let actionButton = (<button className='market-list-card-remove-button' type='button'>Remove</button>)
  if (vendorId) {
    actionButton = (<button className='market-list-card-add-button' type='button' onClick={handleAddSubmit}>Add</button>)
  }

  return (
    <article className='market-list-card-article'>
      <h3 className='market-list-card-header'>{name}</h3>
      {actionButton}
    </article>
  )
}

export default MarketListCard;
