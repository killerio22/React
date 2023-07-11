import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';
import './RickAndMortyCharacters.css';

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
        <div className="rick-and-morty-characters">
            <h1 className="title">Rick and Morty Characters</h1>
            <div className="character-list">
                {characters.map(character => (
                    <Character
                        key={character.id}
                        character={character}
                    />
                ))}
            </div>
        </div>
    );
};

export default RickAndMortyCharacters;
