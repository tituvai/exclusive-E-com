import React from 'react'
import Image from '../common/Image'
import hodi from '/src/assets/hodi.png'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Title from '../common/Title';
import { IoStar } from "react-icons/io5";

import Flex from '../common/Flex'
import game from '/src/assets/gameing.png'
import game_1 from '/src/assets/game_1.png'
import game_2 from '/src/assets/game_2.png'
import game_3 from '/src/assets/game_3.png'
import game_4 from '/src/assets/game_4.png'
import { IoIosStar } from "react-icons/io";
import car from '/src/assets/cor.png'
import retur from '/src/assets/return.png'
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";

// shadcn ui import Part Start 
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Peragrap from '../common/Peragrap';
// shadcn ui import Part End
const Product = () => {
  return (
    <div className='w-[270px] h-[300px] group'>
        <div className="bg-productC relative">
            <Image className={'m-auto pt-5'} imgSrc={hodi} imgAlt={'hodi.png'}/>
        <div className="absolute top-3 right-1 opacity-0 group-hover:opacity-100 transition-all group-hover:duration-[2s]">
            <Link to={'/'}><div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center mb-2'><IoMdHeartEmpty className='size-6 hover:text-primery'/></div></Link>

            {/* Quiek view Part start  */}

             <div className="">
            <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" className={'p-1'}><div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center cursor-pointer'><IoEyeOutline className='size-6 hover:text-primery'/></div></Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogDescription>
                  {/* Main Containe Start  */}
                  <div className={'pt-10'}>
                <div className=" flex justify-between">
                    <div className="w-[25%] flex flex-col gap-y-2">
                        <picture>
                            <Image className={'w-full h-[70px]'} imgSrc={game_1} imgAlt={"gameing.png"}/>
                        </picture>
                        <picture>
                            <Image className={'w-full h-[70px]'} imgSrc={game_2} imgAlt={"gameing.png"}/>
                        </picture>
                        <picture>
                            <Image className={'w-full h-[70px]'} imgSrc={game_3} imgAlt={"gameing.png"}/>
                        </picture>
                        <picture>
                            <Image className={'w-full h-[70px]'} imgSrc={game_4} imgAlt={"gameing.png"}/>
                        </picture>
                    </div>
                    <div className="w-[70%]">
                        <picture>
                            <Image className={'w-full h-[300px]'} imgSrc={game} imgAlt={"gameing.png"}/>
                        </picture>
                    </div>
                </div>
                <div className="">
                    <Title className={'text-xl text-black font-inter font-semibold leading-6 pt-2'} text={'Havic HV G-92 Gamepad'} as={'h4'}/>
                    <div className="flex items-center gap-x-5 pt-2">
                      <Title className={'text-xl text-black font-inter leading-6 py-3'} text={'$192.00'} as={'h4'}/>
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
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-5 py-3">
                        <Title className={'text-lg text-black font-inter leading-5'} text={'Colours :'} as={'h6'}/>
                        <div className="flex items-center gap-x-1">
                            <div className="w-[20px] h-[20px] rounded-full bg-gray-500"></div>
                            <div className="w-[20px] h-[20px] rounded-full bg-primery"></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <Title className={'text-lg text-black font-inter leading-5'} text={'Size :'} as={'h6'}/>
                        <div className="flex items-center gap-x-2">
                            <Title className={'w-[30px] text-sm text-black font-medium font-poppin leading-5 p-1 text-center border-2 rounded border-borderC cursor-pointer hover:bg-primery hover:text-white transition-all duration-[1s] uppercase'} text={'xs'} as={'h6'}/>
                            <Title className={'w-[30px] text-sm text-black font-medium font-poppin leading-5 p-1 text-center border-2 rounded border-borderC cursor-pointer hover:bg-primery hover:text-white transition-all duration-[1s] uppercase'} text={'s'} as={'h6'}/>
                            <Title className={'w-[30px] text-sm text-black font-medium font-poppin leading-5 p-1 text-center border-2 rounded border-borderC cursor-pointer hover:bg-primery hover:text-white transition-all duration-[1s] uppercase'} text={'m'} as={'h6'}/>
                            <Title className={'w-[30px] text-sm text-black font-medium font-poppin leading-5 p-1 text-center border-2 rounded border-borderC cursor-pointer hover:bg-primery hover:text-white transition-all duration-[1s] uppercase'} text={'l'} as={'h6'}/>
                            <Title className={'w-[30px] text-sm text-black font-medium font-poppin leading-5 p-1 text-center border-2 rounded border-borderC cursor-pointer hover:bg-primery hover:text-white transition-all duration-[1s] uppercase'} text={'xl'} as={'h6'}/>
                        </div>
                    </div>
                    </div>

                    <div className=" flex items-center gap-x-7 pt-3">
                        <div className="flex items-center justify-between w-[100px] border-2  border-borderC rounded">
                            <span className='font-bold text-base border-r-2 border-borderC px-3 hover:bg-primery hover:text-white cursor-pointer py-1 flex justify-center items-center w-[30px]'>-</span>
                            <span>1</span>
                            <span className='font-bold text-base border-l-2 border-borderC px-3 hover:bg-primery hover:text-white cursor-pointer py-1 flex justify-center items-center w-[30px]'>+</span>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <Button className={'cursor-pointer'}>Buy Now</Button>
                            <div className="w-[30px] flex justify-center items-center rounded border-2 border-borderC py-1"><FaRegHeart className='hover:text-primery size-4'/></div>
                        </div>
                    </div>

                </div>
            </div>
                  {/* Main Containe End */}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className={'absolute top-2 right-2 cursor-pointer'}><MdOutlineClear/></AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
            </div>
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