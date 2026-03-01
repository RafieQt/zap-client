import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer/Footer';
import Navbar from '../pages/shared/navbar/Navbar';

const RootLayout = () => {
    return (
        <div className='max-w-7xl min-h-screen flex flex-col pt-5 mx-auto'>
            <Navbar></Navbar>
            <div className='flex-1 '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;