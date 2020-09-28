import React from 'react';
import ImageCropper from './components/ImageCropper'
import './App.css';
import couch from './couch.png'

function App() {
  return (
    <div>
      <ImageCropper imageSrc={couch} />
    </div>
  );
}

export default App;
