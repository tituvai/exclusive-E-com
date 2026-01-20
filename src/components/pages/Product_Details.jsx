
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import Flex from '../common/Flex'
import Image from '../common/Image'
import game from '/src/assets/gameing.png'
import game_1 from '/src/assets/game_1.png'
import game_2 from '/src/assets/game_2.png'
import game_3 from '/src/assets/game_3.png'
import game_4 from '/src/assets/game_4.png'
import Title from '../common/Title'
import { IoIosStar } from "react-icons/io";
import Peragrap from '../common/Peragrap'
import Button from '../common/Button'
import { FaRegHeart } from "react-icons/fa6";
import car from '/src/assets/cor.png'
import retur from '/src/assets/return.png'
import BgrTitle from '../common/BgrTitle'
import Product from '../section/Product'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";

// swiper Slider Paer Start 

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// swiper Slider Paer End

const Product_Details = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="py-15">
        <Container>
            <div className="">
                <ul className='flex gap-x-5'>
                    {[
                        {name:'Account', path:'/'},
                        {name:'/'},
                        {name:'Gaming', path:'/'},
                        {name:'/'},
                        {name:'Havic HV G-92 Gamepad', path:'/'},
                    ].map((item, index)=>(
                    <Link to={item.path} key={index}><li className='text-gray-500 font-poppin text-sm leading-6'>{item.name}</li></Link>
                    ))}
                </ul>
            </div>
            <Flex className={'pt-10'}>
                <div className="w-[60%]">
                 {/* swiper Slider Part Start  */}
                <Flex>
                <div className="w-[18%]">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    direction="vertical"
                    slidesPerView="auto"
                    spaceBetween={10}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="thumbSwiper h-full"
                >
                    {[game_1, game_2, game_3, game_4].map((item, index) => (
                    <SwiperSlide key={index} className="!h-auto">
                        <div className="thumb-item">
                        <Image className={'w-full'} imgSrc={item} />
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
                </div>

                <div className="w-[78%]">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Navigation, Thumbs]}
                    navigation={{
                    nextEl: ".next_arrews",
                    prevEl: ".prive_arrews"
                     }}
                    className="mainSwiper relative group"
                >
                    {[game_1, game_2, game_3, game_4].map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image className={'w-full'} imgSrc={item} />
                    </SwiperSlide>
                    ))}
                    <div className="next_arrews absolute top-1/2 left-1 -translate-y-1/2 transition-all  w-[30px] h-[30px] bg-white z-40 flex justify-center items-center rounded cursor-pointer opacity-0 group-hover:opacity-100 duration-[1s] -translate-x-4 group-hover:translate-x-0">
                        <FaLongArrowAltLeft/>
                    </div>
                    <div className="prive_arrews absolute top-1/2 right-1 -translate-y-1/2 transition-all  w-[30px] h-[30px] bg-white z-40 flex justify-center items-center rounded cursor-pointer opacity-0 group-hover:opacity-100 duration-[1s] translate-x-4 group-hover:-translate-x-0">
                        <FaLongArrowAltRight/>
                    </div>
                </Swiper>
                </div>
                </Flex>
                {/* swiper Slider Part End */}
                </div>
                <div className="w-[38%]">
                    <Title className={'text-2xl text-black font-inter font-semibold leading-6'} text={'Havic HV G-92 Gamepad'} as={'h4'}/>
                    <div className="flex items-center gap-x-5 pt-2">
                        <div className="flex items-center gap-x-1">
                            <IoIosStar className='size-4 text-yellow-500'/>
                            <IoIosStar className='size-4 text-yellow-500'/>
                            <IoIosStar className='size-4 text-yellow-500'/>
                            <IoIosStar className='size-4 text-yellow-500'/>
                            <IoIosStar className='size-4 text-yellow-500'/>
                            <span className='text-gray-500 text-sm font-inter'>(123 reviewS)</span>
                        </div>
                        <div className="w-[2px] h-[20px] bg-gray-500"></div>
                        <div className="flex items-center">
                            <Title className={'text-sm text-offerC font-poppin leading-5'} text={'In Stock'} as={'h6'}/>
                            <span className='text-sm text-offerC font-poppin font-semibold'>(34)</span>
                        </div>
                    </div>
                    <Title className={'text-2xl text-black font-inter leading-6 py-3'} text={'$192.00'} as={'h4'}/>
                    <Peragrap className={'text-black pb-5'} peraText={'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.'}/>
                    <div className="flex items-center gap-x-5 py-6 border-t-2 border-borderC">
                        <Title className={'text-xl text-black font-inter leading-5'} text={'Colours :'} as={'h6'}/>
                        <div className="flex items-center gap-x-1">
                            <div className="w-[20px] h-[20px] rounded-full bg-gray-500"></div>
                            <div className="w-[20px] h-[20px] rounded-full bg-primery"></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <Title className={'text-xl text-black font-inter leading-5'} text={'Size :'} as={'h6'}/>
                        <div className="flex items-center gap-x-2">
                            <Title className={'w-[30px] text-sm text-black font-medium font-poppin leading-5 p-1 text-center border-2 rounded border-borderC cursor-pointer hover:bg-primery hover:text-white transition-all duration-[1s] uppercase'} text={'xs'} as={'h6'}/>
                            <Title className={'w-[30px] text-sm text-black font-medium font-poppin leading-5 p-1 text-center border-2 rounded border-borderC cursor-pointer hover:bg-primery hover:text-white transition-all duration-[1s] uppercase'} text={'s'} as={'h6'}/>
                            <Title className={'w-[30px] text-sm text-black font-medium font-poppin leading-5 p-1 text-center border-2 rounded border-borderC cursor-pointer hover:bg-primery hover:text-white transition-all duration-[1s] uppercase'} text={'m'} as={'h6'}/>
                            <Title className={'w-[30px] text-sm text-black font-medium font-poppin leading-5 p-1 text-center border-2 rounded border-borderC cursor-pointer hover:bg-primery hover:text-white transition-all duration-[1s] uppercase'} text={'l'} as={'h6'}/>
                            <Title className={'w-[30px] text-sm text-black font-medium font-poppin leading-5 p-1 text-center border-2 rounded border-borderC cursor-pointer hover:bg-primery hover:text-white transition-all duration-[1s] uppercase'} text={'xl'} as={'h6'}/>
                        </div>
                    </div>

                    <div className=" flex items-center gap-x-7 py-8">
                        <div className="flex items-center justify-between w-[100px] border-2  border-borderC rounded">
                            <span className='font-bold text-base border-r-2 border-borderC px-3 hover:bg-primery hover:text-white cursor-pointer py-1 flex justify-center items-center w-[30px]'>-</span>
                            <span>1</span>
                            <span className='font-bold text-base border-l-2 border-borderC px-3 hover:bg-primery hover:text-white cursor-pointer py-1 flex justify-center items-center w-[30px]'>+</span>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <Button btnText={'Buy Now'}/>
                            <div className="w-[30px] flex justify-center items-center rounded border-2 border-borderC py-1"><FaRegHeart className='hover:text-primery size-4'/></div>
                        </div>
                    </div>
                    <div className="w-[399px] border-2 border-borderC"> 
                        <div className="flex items-center gap-x-5 border-b-2 border-borderC p-4">
                            <Image imgSrc={car} imgAlt={'cor.png'}/>
                            <div className="">
                                <Title className={'text-base text-black font-poppin font-medium leading-6'} text={'Free Delivery'} as={'h6'}/>
                                <Peragrap className={'text-black'} peraText={'Enter your postal code for Delivery Availability'}/>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-5  p-4">
                            <Image imgSrc={retur} imgAlt={'return.png'}/>
                            <div className="">
                                <Title className={'text-base text-black font-poppin font-medium leading-6'} text={'Return Delivery'} as={'h6'}/>
                                <Peragrap className={'text-black'} peraText={'Free 30 Days Delivery Returns. Details'}/>
                            </div>
                        </div>
                    </div>

                </div>
            </Flex>

        
            <div className="py-20">
                <div className="pb-10">
                    <BgrTitle bgrText={'Related Item'}/>
                </div>

                <div className="relative">
                <div className="absolute -top-30 right-13 z-40">
                <div className="explore-next bg-productC w-[30px] h-[30px] rounded-full flex justify-center items-center absolute top-10 right-13 z-40 cursor-pointer"><FaArrowLeftLong/></div>
                <div  className=" explore-prev bg-productC w-[30px] h-[30px] rounded-full flex justify-center items-center absolute top-10 right-1 z-40 cursor-pointer"><FaArrowRightLong/></div>
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
            </div>


        </Container>
    </div>
  )
}

export default Product_Details