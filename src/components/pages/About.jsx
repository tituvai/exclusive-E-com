import React from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import Flex from '../common/Flex'
import Image from '../common/Image'
import about from '/src/assets/about.png'
import Title from '../common/Title'
import Peragrap from '../common/Peragrap'
import House from '../icon/House'
import Doller from '../icon/Doller'
import CustomarSite from '../icon/CustomarSite'
import TakaBag from '../icon/TakaBag'
import founder_1 from '/src/assets/founder_1.png'
import founder_2 from '/src/assets/founder_2.png'
import founder_3 from '/src/assets/founder_3.png'
import { SlSocialTwitter } from "react-icons/sl";
import { RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import Delivery from '../section/Delivery'

const About = () => {
  return (
    <>
    <div className="py-10">
        <Container>
            <div className="pb-10">
                <ul className='flex gap-x-5'>
                    {[
                        {name:'Home', path:'/'},
                        {name:'/'},
                        {name:'About', path:'/'},
                    ].map((item, index)=>(
                    <Link to={item.path} key={index}><li className='text-gray-500 font-poppin text-sm leading-6'>{item.name}</li></Link>
                    ))}
                </ul>
            </div>
            <Flex className={'items-center'}>
                <div className="w-[45%]">
                    <Title className={'text-[45px] text-black font-inter font-semibold leading-16 tracking-[6%] pb-5'} text={'Our Story'} as={'h4'}/>
                    <Peragrap peraText={'Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.'}/>
                    <Peragrap className={'pt-5'} peraText={'Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.'}/>
                </div>
                <div className="w-[50%]">
                    <picture>
                        <Image imgSrc={about} imgAlt={'about.png'}/>
                    </picture>
                </div>
            </Flex>

            <Flex className={'py-25'}>
                <div className="w-[270px] border-2 border-borderC rounded py-5 group flex flex-col justify-center items-center hover:bg-primery transition-all duration-[1s]">
                    <div className="w-[80px] h-[80px] rounded-full bg-gray-600 flex justify-center items-center group-hover:bg-red-300 duration-[1s]">
                        <div className="w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center group-hover:bg-white duration-[1s]"><House className={'group-hover:text-black text-white duration-[1s]'}/></div>
                    </div>
                        <Title className={'text-black text-3xl font-bold font-inter leading-8 tracking-[4%] pt-5 group-hover:text-white  duration-[1s]'} text={'10.5k'} as={'h5'}/>
                        <Title className={'text-base text-black font-poppin leading-6 pt-1 group-hover:text-white duration-[1s]'} text={'Sallers active our site'} as={'h6'}/>
                </div>
                <div className="w-[270px] border-2 border-borderC rounded py-5 group flex flex-col justify-center items-center hover:bg-primery transition-all duration-[1s]">
                    <div className="w-[80px] h-[80px] rounded-full bg-gray-600 flex justify-center items-center group-hover:bg-red-300 duration-[1s]">
                        <div className="w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center group-hover:bg-white duration-[1s]"><Doller className={'group-hover:text-black text-white duration-[1s]'}/></div>
                    </div>
                        <Title className={'text-black text-3xl font-bold font-inter leading-8 tracking-[4%] pt-5 group-hover:text-white  duration-[1s]'} text={'33k'} as={'h5'}/>
                        <Title className={'text-base text-black font-poppin leading-6 pt-1 group-hover:text-white duration-[1s]'} text={'Mopnthly Produduct Sale'} as={'h6'}/>
                </div>
                <div className="w-[270px] border-2 border-borderC rounded py-5 group flex flex-col justify-center items-center hover:bg-primery transition-all duration-[1s]">
                    <div className="w-[80px] h-[80px] rounded-full bg-gray-600 flex justify-center items-center group-hover:bg-red-300 duration-[1s]">
                        <div className="w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center group-hover:bg-white duration-[1s]"><CustomarSite className={'group-hover:text-black text-white duration-[1s]'}/></div>
                    </div>
                        <Title className={'text-black text-3xl font-bold font-inter leading-8 tracking-[4%] pt-5 group-hover:text-white  duration-[1s]'} text={'45.5k'} as={'h5'}/>
                        <Title className={'text-base text-black font-poppin leading-6 pt-1 group-hover:text-white duration-[1s]'} text={'Customer active in our site'} as={'h6'}/>
                </div>
                <div className="w-[270px] border-2 border-borderC rounded py-5 group flex flex-col justify-center items-center hover:bg-primery transition-all duration-[1s]">
                    <div className="w-[80px] h-[80px] rounded-full bg-gray-600 flex justify-center items-center group-hover:bg-red-300 duration-[1s]">
                        <div className="w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center group-hover:bg-white duration-[1s] "><TakaBag className={'group-hover:text-black text-white duration-[1s] '}/></div>
                    </div>
                        <Title className={'text-black text-3xl font-bold font-inter leading-8 tracking-[4%] pt-5 group-hover:text-white  duration-[1s] '} text={'25k'} as={'h5'}/>
                        <Title className={'text-base text-black font-poppin leading-6 pt-1 group-hover:text-white duration-[1s] '} text={'Anual gross sale in our site'} as={'h6'}/>
                </div>
            </Flex>

            <Flex>
                <div className="w-[370px] group">
                    <div className="bg-borderC flex justify-center items-center pt-2">
                        <picture>
                            <Image imgSrc={founder_1} imgAlt={'founder_1.png'}/>
                        </picture>
                    </div>
                    <div className="group-hover:shadow  p-2">
                        <Title className={'text-3xl text-black font-inter font-medium leading-7.5 tracking-[4%] pt-5'} text={'Tom Cruise'} as={'h5'}/>
                        <Title className={'text-base text-black font-poppin leading-6 py-3'} text={'Founder & Chairman'} as={'h6'}/>
                        <div className="flex items-center gap-x-5">
                            <Link to={'/'}><SlSocialTwitter/></Link>
                            <Link to={'/'}><FaInstagram/></Link>
                            <Link to={'/'}><RiLinkedinLine/></Link>
                        </div>
                    </div>
                </div>
                <div className="w-[370px] group">
                    <div className="bg-borderC flex justify-center items-center pt-2">
                        <picture>
                            <Image imgSrc={founder_2} imgAlt={'founder_2.png'}/>
                        </picture>
                    </div>
                    <div className="group-hover:shadow  p-2">
                        <Title className={'text-3xl text-black font-inter font-medium leading-7.5 tracking-[4%] pt-5'} text={'Emma Watson'} as={'h5'}/>
                        <Title className={'text-base text-black font-poppin leading-6 py-3'} text={'Managing Director'} as={'h6'}/>
                        <div className="flex items-center gap-x-5">
                            <Link to={'/'}><SlSocialTwitter/></Link>
                            <Link to={'/'}><FaInstagram/></Link>
                            <Link to={'/'}><RiLinkedinLine/></Link>
                        </div>
                    </div>
                </div>
                <div className="w-[370px] group">
                    <div className="bg-borderC flex justify-center items-center pt-2">
                        <picture>
                            <Image imgSrc={founder_3} imgAlt={'founder_3.png'}/>
                        </picture>
                    </div>
                    <div className="group-hover:shadow  p-2">
                        <Title className={'text-3xl text-black font-inter font-medium leading-7.5 tracking-[4%] pt-5'} text={'Will Smith'} as={'h5'}/>
                        <Title className={'text-base text-black font-poppin leading-6 py-3'} text={'Product Designer'} as={'h6'}/>
                        <div className="flex items-center gap-x-5">
                            <Link to={'/'}><SlSocialTwitter/></Link>
                            <Link to={'/'}><FaInstagram/></Link>
                            <Link to={'/'}><RiLinkedinLine/></Link>
                        </div>
                    </div>
                </div>
               
                
            </Flex>

            <div className="pt-20">
                <Delivery/>
            </div>
        </Container>
    </div>
    </>
  )
}

export default About