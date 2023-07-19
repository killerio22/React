import React from 'react';
import './App.css';
import {CarContainer} from "./components/Cars/CarContainer";
import {CommentContainer} from "./components/Comments/CommentContainer";
import {UserContainer} from "./components/Users/UserContainer";

const App = () => {
    return (
        <div>
            <h1>CARS</h1>
            <CarContainer/>
            <h1>USERS</h1>
            <UserContainer/>
            <h1>COMMENTS</h1>
            <CommentContainer/>

        </div>
    );
};

export default App;
