import React, { useState } from 'react';
import CommentForm from './CommentForm';
import Comments from './Comments';
import { useCommentsService } from '../services/commentsService';

const CommentContainer = () => {
    const { comments, createComment } = useCommentsService();
    const [newComment, setNewComment] = useState(null);

    const addComment = (comment) => {
        createComment(comment)
            .then((data) => {
                console.log('Новий коментар:', data);
                setNewComment(data);
            })
            .catch((error) => {
                console.error('Помилка створення коментаря:', error);
            });
    };

    return (
        <div>
            <CommentForm addComment={addComment} />
            <hr />
            <Comments comments={comments} newComment={newComment} /> {/* Передаємо новий коментар */}
        </div>
    );
};

export { CommentContainer };
