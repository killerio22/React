import React from 'react';

function UserAddress({ address }) {
    return (
        <div>
            <p>Street: {address.street}</p>
            <p>Suite: {address.suite}</p>
            <p>City: {address.city}</p>
        </div>
    );
}

export default UserAddress;
