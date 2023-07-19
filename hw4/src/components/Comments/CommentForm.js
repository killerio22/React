import React from 'react';
import { useForm } from "react-hook-form";

const CommentForm = ({ postId, addComment }) => {
    const { register, handleSubmit, reset } = useForm();

    const saveComment = (comment) => {
        const commentWithPostId = { ...comment, postId };

        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentWithPostId),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('New comment:', data);
                addComment(data);
                reset();
            })
            .catch((error) => {
                console.error('Error creating comment:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit(saveComment)}>
            <label>Name: <input type="text" {...register('name')} /></label>
            <label>Email: <input type="text" {...register('email')} /></label>
            <label>Body: <input type="text" {...register('body')} /></label>
            <button type="submit">Save Comment</button>
        </form>
    );
};

export {CommentForm};
