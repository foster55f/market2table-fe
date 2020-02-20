import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './VendorSelectContainer.scss';
import VendorSelectCard from '../VendorSelectCard/VendorSelectCard';
import { addVendors } from '../../actions';

export const VendorSelectContainer = () => {

  const [vendorInput, setVendorInput] = useState('');
  const [searchError, setSearchError] = useState(false);
  const [vendors, setVendors] = useState([]);
  const allVendors = useSelector(state => state.vendors);
  const dispatch = useDispatch();

  useEffect(() => {
    setVendors(allVendors)
  }, [])

    const vendorSelectCards = vendors.map(vendor => {
      return (<VendorSelectCard name={vendor.name} key={vendor.name}/>)
    });


  const searchVendors = vendorInput => {
    const filteredVendors = allVendors.filter(vendor => {
      const vendorInputLowerCase = vendorInput.toLowerCase();
      const vendorNameLowerCase = vendor.name.toLowerCase();
      const splitName = vendorNameLowerCase.split(' ');
      return splitName.includes(vendorInputLowerCase);
    });
    if (filteredVendors.length) {
      setVendors(filteredVendors);
    } else {
      setSearchError(true);
    }
  }

  return (
    <div className='vendor-select-container'>
      <section className='vendor-list-section'>
        <h2 className='vendor-select-header'>Vendors</h2>
        <form className='search-vendors-form'>
          <input type='text' value={vendorInput} onChange={(e) => {setVendorInput(e.target.value)}} className='search-vendors-input' placeholder='Search Vendors...'/>
          <div className='search-vendors-button-container'>
            <button type='button' className='search-vendors-button' onClick={() => {searchVendors(vendorInput); setVendorInput('')}}>Search</button>
            <button type='button' className='search-vendors-button' onClick={() => {setVendors(allVendors); setVendorInput(''); setSearchError(false)}}>Clear</button>
          </div>
        </form>
        <div className="vendor-search-error-container">
          <p className="vendor-search-error" hidden={!searchError}>No matches for vendor name: {vendorInput}</p>
        </div>
        <section className='vendor-cards-section'>
          {vendorSelectCards}
        </section>
      </section>
      <button className='create-vendor-button'>Create New Vendor</button>
    </div>
  )
}

export default VendorSelectContainer
