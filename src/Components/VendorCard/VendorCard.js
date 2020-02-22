
import React from 'react';
import './VendorCard.scss';
import { images } from "../../images/images"
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';






export const VendorCard = ({ name, description, image, history }) => {
const selectedMarketId = useSelector(state => state.selectedMarket);

  

  const handleVendorPage = () => {
    history.push(`/markets/${selectedMarketId}/vendors/`)
  }

  return (
    <article onClick={handleVendorPage}className='vendor-card'>
        <h2 className='vendor-name'>{name}</h2>
      <h2 className='vendor-description'>{description}</h2>
      <img className='vendor-img'src={images.backgroundImage}></img>
    </article>
  )
}

export default withRouter(VendorCard);
