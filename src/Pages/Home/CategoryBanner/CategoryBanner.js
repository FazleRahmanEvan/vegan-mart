import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './CategoryBanner.css';

// import required modules
import {Autoplay, Pagination } from 'swiper/modules';
import './CategoryBanner.css'


const CategoryBanner = () => {
    return (
        <div className='mt-6 bg-primary'>

          

<>
      <Swiper
        pagination={{
          dynamicBullets: true,
          autoPlay:true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/cbJkSPQ/Frame-560.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/RQxYk1B/B3.png" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
          


        </div>
    );
};

export default CategoryBanner;