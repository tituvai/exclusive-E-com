import React from 'react'
import { Link } from 'react-router-dom'


import { Navigation, Pagination,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
         <Link to={'/'}><div className='bg-[url("/src/assets/banner01.png")] bg-no-repeat bg-cover bg-center py-30 w-full' >Benner</div></Link>
      </SwiperSlide>
      <SwiperSlide>
         <Link to={'/'}><div className='bg-[url("/src/assets/banner01.png")] bg-no-repeat bg-cover bg-center py-30 w-full' >Benner</div></Link>
      </SwiperSlide>
      <SwiperSlide> <Link to={'/'}><div className='bg-[url("/src/assets/banner01.png")] bg-no-repeat bg-cover bg-center py-30 w-full' >Benner</div></Link></SwiperSlide>
    </Swiper>
   

    </>
  )
}

export default Banner