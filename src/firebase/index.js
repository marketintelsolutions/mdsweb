// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  addDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBh07mQ24DJsHw8QxKzvPXCg6zu8pq17Mg",
  authDomain: "mdswebsite.firebaseapp.com",
  projectId: "mdswebsite",
  storageBucket: "mdswebsite.appspot.com",
  messagingSenderId: "857357928050",
  appId: "1:857357928050:web:d8c8ee1d64d4419475a4eb",
  measurementId: "G-4KSZ256GF8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addRequest = async (data) => {
  await addDoc(collection(db, "requests"), data)
    .then((c) => {
      return data;
    })
    .catch((error) => {
      return null;
    });
};

export { addRequest };
