import React, { useState, useEffect } from 'react';
import "./Users.css"

const Users = () => {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [posts, setPosts] = useState([]);
    const [showPosts, setShowPosts] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        if (selectedUserId) {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`)
                .then(response => response.json())
                .then(data => setPosts(data))
                .catch(error => console.error(error));
        }
    }, [selectedUserId]);

    const handleUserSelection = (userId) => {
        setSelectedUserId(userId);
        setShowPosts(true);
    };

    const handleHidePosts = () => {
        setShowPosts(false);
    };

    return (
        <div>
            <h1>Users</h1>
            {users.map(user => (
                <div key={user.id} className="User">
                    <h3>{user.name}</h3>
                    <p>ID: {user.id}</p>
                    <p>Username: {user.username}</p>
                    <button onClick={() => handleUserSelection(user.id)}>Show Posts</button>
                    {selectedUserId === user.id && showPosts && (
                        <div>
                            <h2>Posts by User {user.name}</h2>
                            {posts.map(post => (
                                <div key={post.id}>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </div>
                            ))}
                            <button onClick={handleHidePosts}>Hide Posts</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Users;
