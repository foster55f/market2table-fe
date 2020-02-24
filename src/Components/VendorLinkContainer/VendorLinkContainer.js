import React from 'react';
import './VendorLinkContainer.scss';
import VendorMarketList from '../../Containers/VendorMarketList/VendorMarketList';
import VendorMarketSearch from '../../Containers/VendorMarketSearch/VendorMarketSearch';

export const VendorLinkContainer = () => {
  return (
    <section className='vendor-link-section'>
      <VendorMarketList />
      <VendorMarketSearch />
    </section>
  )
}

export default VendorLinkContainer;
