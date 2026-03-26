import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const DashboardLogo = () => {
    return (
        <div>
            <Link to='/'>
            <div className='flex items-end w-5 h-5'>
                <img className='' src={logo} alt="" />
                <h3 className='text-xs -ms-2 font-semibold'>Z</h3>
            </div>
        </Link>
        </div>
    );
};

export default DashboardLogo;