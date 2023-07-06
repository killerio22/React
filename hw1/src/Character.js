import React from 'react';

const Character = ({ character }) => {
    const { id, name, status, species, gender, image } = character;

    return (
        <div className="character">
            <img className="character-image" src={image} alt={name} />
            <h2 className="character-name">{name}</h2>
            <p className="character-info">Status: {status}</p>
            <p className="character-info">Species: {species}</p>
            <p className="character-info">Gender: {gender}</p>
        </div>
    );
};

export default Character;