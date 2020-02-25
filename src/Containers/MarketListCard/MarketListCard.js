import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MarketListCard.scss';
import images from '../../images/images';
import { createMarketVendorLink, deleteMarketVendorLink, getAllMarketVendors } from '../../apiCalls';

export const MarketListCard = ({ vendorId, name, id, marketsLinked, setMarketsLinked, vendorDescription }) => {

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

  const handleDeleteSubmit = () => {
    const marketIdInt = parseInt(id);
    getAllMarketVendors()
    .then(data => {
      const filteredLinks = data.data.market_vendors.filter(link => {
        return (link.market.id === id && link.vendor.id === vendorId);
      });
      const deleteId = parseInt(filteredLinks[0].id);
      deleteMarketVendorLink(deleteId)
        .then(data => {
          console.log(data);
          const filteredMarkets = marketsLinked.filter(market => market.id !== id);
          setMarketsLinked(filteredMarkets);
        })
        .catch(error => console.log(error))
    })
  }

  let actionButton = (<button className='market-list-card-remove-button' type='button' onClick={handleDeleteSubmit}>Remove</button>)
  if (vendorDescription) {
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
