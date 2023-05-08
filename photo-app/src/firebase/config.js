import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import * as firebase from 'firebase/app';
import 'firebase/strorage';   //to store images
import {} from 'firebase/firestore';  //database
// import { getFirestore  } from "firebase/firestore";

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
const app = initializeApp(firebaseConfig);  //initializing app
console.log("hello");

// const firestore = getFirestore();

const projectStorage = firebase.storage();  //initializing 2 different storages
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };