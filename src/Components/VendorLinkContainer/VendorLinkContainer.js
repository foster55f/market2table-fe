import React, { useState } from 'react';
import './VendorLinkContainer.scss';
import VendorMarketList from '../../Containers/VendorMarketList/VendorMarketList';
import VendorMarketSearch from '../../Containers/VendorMarketSearch/VendorMarketSearch';

export const VendorLinkContainer = () => {

  const [marketsLinked, setMarketsLinked] = useState([]);

  return (
    <section className='vendor-link-section'>
      <VendorMarketList marketsLinked={marketsLinked} setMarketsLinked={setMarketsLinked}/>
      <VendorMarketSearch marketsLinked={marketsLinked} setMarketsLinked={setMarketsLinked}/>
    </section>
  )
}

export default VendorLinkContainer;
