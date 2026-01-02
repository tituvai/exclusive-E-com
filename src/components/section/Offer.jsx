import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Title from '../common/Title'
import Image from '../common/Image'
import offer from '/src/assets/offer.png'
import Button from '../common/Button'

const Offer = () => {
  return (
    <>
    <div className="py-10">
        <Container>
            <div className="bg-black p-20">
                <Flex>
                <div className="w-[48%]">
                    <Title className={'text-base font-semibold font-poppin leading-5 text-offerC'} text={'Categories'} as={'h5'}/>
                    <Title className={'text-[48px] font-semibold font-poppin leading-15 text-white py-5'} text={'Enhance Your Music Experience'} as={'h5'}/>
                    <div className="flex items-center gap-x-5">
                        <div className="w-[70px] h-[70px] rounded-full bg-white flex flex-col justify-center items-center">
                            <Title className={'text-base text-black font-poppin font-semibold leading-5'} text={'23'} as={'h6'}/>
                            <Title className={'text-xs text-black font-poppin  leading-4'} text={'Hours'} as={'h6'}/>
                        </div>
                        <div className="w-[70px] h-[70px] rounded-full bg-white flex flex-col justify-center items-center">
                            <Title className={'text-base text-black font-poppin font-semibold leading-5'} text={'05'} as={'h6'}/>
                            <Title className={'text-xs text-black font-poppin  leading-4'} text={'Days'} as={'h6'}/>
                        </div>
                        <div className="w-[70px] h-[70px] rounded-full bg-white flex flex-col justify-center items-center">
                            <Title className={'text-base text-black font-poppin font-semibold leading-5'} text={'54'} as={'h6'}/>
                            <Title className={'text-xs text-black font-poppin  leading-4'} text={'Minutes'} as={'h6'}/>
                        </div>
                        <div className="w-[70px] h-[70px] rounded-full bg-white flex flex-col justify-center items-center">
                            <Title className={'text-base text-black font-poppin font-semibold leading-5'} text={'35'} as={'h6'}/>
                            <Title className={'text-xs text-black font-poppin  leading-4'} text={'Seconds'} as={'h6'}/>
                        </div>
                    </div>
                    <div className="pt-7">
                        <button className='text-white text-base font-poppin  leading-4 px-6 py-3 rounded bg-offerC cursor-pointer'>Buy Now!</button>
                        
                    </div>
                </div>
                <div className="w-[48%]">
                    <Image imgSrc={offer} imgAlt={'offer.png'}/>
                </div>
            </Flex>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Offer