import { initializeApp } from "firebase/app";
import 'firebase/storage';   //to store images
import 'firebase/firestore';  //database
import { getFirestore  } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3iorSTCXmfAKGchrw50eSKdoiihS4ED0",
  authDomain: "wandershots-photoapp.firebaseapp.com",
  projectId: "wandershots-photoapp",
  storageBucket: "wandershots-photoapp.appspot.com",
  messagingSenderId: "242182785426",
  appId: "1:242182785426:web:0d0f6b85aec286a042994b"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initializing 2 different storages
const storage = getStorage(app);
const db = getFirestore(app);

const auth = getAuth(app);


export {storage, db, auth};