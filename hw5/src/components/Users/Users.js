import React, { useEffect } from 'react';
import { User } from './User';
import axios from 'axios';

const Users = ({ users, setUsers }) => {
    const fetchUsers = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setUsers(response.data))
            .catch((error) => console.error('Error fetching users:', error));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            {users.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
};

export { Users };
