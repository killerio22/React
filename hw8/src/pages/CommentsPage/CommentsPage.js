import React from 'react';
import {Outlet} from "react-router-dom";

import Comments from "../../components/Comments/Comments";
import './CommentsPage.css'

const CommentsPage = () => {
    return (
        <div className="CommentsPage">
            <Comments/>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;