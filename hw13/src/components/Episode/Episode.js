import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import {episodesActions} from "../../redux";

const Episode = ({ episode }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { name, air_date, episode: episodeName, characters} = episode;
    const toCharacters = () => {
        const ids = characters.map(character=>character.split('/').slice(-1)[0]).join(',');
        dispatch(episodesActions.setCurrentEpisode(episode));
        navigate('/characters', { state: { ids } });
    };
    return (
            <Box sx={{ minWidth: 300 }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {episodeName}
                        </Typography>
                        <Typography variant="body2">
                            {air_date}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium" variant="contained" color="secondary" style={{ borderRadius: '50%' }} onClick={toCharacters}>
                            Characters
                        </Button>
                    </CardActions>
                </Card>
            </Box>
    );
};

export default Episode;
