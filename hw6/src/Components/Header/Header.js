import React, {Component} from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <NavLink to={'posts'}>Posts</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
                <NavLink to={'cars'}>Cars</NavLink>
            </div>
        );
    }
}

export {Header};