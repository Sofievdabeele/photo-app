import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (file) => {   //file comes from useStorage: file thats user selects
    const [progress, setProgress] = useState(0);  //progress of upload
    const [error, setError] = useState(null);     // any errors of the upload
    const [url, setUrl] = useState(null);         // img url we get back from storage after the image has fully uploaded

    // every time we get a new value:
        // use projectStorage to upload file inside hook
        // once uploaded: get img url & store in db
            // => db consists of all img urls
            // => use data to load img in a react component 
        // => put logic in useEffect Hook 
        
    useEffect(() => {       
    //inside function: logic to upload the file
        // references: Creating ref to a file inside  default firebase storage 
        // = when we upload smth inside the storage the file should have this name(file.name)
        const storageRef = projectStorage.ref(file.name);  
        
        // argument 1: progress
        // (assync) take a file & put it in that location (uploads the file to the ref above)
        // attach a listener (.on('state_change')) to it that is going to fire functions when certain events happen
        // snapshot in time of the upload on that moment in time
        storageRef.put(file).on('state_change', (snap) => {                                  
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            //set value of progress to percentage
            setProgress(percentage);

        //argument 2: set error
        }, (err) => {
            setError(err);

        //argument 3: set url: function that is going to fire when upload is completed
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);  // does't overright [url], updates it, because it is in a different sculp inside this function
        })  
    }, [file])               // dependency inside the array => function is happening everytime file changes 

    return  { progress, url, error }
    // set progress to percentage
    // set url after image has been uploaded
    // set error if there is one
}

export default useStorage;
