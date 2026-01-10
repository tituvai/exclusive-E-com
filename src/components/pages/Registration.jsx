import React from 'react'
import Container from '../common/Container'
import Image from '../common/Image'
import signupI from '/src/assets/signup.png'
import Title from '../common/Title'
import Flex from '../common/Flex'
import Button from '../common/Button'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <>
    <div className="py-15">
        <Container>
           <Flex className={'items-center'}>
             <div className="w-[60%]">
                <picture>
                    <Image className={'w-full'} imgSrc={signupI} imgAlt={"signup.png"}/>
                </picture>
            </div>
            <div className="w-[30%]">
                <Title className={'text-4xl text-black font-inter font-medium leading-8 tracking-[4%]'} text={'Create an account'} as={'h4'}/>
                <Title className={'text-base text-black font-poppin pt-5 leading-6'} text={'Create an account'} as={'h5'}/>

                <div className="">
                    <form action="#">
                        <input className='text-base text-black font-poppin leading-6 placeholder:text-gray-500 block focus:outline-0 border-b-1 border-borderC w-full p-3 mt-5' type="text" placeholder='Name' />
                        <input className='text-base text-black font-poppin leading-6 placeholder:text-gray-500 block focus:outline-0 border-b-1 border-borderC w-full p-3 mt-5' type="text" placeholder='Email or Phone Number' />
                        <input className='text-base text-black font-poppin leading-6 placeholder:text-gray-500 block focus:outline-0 border-b-1 border-borderC w-full p-3 mt-5' type="text" placeholder='Password' />
                        <div className="py-5">
                            <Button className={'w-full py-4'} btnText={"Create Account"}/>
                        </div>
                    </form>
                    <div className="w-full py-3.5 border-1 border-borderC flex justify-center items-center cursor-pointer shadow gap-x-4 ">
                        <FcGoogle className='size-6'/>
                        <Title className={'text-base text-black font-poppin  leading-6'} text={'Sign up with Google'} as={'h5'}/>
                    </div>
                    <div className="flex justify-center gap-x-1 pt-10">
                        <Title className={'text-base text-black font-poppin  leading-6'} text={'Already have account?'} as={'h5'}/>
                        <Link to={'/login'}><span className='text-base text-black font-poppin font-medium leading-6 border-b-1 p-1 border-black'>Log in</span></Link>
                    </div>
                </div>
            </div>
           </Flex>
        </Container>
    </div>
    </>
  )
}

export default Registration