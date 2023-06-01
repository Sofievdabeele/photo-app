import './App.css'
import Navigation from './comps/navbar/navigation'
import Signup from './comps/signupPage/Signup'
import Login from './comps/loginPage/Login'
import Home from './Home'
import Title from './comps/photoPage/Title'
import UploadForm from './comps/photoPage/UploadForm'
import ImageGrid from './comps/photoPage/ImageGrid'
import Modal from './comps/photoPage/Modal'
import { useState } from 'react'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);

  return (
    <div className='App'>
    <Navigation />

    <BrowserRouter>
    <section>

      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/signupPage" element={<Signup/>} />
          <Route path="/loginPage" element={<Login />} />
          <Route path="photoPage" element={<Title />} />
     
      </Routes>
    </section>
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
