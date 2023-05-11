import './App.css'
import Title from './comps/Title'
import UploadForm from './comps/UploadForm'
import ImageGrid from './comps/ImageGrid'
// import Modal from './comps/Modal'
import { useState } from 'react'

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);

  return (
    <div className='App'>
      <Title />
      <UploadForm setFile={setFile} />
      <ImageGrid />
      {/* 
      {file && <ImageGrid setSelectedImage={setSelectedImage} file={file} />} */}
      {/* {selectedImage && <Modal selectedImage={selectedImage} />} */}
    </div>
  );
}

export default App;
