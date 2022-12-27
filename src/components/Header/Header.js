import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='Header'>
            <nav className='nav'>
                <img src={logo} alt="" />
                <ul className='menu'>
                    <a href="/Shop">Shop</a>
                    <a href="/Orders">Orders</a>
                    <a href="/Inventory">Inventory</a>
                    <a href="/About">About</a>
                </ul>
            </nav>
        </div>
    );
};

export default Header;