
import Image from '../common/Image'
import hodi from '/src/assets/hodi.png'
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';
import Title from '../common/Title';
import { IoStar } from "react-icons/io5";
import { IoEyeOutline} from "react-icons/io5";


// swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
// swiper

import game_1 from "/src/assets/game_1.png"
import game_2 from "/src/assets/game_2.png"
import game_3 from "/src/assets/game_3.png"
import game_4 from "/src/assets/game_4.png"

// shadcn ui import part start
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from 'react';
// shadcn ui import part End 




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Flex from '../common/Flex';



// import required modules
// import QuckView from './QuckView';
// shadcn ui import Part End
const Product = () => {
  
const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='w-[270px] h-[300px] group'>
        <div className="bg-productC relative">
            <Image className={'m-auto pt-5'} imgSrc={hodi} imgAlt={'hodi.png'}/>
        <div className="absolute top-3 right-1 opacity-0 group-hover:opacity-100 transition-all group-hover:duration-[2s]">
            <Link to={'/'}><div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center mb-2'><IoMdHeartEmpty className='size-6 hover:text-primery'/></div></Link>
            
            {/* Quiek view Part start  */}

            <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline"><div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
                        <IoEyeOutline className="size-6 hover:text-primery" />
                      </div></Button>
        </DialogTrigger>
        <DialogContent className=" max-w-[1200px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
             <Flex>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    direction="vertical"
                    slidesPerView="4"
                    className=" w-[80px]"
                >
                    
                   <Flex className={'gap-y-2'}>
                    <SwiperSlide>
                        <Image className={'w-full '} imgSrc={game_1}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className={'w-full'} imgSrc={game_2}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className={'w-full'} imgSrc={game_3}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className={'w-full'} imgSrc={game_4}/>
                    </SwiperSlide>
                   </Flex>
                   
                </Swiper>

                <Swiper
                    loop={true}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Navigation, Thumbs]}
                    navigation={{
                    nextEl: ".next_arrews",
                    prevEl: ".prive_arrews"
                     }}
                    className="mainSwiper relative  w-[360px] group"
                >
                   
                    <SwiperSlide>
                        <Image className={'w-full'} imgSrc={game_1}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className={'w-full'} imgSrc={game_2}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className={'w-full'} imgSrc={game_3}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className={'w-full'} imgSrc={game_4}/>
                    </SwiperSlide>
                 
                    <div className="next_arrews absolute top-1/2 left-1 -translate-y-1/2 transition-all  w-[30px] h-[30px] bg-white z-40 flex justify-center items-center rounded cursor-pointer opacity-0 group-hover:opacity-100 duration-[1s] -translate-x-4 group-hover:translate-x-0">
                      <FaLongArrowAltLeft/>
                  </div>
                  <div className="prive_arrews absolute top-1/2 right-1 -translate-y-1/2 transition-all  w-[30px] h-[30px] bg-white z-40 flex justify-center items-center rounded cursor-pointer opacity-0 group-hover:opacity-100 duration-[1s] translate-x-4 group-hover:-translate-x-0">
                      <FaLongArrowAltRight/>
                  </div>
                    
                </Swiper>
                </Flex>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
    </Dialog>
          
             {/* <QuckView/> */}
            {/* Quiek view Part End */}
        </div>
        <div className="absolute -bottom-4 left-0 w-[270px] opacity-0 group-hover:opacity-100 transition-all group-hover:duration-[1s] translate-y-0 group-hover:-translate-y-3 text-center ">
          <button className='text-base text-white font-poppin font-medium leading-6 py-2 text-center bg-black w-[200px] cursor-pointer rounded-full'>Add To Cart</button>
        </div>
        </div>

        <div className="group-hover:bg-white group-hover:shadow p-3">
          <Title className={'text-base text-black font-medium font-poppin leading-6'} text={'The north coat'} as={'h5'}/>
          <Title className={'text-base text-primery font-medium font-poppin leading-6 py-1'} text={<><span>1234</span> <del className='text-gray-400 pl-3'>678</del></>} as={'h4'}/>
          <div className="flex items-center gap-x-1">
            <IoStar className='text-yellow-500 size-4'/>
            <IoStar className='text-yellow-500 size-4'/>
            <IoStar className='text-yellow-500 size-4'/>
            <IoStar className='text-yellow-500 size-4'/>
            <IoStar className='text-yellow-500 size-4'/>
            <span className='text-sm text-gray-500 font-semibold'>(34)</span>
          </div>
        </div>
    </div>

  )
}

export default Product