import { useState, useEffect } from "react";
import { storage, db } from "../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, doc, setDoc } from "firebase/firestore"; 

// function responsible for fileuploads (progress/errors/url)
const useStorage = (file) => {   //file comes from uploadForm: file thats user selects
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
        
    useEffect(() => {       
        const storageRef = ref(storage,`/${file.name}`);
        const uploadTask = uploadBytes(storageRef, file);

        const collectionRef = doc(collection(db, "images"));  //firebase is going to create for us
        
        uploadTask.on( "state_changed", (snapshot) => {
            let percentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await getDownloadURL(storageRef);
            
            const data = {
                url: url,
                createdAt: new Date()
              };
            await setDoc(collectionRef, data);
            setUrl(url);
        })
    }, [file]);              

    return  { progress, url, error }
    // set progress to percentage
    // set url after image has been uploaded
    // set error if there is one
}
export default useStorage;
