import React from 'react';
import './VendorCard.scss';
import { images } from "../../images/images"
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addSelectedVendor } from '../../actions';



export const VendorCard = ({ id, name, description, image, history }) => {
  const selectedMarketId = useSelector(state => state.selectedMarket);
  const vendors = useSelector(state => state.vendors);
  const vendorInfo = vendors.find(vendor => vendor.id === id);

  const dispatch = useDispatch()
  

  

  const handleVendorPage = () => {
    history.push(`/markets/${selectedMarketId}/vendors/${id}`)
    dispatch(addSelectedVendor(vendorInfo))
  }

  return (
    <article onClick={handleVendorPage}className='vendor-card'>
      <h2 className='vendor-name'>{name}</h2>
      <h2 className='vendor-description'>{description}</h2>
      <img className='vendor-img'src={image}></img>
    </article>
  )
}

export default withRouter(VendorCard);
