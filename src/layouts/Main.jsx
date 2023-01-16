import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const Main = () => {
    return (
        <div>
           <Navbar/>
           <Outlet/>
        </div>
    );
};

export default Main;