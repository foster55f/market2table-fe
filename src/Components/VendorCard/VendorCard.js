import React from 'react';
import './VendorCard.scss';
import { images } from "../../images/images"
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addSelectedVendor } from '../../actions';



export const VendorCard = ({ id, name, description, image, history }) => {
  const selectedMarketId = useSelector(state => state.selectedMarket);
  const dispatch = useDispatch()
  

  

  const handleVendorPage = () => {
    history.push(`/markets/${selectedMarketId}/vendors/${id}`)
    dispatch(addSelectedVendor(id))
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
