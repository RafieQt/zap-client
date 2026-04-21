import React, { useRef } from 'react';

import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.init';
import Swal from 'sweetalert2';
import GoogleLogin from '../../shared/googleLogin/GoogleLogin';
import profileImage from '../../../assets/profileImage.png'
import axios from 'axios';
import Lottie from 'lottie-react';
import regAnimation from '../../../assets/animations/register.json'




const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = useAuth();
    const fileRef = useRef(null);
    const { ref, ...rest } = register("photo", { required: true });


    const location = useLocation();
    const navigate = useNavigate();

    const handleRegistration = async (data) => {

        console.log("data", data);

        const profileImg = data.photo[0];
        const formData = new FormData();
        formData.append("image", profileImg);
        const imageAPIURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`
        const imgUpload = await axios.post(imageAPIURL, formData);
        const imageURL = imgUpload.data.data.url;

        registerUser(data.email, data.password)
            .then(res => {
                const user = res.user;

                // Update profile
                return updateProfile(user, {
                    displayName: data.name,
                    photoURL: imageURL
                }).then(() => {
                    // Return user info for next .then()
                    return {
                        email: data.email,
                        displayName: data.name,
                        photoURL: imageURL
                    };
                });
            })
            .then(userInfo => {
                // Create user in database - using regular axios
                return axios.post('http://localhost:3000/users', userInfo);
            })
            .then(res => {
                if (res.data.insertedId) {
                    console.log("user created in database.")
                }
                console.log(auth.currentUser);

                // Navigate only after everything is done
                navigate(location?.state || "/");
            })
            .catch(error => {
                if (error.code == "auth/email-already-in-use") {
                    Swal.fire({
                        title: "The email is already used!",
                        imageUrl: "https://img.icons8.com/?size=100&id=13826&format=png&color=000000",
                        imageWidth: 100,
                        imageHeight: 100,
                        imageAlt: "Custom image"
                    });
                } else {
                    console.error("Registration error:", error);
                }
            });
    }



    return (
        <div className='bg-white w-full h-170 rounded-2xl mt-5 mb-5 flex overflow-hidden'>
            <div className='bg-white w-[50%] flex flex-col items-center justify-center'>
                <form className='w-96' onSubmit={handleSubmit(handleRegistration)}>
                    <div className='text-[42px] font-extrabold text-center mb-1'>Create an Account</div>
                    <fieldset className="fieldset">
                        {/* image */}
                        <input {...rest} ref={(e) => {
                            ref(e);
                            fileRef.current = e;
                        }} className='hidden' type="file" name="photo" id="" placeholder='' />
                        <label className="label text-sm font-semibold">Profile Image</label>
                        <div onClick={() => fileRef.current.click()} className='w-12 h-12 rounded-full hover:cursor-pointer'>
                            <img src={profileImage} className='hover:cursor-pointer' alt="" />
                        </div>
                        {
                            errors.photo?.type === 'required' && (<p className='text-secondary'>Profile picture is required!</p>)
                        }
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
                        {/* register button */}
                        <button className="py-1 mt-2 px-8 w-full bg-primary rounded-sm text-xl hover:cursor-pointer hover:text-secondary hover:shadow-2xs shadow-secondary transition-transform duration-300">Register</button>
                        <div className='text-[#71717A] text-xl'>Already have an account? <Link state={location.state} className='text-primary hover:text-secondary transition-transform duration-300' to='/signin'>Sign in</Link></div>
                    </fieldset>
                </form>
                <GoogleLogin></GoogleLogin>
            </div>
            <div className='bg-[#fafdf0] w-2xl flex items-center '>
                {/* <img src={authImg} className='' alt="" /> */}
                <Lottie className='w-116 mx-auto'
                    animationData={regAnimation}
                    loop={true}
                    autoplay={true}
                />
            </div>
        </div>
    );
};

export default Register;