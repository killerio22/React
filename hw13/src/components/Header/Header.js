import React, { useEffect } from 'react';
import { LinearProgress, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { episodesActions } from '../../redux/slices/episodesSlice';
import './Header.css'

const Header = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.progress);
    const { currentEpisode } = useSelector(state => state.episodes);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/characters') {
            dispatch(episodesActions.setCurrentEpisode(null));
        }
    }, [dispatch, location.pathname]);

    return (
        <div className='Header'>
            <div className="label">{currentEpisode ? currentEpisode.name : 'Rick and Morty'}</div>
            {isLoading && (
                <Stack sx={{ width: '100%', color: 'grey.500', height: '3px' }} spacing={2}>
                    <LinearProgress color="secondary" />
                </Stack>
            )}
        </div>
    );
};

export default Header;
