import React from 'react';
import './App.css';
import Posts from './components/Posts';
import SpaceXLaunches from './components/SpaceXLaunches';
import Users from './components/Users';

const App = () => {
  return (
      <div>
        <h1>My App</h1>
        <Posts />
        <SpaceXLaunches />
        <Users />
      </div>
  );
};

export default App;
