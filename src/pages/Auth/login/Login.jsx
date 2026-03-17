import React from 'react';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import authImg from '../../../assets/authImage.png'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
const Login = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleLogin = (data) => {
        console.log(data);
    }

    return (

        <div className='bg-white w-full h-170 rounded-2xl mt-5 mb-5 flex overflow-hidden'>
            <div className='bg-white w-[50%] flex items-center justify-center'>
                <form className='w-96' onSubmit={handleSubmit(handleLogin)}>
                    <div className='text-[42px] font-extrabold text-center mb-1'>Welcome Back!</div>
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className="label text-sm font-semibold">Email</label>
                        <input type="email" {...register("email", { required: true })} className="input bg-white w-full" placeholder="Email" />

                        {
                            errors.email?.type === "required" && (<a className='text-secondary'>Email is required!</a>)
                        }

                        {/* Password */}
                        <label className="label text-sm font-semibold">Password</label>
                        <input type="password" {...register("password", { required: true, minLength: 6 })} className="input bg-white w-full" placeholder="Password" />
                        {
                            errors.password?.type === "required" && (<a className='text-secondary'>Password is required!</a>)
                        }
                        {
                            errors.password?.type === "minLength" && (<a className='text-secondary'>Minimum 6 characters are required!</a>)
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>

                        {/* Button */}
                        <button className="py-1 mt-2 px-8 w-full bg-primary rounded-sm text-xl hover:cursor-pointer hover:text-secondary hover:shadow-2xs shadow-secondary transition-transform duration-300">Login</button>

                        <div className='text-[#71717A] text-xl'>Don't Have an Account? <Link className='text-primary hover:text-secondary transition-transform duration-300' to='/register'>Register</Link></div>
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