import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bigdel from '../../../assets/big-deliveryman.png'
import tinydel from '../../../assets/tiny-deliveryman.png'
import banner1 from '../../../assets/banner/banner2.png'
import banner2 from '../../../assets/banner/banner3.png'
const Banner = () => {
    return (


        <Carousel className='mt-5 mb-5' showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={true}>
            <div className='w-full h-146 bg-white rounded-2xl py-16 px-25 flex gap-10'>
                <div className='w-157'>
                    <img className='h-30 px-10' src={tinydel} alt="" />
                    <p className='text-secondary text-start font-bold text-5xl pt-4'>We Make Sure Your<br /> <span className='text-base-100'>Parcel Arrives</span> On Time<br /> – No Fuss.</p>
                    <p className='text-accent text-start pt-4 pb-8'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                    <div className=' gap-3 flex'>
                        <button className='btn rounded-full bg-primary' >Track Your Parcel</button>
                        <button className='btn' >Be A Rider</button>
                    </div>
                </div>
                <div>
                    <img className='object-contain h-112 max-w-full' src={bigdel} alt="" />
                </div>

            </div>
            <div>
                <img className='h-146' src={banner1}/>
                
            </div>
            <div>
                <img className='h-146' src={banner2} />
                
            </div>
        </Carousel>

    );
};

export default Banner;