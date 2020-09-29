import React from 'react';
import ImageCrop from './components/ImageCrop'
import './App.css';
import couch from './assets/couch.png'

function App() {
  return (
    <div>
      <ImageCrop imageSrc={couch} />
    </div>
  );
}

export default App;
