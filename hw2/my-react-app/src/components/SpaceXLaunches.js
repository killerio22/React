import React, { useState, useEffect } from 'react';
import "./SpaceXLaunches.css"

const SpaceXLauncher = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(response => response.json())
            .then(data => {
                const filteredLaunches = data.filter(launch => launch.launch_year !== '2020');
                setLaunches(filteredLaunches);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="Launches">
            <h1>SpaceX Launches</h1>
            {launches.map(launch => (
                <div key={launch.flight_number} className="Launch">
                    <h3>{launch.mission_name}</h3>
                    <p>Launch Year: {launch.launch_year}</p>
                    {launch.links.mission_patch_small && (
                        <img src={launch.links.mission_patch_small} alt="Mission Patch" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default SpaceXLauncher;
