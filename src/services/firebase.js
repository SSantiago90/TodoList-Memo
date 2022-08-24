import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD3LqjIrVp0hRNZQozFICd0-Vv7kASXCQY--00",
  authDomain: "todos-react-37231.firebaseapp.com",
  projectId: "todos-react-37231",
  storageBucket: "todos-react-37231.appspot.com",
  messagingSenderId: "928977235473",
  appId: "1:928977235473:web:a9abfd7fca6909cdf7cbb0"
};

const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);

export default firestoreDB;