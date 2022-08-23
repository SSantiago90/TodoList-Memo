// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAY9IwZl8r0oKTgd5kL06yGQnyXFcXqDf0",
  authDomain: "todo-react-3dacd.firebaseapp.com",
  projectId: "todo-react-3dacd",
  storageBucket: "todo-react-3dacd.appspot.com",
  messagingSenderId: "116509691769",
  appId: "1:116509691769:web:e00d4aad02bcea30f929a8",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
