import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './Character.css';

const SimpsonFamily = () => {
    return (
        <div className="family">
            <h1 className="family-title">The Simpson Family</h1>
            <div className="family-row">
                <FamilyMember
                    name="Homer Simpson"
                    age={39}
                    gender="Male"
                    photoUrl="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
                />
                <FamilyMember
                    name="Marge Simpson"
                    age={36}
                    gender="Female"
                    photoUrl="https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png"
                />
                <FamilyMember
                    name="Bart Simpson"
                    age={10}
                    gender="Male"
                    photoUrl="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
                />
            </div>
            <div className="family-row">
                <FamilyMember
                    name="Lisa Simpson"
                    age={8}
                    gender="Female"
                    photoUrl="https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"
                />
                <FamilyMember
                    name="Maggie Simpson"
                    age={1}
                    gender="Female"
                    photoUrl="https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png"
                />
            </div>
        </div>
    );
};

const FamilyMember = ({ name, age, gender, photoUrl }) => {
    return (
        <div className="family-member">
            <img className="family-member-photo" src={photoUrl} alt={name} />
            <h2 className="family-member-name">{name}</h2>
            <p className="family-member-info">Age: {age}</p>
            <p className="family-member-info">Gender: {gender}</p>
        </div>
    );
};

const RickAndMortyCharacters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setCharacters(response.data.results.slice(0, 6));
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            <div className="character-list">
                {characters.map(character => (
                    <Character
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        image={character.image}
                    />
                ))}
            </div>
        </div>
    );
};

const Character = ({ id, name, status, species, gender, image }) => {
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

const App = () => {
    return (
        <div>
            <SimpsonFamily />
            <RickAndMortyCharacters />
        </div>
    );
};

export default App;
