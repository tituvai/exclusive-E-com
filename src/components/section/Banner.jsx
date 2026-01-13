import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


import { Navigation, } from 'swiper/modules';

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
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: ".next_arrews",
        prevEl: ".prive_arrews"
      }}
      pagination={{ clickable: true }}
      className='group'
    >
      <SwiperSlide>
         <Link to={'/'}><div className='bg-[url("/src/assets/banner01.png")] bg-no-repeat bg-cover bg-center py-30 w-full' >Benner</div></Link>
      </SwiperSlide>
      <SwiperSlide>
         <Link to={'/'}><div className='bg-[url("/src/assets/banner01.png")] bg-no-repeat bg-cover bg-center py-30 w-full' >Benner</div></Link>
      </SwiperSlide>
      <SwiperSlide> <Link to={'/'}><div className='bg-[url("/src/assets/banner01.png")] bg-no-repeat bg-cover bg-center py-30 w-full' >Benner</div></Link></SwiperSlide>
      <div className="next_arrews absolute top-1/2 left-1 -translate-y-1/2 transition-all  w-[30px] h-[30px] bg-white z-40 flex justify-center items-center rounded cursor-pointer opacity-0 group-hover:opacity-100 duration-[1s] -translate-x-4 group-hover:translate-x-0">
        <FaLongArrowAltLeft/>
      </div>
      <div className="prive_arrews absolute top-1/2 right-1 -translate-y-1/2 transition-all  w-[30px] h-[30px] bg-white z-40 flex justify-center items-center rounded cursor-pointer opacity-0 group-hover:opacity-100 duration-[1s] translate-x-4 group-hover:-translate-x-0">
        <FaLongArrowAltRight/>
      </div>
    </Swiper>
   

    </>
  )
}

export default Banner