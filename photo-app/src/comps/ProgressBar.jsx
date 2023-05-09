import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
// import { motion } from 'framer-motion';


const ProgressBar = ({ file, setFile }) => {     // pass props that we set to the progressbar in the uploadForm and destructure

    const { progress, url }  = useStorage(file);  // {}= what we returned in useStorage.js/hook is gonna fire what is in useEffect: take the file, create a reference and upload the file => get values back for progress & url

    // set file back to null when we have a url(file is fully uploaded)
    // useEffect: fire function when the value of url changes

    // useEffect(() => {
    //     if (url) {
    //       setFile(null);
    //     }
    //   }, [url, setFile]);

    return (
        <div className="progress-bar" style={{ width: progress + '%' }}></div>
    )
}
export default ProgressBar;
