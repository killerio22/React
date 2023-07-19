import React from 'react';

function UserDetails({ user }) {
    return (
        <div>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    );
}

export default UserDetails;
