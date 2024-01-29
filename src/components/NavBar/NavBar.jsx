import React from 'react';
import "./NavBar.css";

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='NavBar'>
        <nav>
            <ul>
                <Link to={"/"}>Home Page</Link>
                <li>Categories</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar