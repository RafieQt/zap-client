import React from 'react';
import locgif from '../../../assets/location.gif'
import cashgif from '../../../assets/cash.gif'
import delgif from '../../../assets/delivery.gif'
import corpgif from '../../../assets/corporate.gif'
const Work = () => {
    return (
        <div className='mb-25'>
            <p className='text-3xl font-bold text-secondary'>How it Works</p>
            <div className='flex gap-6 mt-8'>
                <div className='w-75 h-65 rounded-3xl bg-white py-9 px-8'>
                    <div>
                        <img className='w-12 pb-6' src={locgif} alt="" />
                        <h1 className='text-secondary font-semibold text-xl pb-4'>Booking Pick & Drop</h1>
                        <p className='text-accent'>From personal parcels to business shipments — seamless pick & drop service.</p>
                    </div>
                </div>
                <div className='w-75 h-65 rounded-3xl bg-white py-9 px-8'>
                    <div>
                        <img className='w-12 pb-6' src={cashgif} alt="" />
                        <h1 className='text-secondary font-semibold text-xl pb-4'>Cash On Delivery</h1>
                        <p className='text-accent'>From doorstep payments to secure transactions — we make Cash on Delivery simple and reliable.</p>
                    </div>
                </div>
                <div className='w-75 h-65 rounded-3xl bg-white py-9 px-8'>
                    <div>
                        <img className='w-12 pb-6' src={delgif} alt="" />
                        <h1 className='text-secondary font-semibold text-xl pb-4'>Delivery Hub</h1>
                        <p className='text-accent'>Streamlining shipments from hub to doorstep with precision and speed.</p>
                    </div>
                </div>
                <div className='w-75 h-65 rounded-3xl bg-white py-9 px-8'>
                    <div>
                        <img className='w-12 pb-6' src={corpgif} alt="" />
                        <h1 className='text-secondary font-semibold text-xl pb-4'>Booking SME & Corporate</h1>
                        <p className='text-accent'>Tailored booking solutions for SMEs and corporate enterprises — efficient, scalable, and dependable.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;