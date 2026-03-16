import React from 'react';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import authImg from '../../../assets/authImage.png'
const Login = () => {
    return (
        <div>
            <div className='bg-white h-170 rounded-2xl mt-5 mb-5 flex'>
                <div className='bg-white w-[50%]'></div>
                <div className='bg-[#fafdf0] w-2xl flex items-center'>
                    <img src={authImg} className='' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;