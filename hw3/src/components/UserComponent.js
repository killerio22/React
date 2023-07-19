import React from 'react';
import UserAddress from './UserAddress';
import Company from './Company';
import './UserComponent.css'

function UserComponent({ user, handleShowPosts }) {
    return (
        <div className="Users">
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <UserAddress address={user.address} />
            <Company company={user.company} />
            <button onClick={() => handleShowPosts(user.id)}>Show Posts</button>
        </div>
    );
}

export default UserComponent;
