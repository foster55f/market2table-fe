import React from 'react';
import './VendorCard.scss';
import { images } from "../../images/images"
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addSelectedVendor } from '../../actions';
import PropTypes from 'prop-types';




export const VendorCard = ({ id, name, description, image, history }) => {
  const {selectedMarket, vendors} = useSelector(state => state);
  const vendorInfo = vendors.find(vendor => vendor.id === id);

  const dispatch = useDispatch()

  const handleVendorPage = () => {
    history.push(`/markets/${selectedMarket}/vendors/${id}`)
    dispatch(addSelectedVendor(vendorInfo))
  }

  return (
    <article onClick={handleVendorPage} className='vendor-card'>
      <h2 className='vendor-name'>{name}</h2>
      <h2 className='vendor-description'>{description}</h2>
      <img className='vendor-img'src={image}></img>
    </article>
  )
}

export default withRouter(VendorCard);

VendorCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  history: PropTypes.object
}
