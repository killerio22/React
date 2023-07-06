import React from 'react';
import './Post.css';

const Post = ({ post, onSelectPost }) => {
    const handlePostClick = () => {
        onSelectPost(post.id);
    };

    return (
        <div className="Post">
            <h2>{post.title}</h2>
            <p>ID: {post.id}</p>
            <button onClick={handlePostClick}>Select Post</button>
        </div>
    );
};

export default Post;
