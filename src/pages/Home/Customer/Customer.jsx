import React from 'react';
import trolly from '../../../assets/customer-top.png'

import SwipperReview from '../swipper/SwipperReview';
const Customer = () => {

    
    return (
        <div>
            <div className='flex flex-col items-center'>
                <img src={trolly} alt="" />
                <h1 className="text-secondary text-4xl font-bold mt-10 mb-6">What our customers are sayings</h1>
                <p className='mb-10 text-[#606060] text-center'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
            </div>
            <SwipperReview></SwipperReview>
        </div>
    );
};

export default Customer;