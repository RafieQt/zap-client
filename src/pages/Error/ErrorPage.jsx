import React from 'react';
import errorImg from '../../assets/errorImage.png'
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto min-h-screen flex flex-col pt-5'>
            <Navbar></Navbar>
            <div className='flex-1 bg-white rounded-3xl mb-50 mt-8 flex flex-col items-center'>
                <img className='mt-20 mb-5' src={errorImg} alt="" />
                <Link to='/'><button className='btn rounded-xl bg-primary text-xl px-6 py-3 mb-20'>Go Home</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;