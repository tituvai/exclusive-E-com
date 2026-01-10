import React, { useState } from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import Flex from '../common/Flex'
import MainTitle from '../common/MainTitle'
import Title from '../common/Title'
import Image from '../common/Image'
import game from '/src/assets/ganepad.png'
import tv from '/src/assets/tv.png'
import bkash from '/src/assets/bkash.png'
import visa from '/src/assets/visa.png'
import master from '/src/assets/master.png'
import nagad from '/src/assets/nagad.png'
import Button from '../common/Button'


const Chackout = () => {
   
    const [active, setActive] = useState("bank");
  return (
    <>
    <div className="pb-20">
       <Container>
        <div className="py-10">
                <ul className='flex gap-x-5'>
                    {[
                        {name:'Home', path:'/'},
                        {name:'/'},
                        {name:'My Account', path:'/'},
                        {name:'/'},
                        {name:'Product', path:'/'},
                        {name:'/'},
                        {name:'View Cart', path:'/'},
                        {name:'/'},
                        {name:'CheckOut', path:'/'},
                    ].map((item, index)=>(
                    <Link to={item.path} key={index}><li className='text-gray-500 font-poppin text-sm leading-6'>{item.name}</li></Link>
                    ))}
                </ul>
            </div>

            <Flex>
                <div className="w-[50%]">
                    <div className="">
                        <MainTitle mainText={'Billing Details'}/>
                    <form action="#">
                        <div className="pt-5">
                            <Title className={'text-base pb-1 text-stone-500 font-poppin leading-6'} text={'Full Name*'} as={'h6'}/>
                            <input className='w-full outline-0 bg-productC p-3 rounded text-base text-black font-poppin' type="text" />
                        </div>
                        <div className="pt-5">
                            <Title className={'text-base pb-1 text-stone-500 font-poppin leading-6'} text={'Email*'} as={'h6'}/>
                            <input className='w-full outline-0 bg-productC p-3 rounded text-base text-black font-poppin' type="text" />
                        </div>
                        <div className="pt-5">
                            <Title className={'text-base pb-1 text-stone-500 font-poppin leading-6'} text={'Phone Number*'} as={'h6'}/>
                            <input className='w-full outline-0 bg-productC p-3 rounded text-base text-black font-poppin' type="text" />
                        </div>
                        <div className="pt-5">
                            <Title className={'text-base pb-1 text-stone-500 font-poppin leading-6'} text={'code*'} as={'h6'}/>
                            <input className='w-full outline-0 bg-productC p-3 rounded text-base text-black font-poppin' type="text" />
                        </div>
                        <div className="pt-5">
                            <Title className={'text-base pb-1 text-stone-500 font-poppin leading-6'} text={'Address*'} as={'h6'}/>
                            <textarea name="" id="" className='w-full h-[100px] outline-0 bg-productC p-3 rounded text-base text-black font-poppin'></textarea>
                        </div>
                    </form>
                    </div>

                    <div className="pt-15">
                        <MainTitle mainText={'Shipting Details'}/>
                    <form action="#">
                        <div className="pt-5">
                            <Title className={'text-base pb-1 text-stone-500 font-poppin leading-6'} text={'Full Name*'} as={'h6'}/>
                            <input className='w-full outline-0 bg-productC p-3 rounded text-base text-black font-poppin' type="text" />
                        </div>
                        <div className="pt-5">
                            <Title className={'text-base pb-1 text-stone-500 font-poppin leading-6'} text={'Email*'} as={'h6'}/>
                            <input className='w-full outline-0 bg-productC p-3 rounded text-base text-black font-poppin' type="text" />
                        </div>
                        <div className="pt-5">
                            <Title className={'text-base pb-1 text-stone-500 font-poppin leading-6'} text={'Phone Number*'} as={'h6'}/>
                            <input className='w-full outline-0 bg-productC p-3 rounded text-base text-black font-poppin' type="text" />
                        </div>
                        <div className="pt-5">
                            <Title className={'text-base pb-1 text-stone-500 font-poppin leading-6'} text={'code*'} as={'h6'}/>
                            <input className='w-full outline-0 bg-productC p-3 rounded text-base text-black font-poppin' type="text" />
                        </div>
                        <div className="pt-5">
                            <Title className={'text-base pb-1 text-stone-500 font-poppin leading-6'} text={'Address*'} as={'h6'}/>
                            <textarea name="" id="" className='w-full h-[100px] outline-0 bg-productC p-3 rounded text-base text-black font-poppin'></textarea>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="w-[40%] pt-15">
                    <div className="flex justify-between items-center pt-6">
                        <div className="flex items-center gap-x-3">
                            <picture>
                                <Image imgSrc={game} imgAlt={'ganepad.png'}/>
                            </picture>
                            <Title className={'text-base text-black font-poppin leading-6'} text={'LCD Monitor'} as={'h5'}/>
                        </div>
                        <div className="">
                            <Title className={'text-base text-black font-poppin leading-6'} text={'$650'} as={'h5'}/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-6">
                        <div className="flex items-center gap-x-3">
                            <picture>
                                <Image imgSrc={tv} imgAlt={'tv.png'}/>
                            </picture>
                            <Title className={'text-base text-black font-poppin leading-6'} text={'LCD Monitor'} as={'h5'}/>
                        </div>
                        <div className="">
                            <Title className={'text-base text-black font-poppin leading-6'} text={'$650'} as={'h5'}/>
                        </div>
                    </div>

                    <div className="flex justify-between mt-6 items-center border-b-1 p-1 border-black">
                        <Title className={'text-base text-black font-poppin leading-6'} text={'Subtotal:'} as={'h5'}/>
                        <Title className={'text-base text-black font-poppin leading-6'} text={'$1750'} as={'h5'}/>
                    </div>
                    <div className="flex justify-between mt-4 items-center border-b-1 p-1 border-black">
                        <Title className={'text-base text-black font-poppin leading-6'} text={'Shipping:'} as={'h5'}/>
                        <Title className={'text-base text-black font-poppin leading-6'} text={'Free'} as={'h5'}/>
                    </div>
                    <div className="flex justify-between mt-4 items-center">
                        <Title className={'text-base text-black font-poppin leading-6'} text={'Total:'} as={'h5'}/>
                        <Title className={'text-base text-black font-poppin leading-6'} text={'$1750'} as={'h5'}/>
                    </div>

                    <div className="flex justify-between items-center pt-10">
                        <div className="flex items-center gap-x-2">
                            <div onClick={() => setActive("bank")} className="w-[20px] h-[20px] rounded-full border-2 border-black flex items-center justify-center">{active === "bank" && ( <div className="w-[12px] h-[12px] rounded-full bg-black"></div>)}</div>
                            <Title className={'text-base text-black font-poppin leading-6'} text={'Bank'} as={'h5'}/>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <Link><picture><Image imgSrc={bkash} imgAlt={"bkash.png"}/></picture></Link>
                            <Link><picture><Image imgSrc={visa} imgAlt={"visa.png"}/></picture></Link>
                            <Link><picture><Image imgSrc={master} imgAlt={"master.png"}/></picture></Link>
                            <Link><picture><Image imgSrc={nagad} imgAlt={"nagad.png"}/></picture></Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-2 pt-5">
                            <div onClick={() => setActive("cod")} className="w-[20px] h-[20px] rounded-full border-2 border-black flex items-center justify-center">{active === "cod" && (<div className="w-[12px] h-[12px] rounded-full bg-black"></div>)}</div>
                            <Title className={'text-base text-black font-poppin leading-6'} text={'Cash on delivery'} as={'h5'}/>
                        </div>

                    <div className=" flex gap-x-5 pt-8">
                    <input className='w-[250px] text-base text-black leading-6 p-2 border-1 border-black rounded outline-0' type="text" placeholder='Coupon Code' />
                    <Button btnText={'Apply Coupon'}/>
                    </div>

                    <div className="pt-7">
                        <Button btnText={"Place Order"}/>
                    </div>
                </div>
            </Flex>
        </Container> 
    </div>
    </>
  )
}

export default Chackout