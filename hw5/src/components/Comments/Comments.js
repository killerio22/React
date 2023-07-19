import React, { useEffect, useState } from 'react';
import { useCommentsService } from '../services/commentsService';

const Comments = ({ newComment }) => {
    const [comments, setComments] = useState([]);
    const { getComments } = useCommentsService();

    useEffect(() => {
        getComments()
            .then((data) => setComments(data))
            .catch((error) => console.error('ERROR', error));
    }, []);

    useEffect(() => {
        if (newComment) {
            setComments((prevComments) => [...prevComments, newComment]); // Додаємо новий коментар до списку коментарів
        }
    }, [newComment]);

    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p>Post ID: {comment.postId}</p>
                    <p>Comment ID: {comment.id}</p>
                    <h3>Name: {comment.name}</h3>
                    <p>Email: {comment.email}</p>
                    <p>Body: {comment.body}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Comments;
