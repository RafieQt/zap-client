import React from 'react';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import authImg from '../../../assets/authImage.png'
const Login = () => {
    return (

        <div className='bg-white w-full h-170 rounded-2xl mt-5 mb-5 flex overflow-hidden'>
            <div className='bg-white w-[50%]'>
                <form>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input bg-white" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input bg-white" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
            </div>
            <div className='bg-[#fafdf0] w-2xl flex items-center '>
                <img src={authImg} className='' alt="" />
            </div>
        </div>

    );
};

export default Login;