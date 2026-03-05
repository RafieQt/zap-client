import React from 'react';
import sol from '../../../assets/solution.png'
import cov from '../../../assets/coverage.png'
import cash from '../../../assets/cash.png'
import corpo from '../../../assets/corpo.png'
import parcel from '../../../assets/parcel.png'


const Services = () => {
    return (
        <div className='h-250 bg-secondary rounded-4xl py-25 px-20 mb-25'>
            <h1 className='font-bold text-4xl text-white text-center pb-4'>Our Services</h1>
            <p className='text-center pb-8 text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            <div className='grid grid-cols-3 gap-6 container mx-auto'>
                <div className='w-90 h-86 bg-white rounded-3xl flex flex-col items-center px-6 py-8 hover:scale-105 transition-transform duration-300'>
                    <img className='w-22 h-22' src="https://img.icons8.com/?size=100&id=FGgtM30pppWu&format=png&color=000000" alt="" />
                    <h1 className='text-2xl text-secondary font-semibold py-4 text-center'>Express  & Standard Delivery</h1>
                    <p className='text-accent text-center'>We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.</p>
                </div>
                <div className='w-90 h-86 bg-white rounded-3xl flex flex-col items-center px-6 py-8 hover:scale-105 transition-transform duration-300'>
                    <img className='w-22 h-22' src={cov} alt="" />
                    <h1 className='text-2xl text-secondary font-semibold py-4 text-center'>Nationwide Delivery</h1>
                    <p className='text-accent text-center'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.</p>
                </div>
                <div className='w-90 h-86 bg-white rounded-3xl flex flex-col items-center px-6 py-8 hover:scale-105 transition-transform duration-300'>
                    <img className='w-22 h-22' src={sol} alt="" />
                    <h1 className='text-2xl text-secondary font-semibold py-4 text-center'>Fulfillment Solution</h1>
                    <p className='text-accent text-center'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>
                <div className='w-90 h-86 bg-white rounded-3xl flex flex-col items-center px-6 py-8 hover:scale-105 transition-transform duration-300'>
                    <img className='w-22 h-22' src={cash} alt="" />
                    <h1 className='text-2xl text-secondary font-semibold py-4 text-center'>Cash on Home Delivery</h1>
                    <p className='text-accent text-center'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>
                <div className='w-90 h-86 bg-white rounded-3xl flex flex-col items-center px-6 py-8 hover:scale-105 transition-transform duration-300'>
                    <img className='w-22 h-22' src={corpo} alt="" />
                    <h1 className='text-2xl text-secondary font-semibold py-4 text-center'>Corporate Service / Contract In Logistics</h1>
                    <p className='text-accent text-center'>Customized corporate services which includes warehouse and inventory management support.</p>
                </div>
                <div className='w-90 h-86 bg-white rounded-3xl flex flex-col items-center px-6 py-8 hover:scale-105 transition-transform duration-300'>
                    <img className='w-22 h-22' src={parcel} alt="" />
                    <h1 className='text-2xl text-secondary font-semibold py-4 text-center'>Parcel Return</h1>
                    <p className='text-accent text-center'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;