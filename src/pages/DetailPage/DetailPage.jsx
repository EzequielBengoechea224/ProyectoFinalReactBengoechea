import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router';

//Firestore
import { db } from "../../firebase/firebaseConfig"
import { collection, query, where, getDocs, documentId } from "firebase/firestore";


//Components
import ClotheCard from '../../components/ClotheCard/ClotheCard';
import { Link } from 'react-router-dom';

const DetailPage = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [clothe,SetClothe] = useState({})
    let { id } = useParams()
    
    useEffect(() =>{
          const getClothesData = async () =>{
          const q = query(collection(db, "clotesCollection"), where(documentId(), "==", id));
          const docs = []; 
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
          });
          SetClothe(docs)
        }
        getClothesData();
        setTimeout(() =>{
            setIsLoading(false)
        },3000)
    }, []);

    console.log(clothe)
  return (
    <div>
        {isLoading ? (
          <p>Tratando de cargar</p>
        ): <img src={clothe[0].img} alt="" />}
    </div>
  )
}

export default DetailPage