import React from 'react';

import './Header.css';
import logoBio from '../../assets/img/binamik_logo.png'
import logoStar from '../../assets/img/star-wars.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header-starwars">
            <a href="https://binamik.com.br/" target="_BLANK">
                <img src={logoBio} />
            </a>
            <h2>Persons Star Wars</h2>
            <div className="container-img-starwars">
                <a href="https://www.starwars.com/" target="_BLANK">
                    <img src={logoStar} />
                </a>
            </div>
        </div>
    );
}

export default Header;