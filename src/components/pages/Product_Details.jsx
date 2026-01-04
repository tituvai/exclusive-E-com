import React from 'react'
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

const Product_Details = () => {
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
                <div className="w-[60%] flex justify-between">
                    <div className="w-[25%] flex flex-col gap-y-2">
                        <picture>
                            <Image className={'w-full'} imgSrc={game_1} imgAlt={"gameing.png"}/>
                        </picture>
                        <picture>
                            <Image className={'w-full'} imgSrc={game_2} imgAlt={"gameing.png"}/>
                        </picture>
                        <picture>
                            <Image className={'w-full'} imgSrc={game_3} imgAlt={"gameing.png"}/>
                        </picture>
                        <picture>
                            <Image className={'w-full'} imgSrc={game_4} imgAlt={"gameing.png"}/>
                        </picture>
                    </div>
                    <div className="w-[70%]">
                        <picture>
                            <Image className={'w-full'} imgSrc={game} imgAlt={"gameing.png"}/>
                        </picture>
                    </div>
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

                <Flex>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </Flex>
            </div>
        </Container>
    </div>
  )
}

export default Product_Details