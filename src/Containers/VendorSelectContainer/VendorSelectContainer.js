import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './VendorSelectContainer.scss';
import VendorSelectCard from '../VendorSelectCard/VendorSelectCard';
import { addVendors } from '../../actions';
import images from '../../images/images';
import { getAllVendors } from '../../apiCalls';

export const VendorSelectContainer = () => {

  const [vendorInput, setVendorInput] = useState('');
  const [searchError, setSearchError] = useState(false);
  const [vendors, setVendors] = useState([]);
  const allVendors = useSelector(state => state.vendors);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllVendors()
    .then(allVendors => {
      setVendors(allVendors.data.vendors);
      dispatch(addVendors(allVendors.data.vendors))
    })
    .catch(error => console.log(error))
  }, [])

let vendorSelectCards;
if (vendors.length) {
  vendorSelectCards = vendors.map(vendor => {
    return (<VendorSelectCard id={vendor.id} vendor={vendor} name={vendor.name} key={vendor.id}/>)
  });
}

  const searchInputHandler = event => {
    if (event.key === "Enter") {
      event.preventDefault()
      searchVendors(vendorInput);
      }
    }


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
          <input role='input' type='text' value={vendorInput} onKeyDown={event => searchInputHandler(event)} onChange={(event) => {setVendorInput(event.target.value); setSearchError(false)}} className='search-vendors-input' placeholder='Search Vendors...'/>
          <div className='search-vendors-button-container'>
            <button type='button' className='search-vendors-button' onClick={() => {searchVendors(vendorInput)}}>Search</button>
            <button type='button' className='search-vendors-button search-clear-button' onClick={() => {setVendors(allVendors); setVendorInput(''); setSearchError(false)}}>Clear</button>
          </div>
        </form>
        <div className="vendor-search-error-container">
          <p className="vendor-search-error" hidden={!searchError}>No matches for vendor name: {vendorInput}</p>
        </div>
        <section className='vendor-cards-section'>
          {vendorSelectCards}
        </section>
      </section>
      <Link to='/vendor/account/form' className='link-create-vendor-form'>
        <button className='create-vendor-button'><p className='vendor-button-p'>Create New Vendor</p><img className='plus-icon' src={images.plus} alt='plus sign icon'/></button>
      </Link>
    </div>
  )
}

export default VendorSelectContainer
