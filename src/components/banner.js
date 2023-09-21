import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './banner.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><a href='https://www.cgv.co.kr/' target='blank'><div className='cgv'></div></a></SwiperSlide>
        <SwiperSlide><a href="https://www.lottecinema.co.kr/NLCHS" target='blank'><div className='lotte'></div></a></SwiperSlide>
        <SwiperSlide><a href="https://www.megabox.co.kr/" target='blank'><div className='megabox'></div></a></SwiperSlide>
      </Swiper>
    </div>
  );
}
