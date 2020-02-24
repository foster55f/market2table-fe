import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone'
import request from 'superagent';
import './VendorForm.scss';
import { addVendors, addSelectedVendor } from '../../actions';
import images from '../../images/images';
import VendorProductContainer from '../VendorProductContainer/VendorProductContainer';
import { createVendor, createProduct } from '../../apiCalls';

export const VendorForm = () => {
  const [vendorName, setVendorName] = useState('');
  const [vendorDescription, setVendorDescription] = useState('');
  const [vendorImage, setVendorImage] = useState('');
  const [vendorProducts, setVendorProducts] = useState([]);
  const [hasError, setHasError] = useState(false);
  const CLOUDINARY_UPLOAD_PRESET = 'Farmer_Images';
  const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dlgdlli2u/image/upload';
  const vendor = useSelector(state => state.selectedVendor);
  const dispatch = useDispatch();


  useEffect(() => {
    if (vendor.name) {
      setVendorName(vendor.name);
      setVendorDescription(vendor.description);
      setVendorImage(vendor.image_link);
    }
  }, []);

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
      setHasError(false);
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

  const handleSubmitForm = () => {
    if (vendorName.length > 0 && vendorDescription.length > 0) {
      createVendor(vendorName, vendorDescription, vendorImage)
      .then(vendor => {
        if (vendorProducts.length) {
          vendorProducts.forEach(product => {
            createProduct(product.name, product.description, product.price, vendor.data.addVendor.id)
              .then(data => {
                return (<Redirect to='/vendor/account'/>)
              })
              .catch(error => console.log(error))
          });
        }

      })
      .catch(error => console.log(error));
      setVendorName('');
      setVendorDescription('');
      setVendorImage('');
      setVendorProducts([]);
    } else {
      setHasError(true);
    }
  }

  return (
    <section className='vendor-form-main-section'>
      <header className='vendor-form-header'>
        <Link to='/vendor/account' className='link-back-to-vendors' onClick={() => dispatch(addSelectedVendor({}))}>
          <img src={images.undo} className='undo-image' alt='icon of reverse array' />
          <p className='back-to-vendors-p'>Back To Vendors</p>
        </Link>
        <h2 className='vendor-form-title'>Vendor Form</h2>
        <div className='vendor-form-header-space'></div>
      </header>
      <form className='vendor-form-info' id='vendor-form-info'>
        <div className='vendor-form-input-container'>
          <label for='vendor-name-input' className='vendor-name-label'>* Enter Vendor Name:</label>
          <input value={vendorName} onChange={(event) => {setVendorName(event.target.value); setHasError(false);}}
            type='text' className='vendor-name-input' maxlength='35'
            placeholder='Vendor Name...' id='vendor-name-input' />
        </div>
        <div className='vendor-form-input-container'>
          <label for='vendor-description-textarea' className='vendor-description-label'>* Enter Vendor Description:</label>
          <textarea value={vendorDescription} onChange={(event) => {setVendorDescription(event.target.value); setHasError(false);}}
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
                  <p className='image-dropper-text'>Drag & drop, or click to select file</p>
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
      <section className='submit-vendor-info-button-section'>
        <button className='submit-vendor-info-button' type='button' onClick={handleSubmitForm}><p className='create-vendor-button-p'>Submit Vendor</p><img className='plus-icon-form' src={images.plus} alt='plus sign icon'/></button>
        <p hidden={!hasError} className='vendor-form-error'>*Please include all required fields*</p>
      </section>
    </section>
  )
}

export default VendorForm;
