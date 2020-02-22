import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './VendorsContainer.scss';
import { VendorCard } from '../../Components/VendorCard/VendorCard';


export const VendorsContainer = () => {
  const vendors = useSelector(state => state.vendors);
  const displayVendors = vendors.map(vendor => {
    return (
      <VendorCard
      name={vendor.name}
      description={vendor.description}
      image={vendor.image}
      />
    )
  });
    
  return (
    <div className='vendor-container'>
      {displayVendors}
    </div>
  )
}

export default VendorsContainer;