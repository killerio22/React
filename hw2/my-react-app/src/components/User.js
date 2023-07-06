import React, { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    const handleUserSelection = (userId) => {
        setSelectedUserId(userId);
    };

    return (
        <div>
            <h1>Users</h1>
            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>ID: {user.id}</p>
                    <p>Username: {user.username}</p>
                    <button onClick={() => handleUserSelection(user.id)}>Show Posts</button>
                    {selectedUserId === user.id && (
                        <div>
                            <h2>Posts by User {user.name}</h2>
                            {/* Тут виводимо пости для обраного користувача */}
                        </div>
                    )}
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Users;
