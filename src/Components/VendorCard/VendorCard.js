
import React from 'react';
import './VendorCard.scss';
import { images } from "../../images/images"




export const VendorCard = ({ name, description, images }) => {


  return (
    <article className='vendor-card'>
        <h2 className='vendor-name'>{name}</h2>
      <h2 className='vendor-description'>{description}</h2>
      <img className='vendor-img'src={images.backgroundImage}></img>
    </article>
  )
}