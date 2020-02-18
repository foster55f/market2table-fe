import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Market.scss';
import { addSelectedMarket } from '../../actions';

export const Market = ({ id, name, address, products, schedule }) => {
  const dispatch = useDispatch();

  return (
    <Link to={`/markets/${id}`}className='market-selected-link'>
      <article onClick={() => dispatch(addSelectedMarket(id))} className='market-article'>
        <h1 className='market-article-title'>{name}</h1>
      </article>
    </Link>
  )
}

export default Market;
