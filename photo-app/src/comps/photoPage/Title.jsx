import '../../Photo.css';
import ProgressBar from "./ProgressBar";
import ImageGrid from "./ImageGrid";
import UploadForm from "./UploadForm";
import { useState } from 'react'


const Title = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [file, setFile] = useState(null);
    return(

        <>
        <div className="title">
            <h1>WanderShots</h1>
            <h2>"Capture life's moments, 
                <br/> one snap at a time!"</h2>
            <p>"Discover a world of creativity and inspiration with our online photo gallery. 
                <br />
                From breathtaking landscapes to heartwarming moments, showcase your unique perspective through our beautifully curated platform. 
                With powerful tools at your fingertips, bring your photos to life and tell your story like never before. 
                Start your journey today and let your pictures speak a thousand words!"</p>
        </div>
        <UploadForm setFile={setFile} />
      <ImageGrid setSelectedImage={setSelectedImage} file={file} />
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
        </>
    )
}
export default Title;