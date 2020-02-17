import React from 'react';
import PropTypes from 'prop-types';
import './Market.scss';

export const Market = ({ id, name, address, products, schedule }) => {

  return (
    <article className='market-article'>
      <h1 className='market-article-title'>{name}</h1>
    </article>
  )
}
