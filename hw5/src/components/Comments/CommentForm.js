import React from 'react';
import { useForm } from 'react-hook-form';
import { useCommentsService } from '../services/commentsService';

const CommentForm = ({ addComment }) => {
    const { register, handleSubmit, reset } = useForm();
    const { createComment } = useCommentsService();

    const saveComment = async (comment) => {
        try {
            const commentWithPostId = { ...comment, postId: 1 };
            const data = await createComment(commentWithPostId);
            console.log('New comment:', data);
            addComment(data);
            reset();
        } catch (error) {
            console.error('ERROR', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(saveComment)}>
            <label>Ім'я: <input type="text" {...register('name')} /></label>
            <label>Email: <input type="text" {...register('email')} /></label>
            <label>Текст коментаря: <input type="text" {...register('body')} /></label>
            <button type="submit">Зберегти коментар</button>
        </form>
    );
};

export default CommentForm;
