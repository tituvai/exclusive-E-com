import React from 'react'
import Image from '../common/Image'
import hodi from '/src/assets/hodi.png'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Product = () => {
  return (
    <div className='w-[270px] h-[250px] '>
        <div className="bg-productC relative">
            <Image className={'m-auto pt-8'} imgSrc={hodi} imgAlt={'hodi.png'}/>
        <div className="absolute top-3 right-3">
            <Link to={'/'}><div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center mb-2'><IoMdHeartEmpty className='size-6 hover:text-primery'/></div></Link>
            <Link to={'/'}><div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center'><IoEyeOutline className='size-6 hover:text-primery'/></div></Link>
           
        </div>
        </div>
    </div>
  )
}

export default Product