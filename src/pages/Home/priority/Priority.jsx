import React from 'react';
import loc from '../../../assets/location-merchant.png'
import flow from '../../../assets/be-a-merchant-bg.png'
const Priority = () => {
    return (
        <div>
            <div className="flex h-109 w-full bg-secondary rounded-4xl mb-25">
                <img className='absolute ms-10' src={flow} alt="" />
                <div className='py-20 pl-20 '>
                    <h1 className='text-white font-bold text-4xl'>Merchant and Customer Satisfaction<br /> is Our First Priority</h1>
                    <p className='text-[#DADADA] pt-4 pb-8'>
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className='flex gap-4'>
                        <button className='bg-primary text-secondary py-4 w-60 rounded-full border-none hover:cursor-pointer hover:shadow-[0_10px_25px_rgba(190,230,100,0.35)]'>Become a Merchant</button>
                        <button className='border-primary border text-primary bg-secondary py-4 w-60 rounded-full hover:cursor-pointer hover:shadow-[0_10px_25px_rgba(190,230,100,0.35)]'>Earn with Zapper Courier</button>
                    </div>
                </div>
                <img className='w-132 h-75 pr-15 pt-20' src={loc} alt="" />
            </div>
        </div>
    );
};

export default Priority;