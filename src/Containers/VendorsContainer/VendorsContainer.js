import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './VendorsContainer.scss';
import { VendorCard } from '../../Components/VendorCard/VendorCard';


export const VendorsContainer = () => {
  const vendors= useSelector(state => state.vendors);
    
  return (
    <div className='vendor-container'>
    {vendors.map(vendor => {
      return (
        <VendorCard
            name={vendor.name}
            description={vendor.description}
            image={vendor.image}
        />
      )
    })}
  </div>
  )
}

export default VendorsContainer;