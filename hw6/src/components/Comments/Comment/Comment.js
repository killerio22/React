import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, postId, name} = comment;
    const navigate = useNavigate();
    return (
        <div>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <button onClick={()=>navigate(`posts/${postId}`)}>GetPost</button>
        </div>
    );
};

export default Comment;