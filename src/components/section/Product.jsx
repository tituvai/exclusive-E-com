import React from 'react'
import Image from '../common/Image'
import hodi from '/src/assets/hodi.png'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Title from '../common/Title';
import { IoStar } from "react-icons/io5";

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
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
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
    {/* quick view Part Start  */}
    </div>

  )
}

export default Product