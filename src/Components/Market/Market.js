import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Market.scss';
import { addSelectedMarket } from '../../actions';

export const Market = ({ id, name, address, products, schedule }) => {
  const dispatch = useDispatch();

  return (
    <article onClick={() => dispatch(addSelectedMarket(id))} className='market-article'>
      <h1 className='market-article-title'>{name}</h1>
    </article>
  )
}
