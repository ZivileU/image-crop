import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './ImageCrop.css'

const ImageCrop = ({imageSrc}) => {
  const [crop, setCrop] = useState({aspect: 1/1});
  return (
    <div className='imageCropWrapper'>
      <ReactCrop
        src={imageSrc}
        crop={crop}
        onChange={newCrop => setCrop(newCrop)}
        onComplete={crop => console.log(crop)} //the cropped part of the image would be exported here
        imageAlt='main'
      />
    </div>
  );
}

export default ImageCrop;
