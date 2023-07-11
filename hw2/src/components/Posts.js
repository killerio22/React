import React, { useState, useEffect } from 'react';
import Post from './Post';
import './Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error(error));
    }, []);

    const handlePostSelection = (postId) => {
        setSelectedPostId(postId);
    };

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <Post post={post} onSelectPost={handlePostSelection} />
                    {selectedPostId === post.id && (
                        <div className="Result">
                            <h2>ID: {post.id}</h2>
                            <p>UserID: {post.userId}</p>
                            <p>Title: {post.title}</p>
                            <p>Body: {post.body}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Posts;
