import React, { useRef } from 'react'
import Container from '../common/Container'
import BgrTitle from '../common/BgrTitle'
import Flex from '../common/Flex'
import MainTitle from '../common/MainTitle'
import { FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import Product from './Product'
import Button from '../common/Button'

// Import Swiper styles
import { Navigation, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const ExploreProduct = () => {

// const prevRef = useRef(null);
// const nextRef = useRef(null);
  return (
   <>
   <div className="py-10">
    <Container>
        <div className="">
            <BgrTitle bgrText={'Our Products'}/>
            <MainTitle className={'pb-10 pt-5'} mainText={'Explore Our Products'}/>
          {/* install Swiper modules */}
     <div className="relative">
        <div className="absolute -top-30 right-13 z-40">
        <div className="explore-prev bg-productC w-[30px] h-[30px] rounded-full flex justify-center items-center absolute top-10 right-13 z-40 cursor-pointer"><FaArrowLeftLong/></div>
        <div  className="explore-next bg-productC w-[30px] h-[30px] rounded-full flex justify-center items-center absolute top-10 right-1 z-40 cursor-pointer"><FaArrowRightLong/></div>
    </div>
        <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={4}
      navigation={{
      prevEl: '.explore-prev',
      nextEl: '.explore-next',
    }}     
      pagination={{ clickable: true }} 
      className="overflow-hidden"
    >
      <SwiperSlide>
        <Product/>
      </SwiperSlide>
      <SwiperSlide>
        <Product/>
      </SwiperSlide>
      <SwiperSlide>
        <Product/>
      </SwiperSlide>
      <SwiperSlide>
        <Product/>
      </SwiperSlide>
      <SwiperSlide>
        <Product/>
      </SwiperSlide>
    </Swiper>
     </div>
      <div className="flex justify-center pt-25">
          <Button  btnText={'View All Products'}/>
      </div>
        </div>
    </Container>
   </div>
   </>
  )
}

export default ExploreProduct