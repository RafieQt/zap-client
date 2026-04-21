import React from 'react';
// import errorImg from '../../assets/errorImage.png'
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Link } from 'react-router';
import Lottie from "lottie-react";
import errorAnimation from '../../assets/animations/error.json'
const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto min-h-screen flex flex-col pt-5'>
            <Navbar></Navbar>
            <div className='mx-auto py-30' style={{ width: 300 }}>
                <Lottie animationData={errorAnimation} loop={true} />
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;