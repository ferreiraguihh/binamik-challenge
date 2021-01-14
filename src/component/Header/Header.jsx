import React from 'react';

import './Header.css';
import logoBio from '../../assets/img/binamik_logo.png'
function Header() {
    return (
        <div className="header-starwars">
            <img src={logoBio}/>
        </div>
    );
}

export default Header;