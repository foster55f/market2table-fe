import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MarketListCard.scss';
// import { addVendors } from '../../actions';
import images from '../../images/images';
// import { getAllVendors } from '../../apiCalls';

export const MarketListCard = ({ name, id }) => {

  return (
    <article className='market-list-card-article'>
      <h3 className='market-list-card-header'>{name}</h3>
      <button className='market-list-card-add-button'>Add</button>
    </article>
  )
}

export default MarketListCard;
