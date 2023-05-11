import { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";


// function responsible for fileuploads (progress/errors/url)
const useStorage = (file) => {   //file comes from uploadForm: file thats user selects
    
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    
    const storageRef = ref(storage,`images/${ file.name }`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    
    useEffect(() => {       
        if (!file) return;
        uploadTask.on( "state_changed", (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            
            setProgress(progress);
            console.log(progress);
        }, (err) => {
            setError(err);
            
        },  () => {
            const url = getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                const data = {
                    url: url,
                    createdAt: new Date()
                };
                setUrl({ url, createdAt: data.createdAt });
                console.log('File available at', url, data);
            });            
        })
    }, [file]);              



    return  { progress, url, error }
    // set progress to percentage
    // set url after image has been uploaded
    // set error if there is one
}
export default useStorage;
