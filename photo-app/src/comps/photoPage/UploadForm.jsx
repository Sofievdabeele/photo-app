import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    
    //make an array of allowed types of images
    const types = ['image/png', 'image/jpeg', 'image/jpg', "/image/*"];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
      
        if (selected && types.includes(selected.type)) {
          setFile(selected);
          setError('');
        } else {
          setFile(null);
          setError('Please select an image (png, jpeg or jpg)');
        }
      };

    return (
        <form className="photo-form">
            <label className="photo-label">
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            {/* output file if we have a valid file or output error */}
            <div className="output">
                {/* && = if left side is true then output the right side */}
                { error && <div className="error">{ error }</div> }
                { file && <div>{ file.name }</div> }
                {/* pass file(prop): we want to use useStorage hook to pass the file into that */}
                {/* pass setFile function: when progress is complete: set file back to null & progressbar doesn't show again  */}
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}
export default UploadForm;