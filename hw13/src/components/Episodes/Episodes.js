import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {episodesActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import Episode from "../Episode/Episode";
import './Episodes.css'

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(state => state.episodes);
    const [query, setQuery] = useSearchParams({page:'1'});
    const page = query.get('page');

    useEffect(() => {
        dispatch(episodesActions.getAll({page}))
    }, [page]);

    return (
        <div className="Episodes">
            {episodes.map(episode=><Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export default Episodes;