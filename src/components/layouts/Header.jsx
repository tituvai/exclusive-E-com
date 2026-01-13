import React, { useState } from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import { Link } from 'react-router-dom'
import Shop from '../icon/Shop'
import Heard from '../icon/Heard'
import { IoIosSearch } from "react-icons/io";

// shadcn ui import 
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
// shadcn ui import 

const Header = () => {

    // Active part Start 
    const[menuActive, setMenuActive] =useState(false);

    const heandelActive = (index)=>{
        setMenuActive(index)
    }
    // Active part End

    
  return (
    <>
    <div className="border-b-1 border-borderC">
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
                    {name:"Contact", path:'/contact'},
                    {name:"About", path:'/about'},
                    {name:"Sign Up", path:'/registration'},
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
            <Link to={'/cart'}><Shop/></Link>
            {/* Wish part start  */}

                <div className="">
                <Sheet>
                <SheetTrigger asChild className='bg-white'>
                <Button variant={'secondary'} ><Heard className={'cursor-pointer'}/></Button>
                </SheetTrigger>
                <SheetContent className={'bg-white shadow'}>
                    <SheetHeader>
                    <SheetTitle className={'pt-10'}>Wish List</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>
                </div>
            {/* Wish part End */}
        </div>
        </Flex>

        


    </Container>
    </div>
    </>
  )
}

export default Header