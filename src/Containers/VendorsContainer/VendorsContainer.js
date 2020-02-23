import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './VendorsContainer.scss';
import { VendorCard } from '../../Components/VendorCard/VendorCard';
import { withRouter } from 'react-router-dom';



export const VendorsContainer = ({history}) => {
  const vendors = useSelector(state => state.vendors);
  const displayVendors = vendors.map(vendor => {
    return (
      <VendorCard
      id={vendor.id}
      name={vendor.name}
      description={vendor.description}
      image={vendor.image}
      history={history}
      />
    )
  });
    
  return (
    <div className='vendor-container'>
      {displayVendors}
    </div>
  )
}

export default withRouter(VendorsContainer);
