import React, { useState } from 'react';
import { UserForm } from "./UserForm";
import { Users } from "./Users";

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr />
            <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export { UserContainer };
