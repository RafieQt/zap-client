import React from 'react';
import live from '../../../assets/live-tracking.png'
import delivery from '../../../assets/safe-delivery.png'
const Details = () => {
    return (
        <div>
            <div className=' flex flex-col gap-6'>

                <div className='h-66 p-8 rounded-3xl bg-white w-full flex items-center'>
                    <div>
                        <img className='h-50 w-53' src={live} alt="" />
                    </div>
                    <div class="h-[80%] w-px border-r border-dashed border-secondary px-12 "></div>
                    <div className='pl-12'>
                        <h1 className='font-semibold text-secondary text-2xl pb-4'>Live Parcel Tracking</h1>
                        <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                    </div>
                </div>
                <div className='h-66 p-8 rounded-3xl bg-white w-full flex items-center'>
                    <div>
                        <img className='h-50 w-53' src={delivery} alt="" />
                    </div>
                    <div class="h-[80%] w-px border-r border-dashed border-secondary px-12 "></div>
                    <div className='pl-12'>
                        <h1 className='font-semibold text-secondary text-2xl pb-4'>100% Safe Delivery</h1>
                        <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                    </div>
                </div>

            </div>
            <hr className='w-full border-dashed border-secondary mt-25 mb-20' />
        </div>

    );
};

export default Details;