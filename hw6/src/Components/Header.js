import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <NavLink exact to={'/posts'} activeClassName="active-link">Posts</NavLink>
            <NavLink exact to={'/comments'} activeClassName="active-link">Comments</NavLink>
            <NavLink exact to={'/cars'} activeClassName="active-link">Cars</NavLink>
        </div>
    );
};

export default Header;
