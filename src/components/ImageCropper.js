import React from 'react';
import ReactCrop from 'react-image-crop';
import './ImageCropper.css'

const ImageCropper = ({imageSrc}) => {
  return (
    <div className='imageCropperWrapper'>
      <img src={imageSrc} alt='main'/>
    </div>
  );
}

export default ImageCropper;
