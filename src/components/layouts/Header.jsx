import React, { useState } from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import { Link } from 'react-router-dom'
import Shop from '../icon/Shop'
import Heard from '../icon/Heard'
import { IoIosSearch } from "react-icons/io";

const Header = () => {

    // Active part Start 
    const[menuActive, setMenuActive] =useState(false);

    const heandelActive = (index)=>{
        setMenuActive(index)
    }
    // Active part End

    
  return (
    <>
    <Container>
        <Flex className={'py-5 items-center'}>
        <div className="">
            <picture>
                <Link to={'/'}>
                <Image imgSrc={'/src/assets/Exclusive.png'} imgAlt={'Exclusive.png'}/>
                </Link>
            </picture>
        </div>
        <div className="">
            <ul className='flex items-center gap-x-10'>
               { [
                    {name:"Home", path:'/'},
                    {name:"Contact", path:'/'},
                    {name:"About", path:'/'},
                    {name:"Sign Up", path:'/'},
                ].map((item, index)=>(
                    <Link to={item.path} key={index} onClick={()=>heandelActive(index)}><li className={`text-base font-poppin text-black hover:border-b-2 border-black ${menuActive === index ? ' border-b-2 border-red-500' : ''}`}>{item.name}</li></Link>
                ))}
            </ul>
        </div>
        <div className="flex items-center gap-x-10">
            <div className="relative bg-gray-100 pr-10">
                <input className='font-poppin text-xs text-black placeholder:text-gray-500  p-2 outline-0' type="text" placeholder='What are you looking for?' />
               <Link to={'/'}> <span className='absolute top-1/2 right-3 -translate-y-1/2'><IoIosSearch className='size-5'/></span></Link>
            </div>
            <Link to={'/'}><Shop/></Link>
            <Link to={'/'}><Heard/></Link>
        </div>
        </Flex>
    </Container>
    </>
  )
}

export default Header