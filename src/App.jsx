import React from 'react'
import { useState, useEffect } from 'react';
import "./App.css";

//Components
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar"

//Firebase
import { db } from "./firebase/firebaseConfig"
import { collection, query, where, getDocs } from "firebase/firestore";

const App = () => {

  const [clothesData,setClothesData] = useState([]);

  useEffect(() =>{
    const getClothesData = async () =>{
      const q = query(collection(db, "clotesCollection"));
      const docs = []; 
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id})
      });
      console.log(docs);
    }
    getClothesData();
  }, [])

  return (
    <div className='App'>
        <Header />
        <NavBar/>
        <div className='firstSection'>
            <div className='fs-div'>
              <h2>Bienvenido a Ecomerce</h2>
              <p>Nuestros productos en oferta son</p>
            </div>
        </div>
    </div>
  )

}

export default App