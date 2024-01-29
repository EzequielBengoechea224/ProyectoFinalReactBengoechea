
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKYn-yn3jB1Ijb83mgkbtVgIQg_oY4T9s",
  authDomain: "fb-proyectofinalreact-72323.firebaseapp.com",
  projectId: "fb-proyectofinalreact-72323",
  storageBucket: "fb-proyectofinalreact-72323.appspot.com",
  messagingSenderId: "891583815016",
  appId: "1:891583815016:web:2673f80162c69db7ef0add"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);