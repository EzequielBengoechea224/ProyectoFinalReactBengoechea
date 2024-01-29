import React, { useState } from 'react'
import { useEffect } from 'react';
import "./LastClothesListContainer.css"
import { Link } from 'react-router-dom';

//Firebase
import { db } from "../../firebase/firebaseConfig"
import { collection, query, where, getDocs } from "firebase/firestore";

//Components
import ClotheCard from '../ClotheCard/ClotheCard';


const LastClothesListContainer = () => {

    const [lastClothes,setLastClothes] = useState([])

    useEffect(() =>{
        const getClothesData = async () =>{
          const q = query(collection(db, "clotesCollection"));
          const docs = []; 
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
          });
          console.log(docs);
          const lastClothess = docs.splice(-3);
          console.log(lastClothess);
          setLastClothes(lastClothess)
        }
        getClothesData();
      }, []);

  return (
    <div className='container-flex'>
        {lastClothes.map((clothe) =>{
            return <Link to={`/detail-page/${clothe.id}`}>
                      <div className='box'>
                        <img src={clothe.img} alt={clothe.name} />
                      </div>
                    </Link> 
        })}
    </div>
  )
}

export default LastClothesListContainer