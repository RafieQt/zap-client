import React from 'react';
import Logo from '../../../components/logo/Logo';
import { NavLink, Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Navbar = () => {
    const { logout, user } = useAuth();
    const links = <>
        <li><NavLink>Services</NavLink></li>
        <li><NavLink to='/coverage'>Coverage</NavLink></li>
        <li><NavLink to='/aboutUs'>About Us</NavLink></li>
        <li><NavLink to=''>Pricing</NavLink></li>
        {user && <li><NavLink to='/sendParcel'>Send Parcel</NavLink></li>}
        <li><NavLink>Blog</NavLink></li>
        <li><NavLink>Contact</NavLink></li>

    </>

    

    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error.code));
    }

    return (
        <div>
            <div className="navbar bg-white rounded-2xl shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <Logo></Logo>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">

                    {
                        user ? <div className='flex gap-3'>
                            <img className='rounded-full w-9 h-9 border-black' src={user.photoURL} alt="" />
                            <Link onClick={handleLogout} to="/" className="btn rounded-xl">Logout</Link>
                        </div> :

                            <div className=''>
                                <Link to="signin" className="btn rounded-xl">Sign in</Link>
                            </div>

                    }
                    <Link to="/rider" className="btn rounded-xl bg-primary  ml-3">Be a rider</Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;