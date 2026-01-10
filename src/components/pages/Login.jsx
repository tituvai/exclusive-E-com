import React from 'react'
import Container from '../common/Container'
import Image from '../common/Image'
import signupI from '/src/assets/signup.png'
import Title from '../common/Title'
import Flex from '../common/Flex'
import Button from '../common/Button'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom'


const Login = () => {
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
                <Title className={'text-4xl text-black font-inter font-medium leading-8 tracking-[4%]'} text={'Log in to Exclusive'} as={'h4'}/>
                <Title className={'text-base text-black font-poppin pt-5 leading-6'} text={'Enter your details below'} as={'h5'}/>

                <div className="">
                    <form action="#">
                        <input className='text-base text-black font-poppin leading-6 placeholder:text-gray-500 block focus:outline-0 border-b-1 border-borderC w-full p-3 mt-5' type="text" placeholder='Email or Phone Number' />
                        <input className='text-base text-black font-poppin leading-6 placeholder:text-gray-500 block focus:outline-0 border-b-1 border-borderC w-full p-3 mt-5' type="text" placeholder='Password' />
                        <div className="py-5 flex justify-between items-center">
                            <Button className={''} btnText={"Log In"}/>
                            <Link><span className='text-base text-primery font-poppin leading-6'>Forget Password?</span></Link>
                        </div>
                    </form> 
                </div>
            </div>
           </Flex>
        </Container>
    </div>
    </>
  )
}

export default Login