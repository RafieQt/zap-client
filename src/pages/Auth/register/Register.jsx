import React from 'react';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import authImg from '../../../assets/authImage.png'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.init';



const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = useAuth();
    const handleRegistration = (data) => {

        registerUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                return updateProfile(user, { displayName: data.name })

            }
            )
            .then(()=> {
                console.log(auth.currentUser);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='bg-white w-full h-170 rounded-2xl mt-5 mb-5 flex overflow-hidden'>
            <div className='bg-white w-[50%] flex items-center justify-center'>
                <form className='w-96' onSubmit={handleSubmit(handleRegistration)}>
                    <div className='text-[42px] font-extrabold text-center mb-1'>Create an Account</div>
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label text-sm font-semibold">Name</label>
                        <input type="text" {...register("name", { required: true })} className="w-full input bg-white" placeholder="Your Name" />
                        {
                            errors.name?.type === 'required' && (<p className='text-secondary'>Name is required!</p>)
                        }
                        {/* email */}
                        <label className="label text-sm font-semibold">Email</label>
                        <input type="email" {...register("email", { required: true })} className="w-full input bg-white" placeholder="Email" />
                        {
                            errors.email?.type === 'required' && (<p className='text-secondary'>Email is required!</p>)
                        }

                        {/* password */}
                        <label className="label text-sm font-semibold">Password</label>
                        <input type="password" {...register("password", { required: true, minLength: 6 })} className="w-full input bg-white" placeholder="Password" />
                        {
                            errors.password?.type === 'minLength' && (<p className='text-secondary'>Minimum 6 characters are required!</p>)
                        }
                        {
                            errors.password?.type === 'required' && (<p className='text-secondary'>Password is required!</p>)
                        }
                        <button className="py-1 px-8 w-full bg-primary rounded-xl text-xl hover:cursor-pointer hover:text-secondary hover:shadow-2xs shadow-secondary transition-transform duration-300">Register</button>
                        <div className='text-[#71717A] text-xl'>Already have an account? <Link className='text-primary hover:text-secondary transition-transform duration-300' to='/signin'>Sign in</Link></div>
                    </fieldset>
                </form>
            </div>
            <div className='bg-[#fafdf0] w-2xl flex items-center '>
                <img src={authImg} className='' alt="" />
            </div>
        </div>
    );
};

export default Register;