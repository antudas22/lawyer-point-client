import React from 'react';
import TopNav from '../Pages/Shared/TopNav/TopNav';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <TopNav/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;