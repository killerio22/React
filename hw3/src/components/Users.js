import React from 'react';
import User from './User';

function Users({ users }) {
    return (
        <div>
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
}

export default Users;
