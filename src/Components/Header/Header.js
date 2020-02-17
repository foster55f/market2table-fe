import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';

export const Header = () => {

  return (
    <header className='main-header'>
      <button className='zip-code-button'>Zip Code: </button>
      <h1 className='header-title'>Market 2 Table</h1>
      <button className='vendor-login-button'>Vendor Login</button>
    </header>
  )
}

export default Header
