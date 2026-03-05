import React from 'react';
import quote from '../../assets/reviewQuote.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';
const ReviewCard = ({ reviews }) => {
    return (
        <div className='pb-25 swiper-wrapper-container'>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                
                coverflowEffect={{
                    
                    rotate: 0,
                    depth: 300,
                    stretch: '40%',
                    
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper pb-16"
            >
                {
                    reviews.map(review => (
                        <SwiperSlide key={review.id}>
                            <div className='w-102 h-78 bg-white p-8 rounded-3xl'>
                                <img className='w-12 h-12' src={quote} alt="" />
                                <p className='text-[#606060] mt-2 pb-6'>{review.review}</p>
                                <hr className='w-full border-dashed border-secondary pb-6' />
                                <div className='flex items-center gap-4'>
                                    <img className='rounded-full h-12 w-12' src={review.user_photoURL} alt="" />
                                    <div>
                                        <h1 className='text-secondary text-xl font-bold pb-1'>{review.userName}</h1>
                                        <p className='text-[#606060]'>rating: {review.ratings}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>


        </div>
    );
};

export default ReviewCard;