import './App.css'
import Title from './comps/photoPage/Title'
import UploadForm from './comps/photoPage/UploadForm'
import ImageGrid from './comps/photoPage/ImageGrid'
import Modal from './comps/photoPage/Modal'
import Navigation from './comps/navbar/navigation'
import { useState } from 'react'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './comps/loginPage/Login'




function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);

  return (
    <div className='App'>
    <Navigation />
    
    <BrowserRouter>
      <Routes>
        
          <Route path="loginPage" element={<Login />} />
          <Route path="loginPage" element={<Login />} />
          <Route path="photoPage" element={<Title />} />
     
      </Routes>
    </BrowserRouter>

    {/* <Title />
    <UploadForm setFile={setFile} />
    <ImageGrid setSelectedImage={setSelectedImage} file={file} />
    { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> } */}
      

    
    
    </div>
  );
}

export default App;
 {/* <BrowserRouter>
        <Switch>
          <Route path="/loginPage">
            <Login />
          </Route>
          <Route path="/photoPage">
            <Title />
            <UploadForm setFile={setFile} />
            <ImageGrid setSelectedImage={setSelectedImage} file={file} />
            { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
            
          </Route>
        </Switch>
      </BrowserRouter> */}
