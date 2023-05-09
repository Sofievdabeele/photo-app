import { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { async } from "@firebase/util";

// function responsible for fileuploads (progress/errors/url)
const useStorage = (file) => {   //file comes from uploadForm: file thats user selects
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
        
    useEffect(() => {       
        const storageRef = ref(storage,`/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on( "state_changed", (snapshot) => {
            let percentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref)
            setUrl(url);
        }); 
    }, [file]);               // dependency inside the array => function is happening everytime file changes 

    return  { progress, url, error }
    // set progress to percentage
    // set url after image has been uploaded
    // set error if there is one

}


export default useStorage;
