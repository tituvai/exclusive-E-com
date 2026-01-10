import React from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import Title from '../common/Title'
import Image from '../common/Image'
import tv from '/src/assets/tv.png'
import game from '/src/assets/ganepad.png'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";
import Flex from '../common/Flex'
import Button from '../common/Button'


const Cart = () => {
  return (
    <>
    <div className="pb-25">
        <Container>
               <div className="py-10">
                <ul className='flex gap-x-5'>
                    {[
                        {name:'Home', path:'/'},
                        {name:'/'},
                        {name:'Cart', path:'/'},
                    ].map((item, index)=>(
                    <Link to={item.path} key={index}><li className='text-gray-500 font-poppin text-sm leading-6'>{item.name}</li></Link>
                    ))}
                </ul>
            </div>
            <div className="flex items-center justify-between shadow p-3">
                <Title className={'w-[40%] text-base text-black font-poppin leading-6'} text={'Product'} as={'h5'}/>
                <Title className={'w-[25%] text-base text-black font-poppin leading-6'} text={'Price'} as={'h5'}/>
                <Title className={'w-[20%] text-base text-black font-poppin leading-6'} text={'Quantity'} as={'h5'}/>
                <Title className={'w-[15%] text-base text-black font-poppin leading-6'} text={'Subtotal'} as={'h5'}/>
            </div>
            <div className="flex justify-between shadow p-3 items-center mt-5">
                <div className="w-[40%] flex items-center gap-x-4">
                    <picture>
                        <Image imgSrc={tv} imgAlt={"tv.png"}/>
                    </picture>
                    <Title className={' text-base text-black font-poppin leading-6'} text={'LCD Monitor'} as={'h5'}/>
                </div>
                <div className="w-[25%]">
                    <Title className={' text-base text-black font-poppin leading-6'} text={'$650'} as={'h5'}/>
                </div>
                <div className="w-[20%]">
                    <div className="w-[100px] py-1 rounded justify-center flex items-center gap-x-5 border-2 border-borderC">
                       <Title className={'text-base text-black font-poppin leading-6'} text={'01'} as={'h5'}/>
                       <div className="">
                            <Link to={'/'}><MdOutlineKeyboardArrowDown/></Link>
                            <Link to={'/'}><MdOutlineKeyboardArrowUp/></Link>
                       </div>
                    </div>
                </div>
                <div className="w-[15%]">
                    <Title className={'text-base text-black font-poppin leading-6'} text={'$650'} as={'h5'}/>
                </div>
                
            </div>

            <div className="flex justify-between shadow p-3 items-center mt-5">
                <div className="w-[40%] flex items-center gap-x-4">
                    <picture>
                        <Image imgSrc={game} imgAlt={"ganepad.png"}/>
                    </picture>
                    <Title className={' text-base text-black font-poppin leading-6'} text={'H1 Gamepad'} as={'h5'}/>
                </div>
                <div className="w-[25%]">
                    <Title className={' text-base text-black font-poppin leading-6'} text={'$550'} as={'h5'}/>
                </div>
                <div className="w-[20%]">
                    <div className="w-[100px] py-1 rounded justify-center flex items-center gap-x-5 border-2 border-borderC">
                       <Title className={'text-base text-black font-poppin leading-6'} text={'02'} as={'h5'}/>
                       <div className="">
                            <Link to={'/'}><MdOutlineKeyboardArrowDown/></Link>
                            <Link to={'/'}><MdOutlineKeyboardArrowUp/></Link>
                       </div>
                    </div>
                </div>
                <div className="w-[15%]">
                    <Title className={'text-base text-black font-poppin leading-6'} text={'$1100'} as={'h5'}/>
                </div>
                
            </div>
            <div className="py-5 flex justify-between items-center">
                <div className="w-[200px] text-center p-3 border-2 border-borderC rounded cursor-pointer hover:shadow">
                    <Title className={'text-base text-black font-poppin font-medium leading-6'} text={'Return To Shop'} as={'h5'}/>
                </div>
                <div className="w-[180px] text-center p-3 border-2 border-borderC rounded cursor-pointer hover:shadow">
                    <Title className={'text-base text-black font-poppin font-medium leading-6'} text={'Update Cart'} as={'h5'}/>
                </div>
                
            </div>

            <Flex className={'pt-10 '}>
                <div className="w-[50%]">
                    <div className=" flex gap-x-5">
                    <input className='w-[250px] text-base text-black leading-6 p-2 border-1 border-black rounded outline-0' type="text" placeholder='Coupon Code' />
                    <Button  btnText={'Apply Coupon'}/>
                </div>
                </div>
                <div className="w-[45%] border-1 border-black p-10 rounded">
                    <Title className={'text-xl text-black font-poppin font-medium leading-7.5'} text={'Cart Total'} as={'h4'}/>
                    <div className="flex justify-between mt-6 items-center border-b-2 p-1 border-borderC">
                        <Title className={'text-base text-black font-poppin leading-6'} text={'Subtotal:'} as={'h5'}/>
                        <Title className={'text-base text-black font-poppin leading-6'} text={'$1750'} as={'h5'}/>
                    </div>
                    <div className="flex justify-between mt-4 items-center border-b-2 p-1 border-borderC">
                        <Title className={'text-base text-black font-poppin leading-6'} text={'Shipping:'} as={'h5'}/>
                        <Title className={'text-base text-black font-poppin leading-6'} text={'Free'} as={'h5'}/>
                    </div>
                    <div className="flex justify-between mt-4 items-center">
                        <Title className={'text-base text-black font-poppin leading-6'} text={'Total:'} as={'h5'}/>
                        <Title className={'text-base text-black font-poppin leading-6'} text={'$1750'} as={'h5'}/>
                    </div>
                    <div className="text-center pt-5">
                        <Link to={'/chackout'}><Button btnText={'Procees to checkout'}/></Link>
                    </div>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Cart