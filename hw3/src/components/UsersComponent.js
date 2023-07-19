import React from 'react';
import UserComponent from './UserComponent';

function UsersComponent({ users, handleShowPosts }) {
    return (
        <div>
            {users.map(user => (
                <UserComponent
                    key={user.id}
                    user={user}
                    handleShowPosts={handleShowPosts}
                />
            ))}
        </div>
    );
}

export default UsersComponent;
