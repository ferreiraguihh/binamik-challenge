import React from 'react';

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
            <div className="career">
                <h6>Films</h6>
            </div>
        </div>
    );
}

export default CardPerson;