import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const UserForm = ({ setUsers }) => {
    const { register, handleSubmit, reset } = useForm();

    const save = (user) => {
        const newUser = { ...user, id: 11 };

        axios
            .post('https://jsonplaceholder.typicode.com/users', newUser, {
                headers: { 'Content-Type': 'application/json' },
            })
            .then((response) => {
                setUsers((prev) => [...prev, response.data]);
                reset();
            });
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <label>
                name: <input type="text" placeholder={'name'} {...register('name')} />
            </label>
            <label>
                username: <input type="text" placeholder={'username'} {...register('username')} />
            </label>
            <label>
                email: <input type="text" placeholder={'email'} {...register('email')} />
            </label>
            <label>
                city: <input type="text" placeholder={'city'} {...register('address.city')} />
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export { UserForm };
