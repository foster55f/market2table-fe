import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';

export const Header = () => {

  return (
    <header>
      <h1>Market 2 Table</h1>
    </header>
  )
}

export default Header
