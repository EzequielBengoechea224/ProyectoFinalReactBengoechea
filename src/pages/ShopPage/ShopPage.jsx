import React, { useEffect } from 'react'
import "./ShopPage.css"
import { useState, useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const ShopPage = () => {
    const { shopVec } = useContext(ShopContext);
    const [precioTotal,setPrecioTotal] = useState(0);

    useEffect(() =>{
        let valorTotal = 0
        shopVec.forEach((item) => {
            item.forEach((clothe) =>{
                valorTotal += clothe.salePrice;
            })
        });
        setPrecioTotal(valorTotal)
    },[shopVec])
    
    console.log("Hola soy precio total: ",precioTotal);
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
                                    <td>{clothe.cantUnits}</td>
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