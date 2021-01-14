import React from 'react';

import './Header.css';
import logoBio from '../../assets/img/binamik_logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header-starwars">
            <a href="https://binamik.com.br/" target="_BLANK">
            <img src={logoBio}/>
            </a>
        </div>
    );
}

export default Header;