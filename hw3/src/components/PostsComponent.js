import React from 'react';
import './PostsComponent.css'

function PostsComponent({ posts }) {
    return (
        <div className="Posts">
            <h2>Posts</h2>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default PostsComponent;
