import React from 'react'
import "./ShopPage.css"
import { useState, useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const ShopPage = () => {
    const { shopVec } = useContext(ShopContext);
    
    return (
        <div className='ShopPage'>
            <table>
                <thead>
                    <tr>
                        <td>Img</td>
                        <td>Nombre</td>
                        <td>Precio</td>
                        <td>Cantidad</td>
                    </tr>
                </thead>
                <tbody>
                    {shopVec.map((item) => {
                        return item.map((clothe, clotheIndex) => {
                            return (
                                <tr key={clotheIndex}>
                                    <td key={clotheIndex}>
                                        <img src={clothe.img} alt="" />
                                    </td>
                                    <td>{clothe.name}</td>
                                    <td>{clothe.price}</td>
                                    {/* Agrega las celdas para Precio y Cantidad si es necesario */}
                                </tr>
                            );
                        });
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ShopPage