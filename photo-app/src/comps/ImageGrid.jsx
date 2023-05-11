
import { useEffect, useState } from "react";
import { storage } from "../firebase/config";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { motion } from "framer-motion"

const ImageGrid = ({ setSelectedImage, url }, file) => {
 
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
  }, []);

  return (
    <div className="img-grid">
      {urls &&
        urls.map((url, id) => (
          <motion.div className="image-wrap" key={id} 
          layout
          whileHover={{ opacity: 1}}
          onClick={() => setSelectedImage(url)}>

            <motion.img src={url} alt="uploaded picture from my documents" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ delay:1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;



