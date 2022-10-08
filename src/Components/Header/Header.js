import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <Link to='/home'>Home</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/grandPa'>GrandPa</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;