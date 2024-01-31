import React from 'react'
import "./ShopPage.css"
import { useState, useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const ShopPage = () => {

    const {shopVec, setShopVec} = useContext(ShopContext)

    console.log(shopVec);
  return (
    <div className='grid-container-shop'>
        <div className='box-1-shop'>
            
        </div>
        <div className='box-2-shop'>clau</div>
        <div className='box-3-shop'>bunipola</div>
        <div className='box-4-shop'>gallo</div>
    </div>
  )
}

export default ShopPage