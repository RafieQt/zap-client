import React from 'react';
import Marquee from "react-fast-marquee";
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moon from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import people from '../../../assets/brands/start_people.png'
import amazonv from '../../../assets/brands/amazon_vector.png'

const Helped = () => {
    return (
        <div className=''>
            <h1 className='text-secondary font-bold text-center text-3xl mb-10'>We've helped thousands of sales teams</h1>
            <Marquee gradient={true} gradientColor='#EAECED'>
                <img className='mx-12' src={amazon} alt="" />
                <img className='mx-12' src={randstad} alt="" />
                <img className='mx-12' src={moon} alt="" />
                <img className='mx-12' src={casio} alt="" />
                <img className='mx-12' src={amazonv} alt="" />
                <img className='mx-12' src={star} alt="" />
                <img className='mx-12' src={people} alt="" />
            </Marquee>
            <hr className='w-full border-dashed border-secondary mt-25 mb-20' />
        </div>
    );
};

export default Helped;