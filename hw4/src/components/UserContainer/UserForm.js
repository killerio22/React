import React from 'react';
import { useForm } from "react-hook-form";

const UserForm = ({ setUsers }) => {
    const { register, reset, handleSubmit } = useForm();
    const save = (user) => {
        const newUser = { ...user, id: 11 };

        fetch('https://jsonplaceholder.typicode.com/users', {
            headers: { 'content-type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(newUser)
        }).then(value => value.json()).then(value => {
            setUsers(prev => [...prev, value])
            reset()
        })
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <label>name: <input type="text" placeholder={'name'} {...register('name')} /></label>
            <label>username: <input type="text" placeholder={'username'} {...register('username')} /></label>
            <label>email: <input type="text" placeholder={'email'} {...register('email')} /></label>
            <label>city: <input type="text" placeholder={'city'} {...register('address.city')} /></label>
            <button type="submit">Save</button>
        </form>
    );
};

export { UserForm };
