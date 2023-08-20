import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { charactersActions } from "../../redux";
import Character from "../Character/Character";

const Characters = () => {
    const location = useLocation();
    const { ids } = location.state;
    const dispatch = useDispatch();
    const { characters } = useSelector(state => state.characters);

    useEffect(() => {
        dispatch(charactersActions.getByIds({ ids }));
    }, [dispatch, ids]);

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character} />)}
        </div>
    );
};

export default Characters;
