import React from 'react';


import moment from 'moment';

import './CardPerson.css';

function CardPerson({ starPersons }) {
    return (
        <div className="card-container">
            <h3>{starPersons.name}</h3>
            <div className="container-info-person">
                <div className="container-info">
                    <p>Gender: {starPersons.gender === 'hermaphrodite' ? 'epicene' : starPersons.gender}</p>
                    <p>Year of birth: {starPersons.birth_year}</p>
                </div>
                <div className="container-info">
                    <p>Height: {starPersons.height}</p>
                    <p>Skin color: {starPersons.skin_color}</p>
                </div>
            </div>
            <div className="time">
                <h6>Created: {moment(starPersons.created).format('MM/DD/YYYY ')}</h6>
                <h6>Edited: {moment(starPersons.edited).format('MM/DD/YYYY ')}</h6>
            </div>
        </div>
    );
}

export default CardPerson;