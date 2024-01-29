import React from 'react'
import img from "../../assets/Logo-North-Face.png"
import "./Header.css";

const Header = () => {
  return (
    <div className='Header'>
        <img src={img} alt="logo del e-comerce" />
        <span></span>
        <h1>The North Face</h1>
    </div>
  )
}

export default Header