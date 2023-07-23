import axios from 'axios';

const USERS_API = 'https://jsonplaceholder.typicode.com/users';

export const useUsersService = () => {
    const getUsers = async () => {
        const response = await axios.get(USERS_API);
        return response.data;
    };

    const createUser = async (user) => {
        const response = await axios.post(USERS_API, user, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
    };

    const updateUser = async (userId, user) => {
        const response = await axios.put(`${USERS_API}/${userId}`, user, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
    };

    const deleteUser = async (userId) => {
        const response = await axios.delete(`${USERS_API}/${userId}`);
        return response.data;
    };

    return {
        getUsers,
        createUser,
        updateUser,
        deleteUser,
    };
};
