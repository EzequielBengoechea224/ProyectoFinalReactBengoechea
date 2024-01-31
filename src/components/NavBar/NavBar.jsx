import React from 'react';
import "./NavBar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';

import { Link } from 'react-router-dom';

//Context
import { SalesContext } from '../../context/salesContext';

const NavBar = () => {
  const {sales} = useContext(SalesContext);
  return (
    <div className='NavBar'>
        <nav>
            <ul>
                <Link to={"/"}>Home Page</Link>
                <li>Categories</li>
                <li>Contact</li>
                <li className='li-sales'><ShoppingCartIcon/> {sales}</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar