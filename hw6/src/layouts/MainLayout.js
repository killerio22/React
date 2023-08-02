import React, {Component} from 'react';
import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Outlet/>
            </div>
        );
    }
}

export {MainLayout};