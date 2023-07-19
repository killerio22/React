import React, { useEffect, useState } from 'react';
import { CommentForm } from './CommentForm';
import Comments from './Comments';

const CommentContainer = () => {
    const [comments, setComments] = useState([]);
    const [postId] = useState(1);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => setComments(data));
    }, []);

    const addComment = (comment) => {
        setComments(prevComments => [...prevComments, comment]);
    };

    return (
        <div>
            <CommentForm postId={postId} addComment={addComment} />
            <hr />
            <Comments comments={comments} />
        </div>
    );
};

export { CommentContainer };
