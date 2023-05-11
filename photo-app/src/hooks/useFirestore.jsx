// import { useState, useEffect } from "react";
// import { db } from "../firebase/config";
// import { collection, query, orderBy, onSnapshot } from "firebase/firestore"; 


// const useFirestore = (collectionName) => {
    
//     // const collectionRef = collection(db, collection);
//     const [docs, setDocs] = useState([]);
    
//     useEffect(() => {
//         const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
//         const unsubscribe = onSnapshot(q, (snapshot) => {
//         const updatedDocuments = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
//         setDocs(updatedDocuments);
//     });
       
//         // unsubscribe from the collection when we no longer need it    
//         return () => unsubscribe();
//       }, [collectionName]);
//       return { docs };
//     };
    
// export default useFirestore;
