import useStorage from "../hooks/useStorage";
import { useEffect, useState } from "react";
import { storage } from "../firebase/config";
import { ref, getDownloadURL, listAll } from "firebase/storage";

const ImageGrid = ({ setSelectedImage, file }) => {
 
  const [urls, setUrls] = useState([]);
  const listRef = ref(storage, "images/");
  
  
  useEffect(() => {
    listAll(listRef)
      .then((response) => {
        const promises = response.items.map((item) =>
          getDownloadURL(item).then((url) => url)
        );
        return Promise.all(promises);
      })
      .then((downloadUrls) => {
        // Filter out duplicate URLs
        const uniqueUrls = downloadUrls.filter(
          (url) => !urls.includes(url)
        );
  
        setUrls((prevUrls) => [...prevUrls, ...uniqueUrls]);
      })
      .catch((error) => {
        console.log("Error listing images from Firebase Storage:", error);
      });
  }, [file]);

  return (
    <div className="img-grid">
      {urls &&
        urls.map((url) => (
          <div className="image-wrap" key={url} onClick={() => setSelectedImage(url)}>
            <img src={url} alt="uploaded picture from my documents" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;



