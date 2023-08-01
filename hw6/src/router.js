import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Posts from './Components/Posts';
import Comments from './Components/Comments';
import Cars from './Components/Cars';

function AppRouter() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/cars" element={<Cars />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;
