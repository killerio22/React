import React, { createContext, useState, useEffect } from 'react';
import UsersComponent from './components/UsersComponent';
import PostsComponent from './components/PostsComponent';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import { MyContextProvider } from './components/MyContext';

export const MyContext = createContext();

function App() {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [posts, setPosts] = useState([]);
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const handleShowPosts = userId => {
        setSelectedUserId(userId);
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(data => setPosts(data));
    };

    return (
        <div><UsersComponent users={users} handleShowPosts={handleShowPosts} />
        {selectedUserId && <PostsComponent posts={posts} />}
        <MyContextProvider>
            <Child1 />
            <Child2 />
        </MyContextProvider>
            </div>
    );
}

export default App;
