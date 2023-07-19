import axios from 'axios';

const COMMENTS_API = 'https://jsonplaceholder.typicode.com/comments';

export const useCommentsService = () => {
    const getComments = async () => {
        const response = await axios.get(COMMENTS_API);
        return response.data;
    };

    const createComment = async (comment) => {
        const response = await axios.post(COMMENTS_API, comment, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
    };

    return {
        getComments,
        createComment,
    };
};
