import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import "./DetailPage.css";

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
    }, [id]);

    console.log(clothe)
  return (
    <div className='mayor-container'>
        {isLoading ? (
          <p>Tratando de cargar</p>
        ): (
          <div className='grid-container'>
            <div className='box1'>
              <img src={clothe[0].img} alt="" className='img'/> 
            </div>
            <div className='box2'>
              <h2>{clothe[0].name}</h2>
              <h3>Descripcion: {clothe[0].description} </h3>
              <p>Precio: $<b>{clothe[0].price}</b></p>
              <p>Categoria: <span>{clothe[0].type}</span></p>
            </div>
            <div className='box3'>
              
            </div>
            {/* <img src={clothe[0].img} alt="" /> */}
          </div>
          )}
    </div>
  )
}

export default DetailPage