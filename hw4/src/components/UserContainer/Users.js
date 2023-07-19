import React, { useEffect } from 'react';
import { User } from "./User";

const Users = ({ users, setUsers }) => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    );
};

export { Users };
