import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ZipCodeForm.scss';

export const ZipCodeForm = () => {

  return (
    <form>
      <p>Enter Zip Code Here:</p>
    </form>
  )
}

export default ZipCodeForm;
