import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MarketContainer.scss';
import { Market } from '../../Components/Market/Market';

export const MarketContainer = () => {

  const { markets } = useSelector(state => state);
  const displayMarkets = markets.map(market => {
    return (
      <Market
        key={market.id}
        id={market.id}
        name={market.name}
      />
    )
  });
  let display;
  if (markets.length) {
    display = displayMarkets;
  } else {
    display = (<p>LOADING....</p>);
  }
  return (
    <section className='section-market-container'>
      {display}
    </section>
  )
}

export default MarketContainer;

MarketContainer.propTypes = {
  markets: PropTypes.array,
}
