import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone'
import request from 'superagent';
import './VendorForm.scss';
import { addVendors } from '../../actions';
import images from '../../images/images';
import VendorProductContainer from '../VendorProductContainer/VendorProductContainer';
import { createVendor } from '../../apiCalls';

export const VendorForm = () => {
  const [vendorName, setVendorName] = useState('');
  const [vendorDescription, setVendorDescription] = useState('');
  const [vendorImage, setVendorImage] = useState('');
  const [vendorProducts, setVendorProducts] = useState([]);
  const CLOUDINARY_UPLOAD_PRESET = 'Farmer_Images';
  const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dlgdlli2u/image/upload';

  const handleImageUpload = (file) => {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        setVendorImage(response.body.secure_url);
      }
    });
  }

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length) {
      handleImageUpload(acceptedFiles[0]);
    }
  }, []);
  const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({accept: 'image/jpeg, image/png, image/jpg', disabled: vendorImage.length > 0, onDrop});

  let image;
  if (vendorImage.length > 0) {
    image = (
      <section className='uploaded-image-container'>
        <img src={vendorImage} alt='photo of farm' className='farmer-image' />
        <button type='button' className='delete-uploaded-image' onClick={() => setVendorImage('')}>X</button>
      </section>
    )
  } else {
    image = (
      <p>View uploaded image here</p>
    )
  }

  return (
    <section className='vendor-form-main-section'>
      <header className='vendor-form-header'>
        <Link to='/vendor/account' className='link-back-to-vendors'>
          <img src={images.undo} className='undo-image' alt='icon of reverse array' />
          <p className='back-to-vendors-p'>Back To Vendors</p>
        </Link>
        <h2 className='vendor-form-title'>Vendor Form</h2>
        <div className='vendor-form-header-space'></div>
      </header>
      <form className='vendor-form-info' id='vendor-form-info'>
        <div className='vendor-form-input-container'>
          <label for='vendor-name-input' className='vendor-name-label'>* Enter Vendor Name:</label>
          <input value={vendorName} onChange={(event) => setVendorName(event.target.value)}
            type='text' className='vendor-name-input' maxlength='35'
            placeholder='Vendor Name...' id='vendor-name-input' />
        </div>
        <div className='vendor-form-input-container'>
          <label for='vendor-description-textarea' className='vendor-description-label'>* Enter Vendor Description:</label>
          <textarea value={vendorDescription} onChange={(event) => setVendorDescription(event.target.value)}
            form='vendor-form-info' name='vendor-description-textarea'
            className='vendor-description-textarea' placeholder='Vender Description...'
            id='vendor-description-textarea' rows='6' columns='25' maxlength='150'>
          </textarea>
        </div>
        <div className='image-uploader-container'>
          <div {...getRootProps()} className='image-dropper'>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <section className='image-dropper-section' style={{backgroundColor: '#EBEEE6'}}>
                  <p className='image-dropper-text'>Drop the file here</p>
                  <img src={images.addImage} className='plus-image-dropper'/>
                  <p className='image-dropper-text'>.jpg, .jpeg, .png only</p>
                </section> :
                <section className='image-dropper-section'>
                  <p className='image-dropper-text'>Drag & drop file here, or click to select file</p>
                  <img src={images.addImage} className='plus-image-dropper'/>
                  <p className='image-dropper-text'>.jpg - .jpeg - .png only</p>
                </section>
            }
          </div>
          <div className='farmer-image-container'>
            {image}
          </div>
        </div>
      </form>
      <VendorProductContainer products={vendorProducts} setProducts={setVendorProducts}/>
      <button className='submit-vendor-info-button' type='button'><p className='create-vendor-button-p'>Submit Vendor</p><img className='plus-icon-form' src={images.plus} alt='plus sign icon'/></button>
    </section>
  )
}

export default VendorForm;
