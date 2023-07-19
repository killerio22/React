import React from 'react';

const Comments = ({ comments }) => {
    return (
        <div>
            {comments.map(comment => (
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
