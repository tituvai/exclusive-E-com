import React from 'react'
import Container from '../common/Container'
import BgrTitle from '../common/BgrTitle'
import MainTitle from '../common/MainTitle'
import Flex from '../common/Flex'
import Image from '../common/Image'
import arrivalOne from '/src/assets/arrivalOne.png'
import Title from '../common/Title'
import Peragrap from '../common/Peragrap'
import arrivalTwo from '/src/assets/arrivalTwo.png'
import arrivalThree from '/src/assets/arrivalFour.png'
import arrivalFive from '/src/assets/arrivalFive.png'

const NewArrival = () => {
  return (
    <>
    <div className="py-10">
        <Container>
            <div className="">
                <BgrTitle  bgrText={'Featured'}/>
                <MainTitle className={'pt-5'} mainText={'New Arrival'}/>
            </div>
            <Flex className={'pt-10'}>
                <div className="w-[50%] bg-black pt-25">
                    <div className="relative">
                        <Image imgSrc={arrivalOne}/>
                        <div className="absolute bottom-6 left-6">
                            <Title className={'text-2xl text-white font-semibold font-inter leading-6 tracking-[3%]'} text={'PlayStation 5'} as={'h5'}/>
                            <Peragrap className={'text-white w-[242px] py-3'} peraText={'Black and White version of the PS5 coming out on sale.'}/>
                            <button className='text-base font-medium font-poppin leading-6 text-white border-b-2 border-primery'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="w-[48%] ">
                    <div className="bg-black relative">
                        <Image className={'w-full'} imgSrc={arrivalTwo} imgAlt={'arrivalTwo.png'}/>
                        <div className="absolute bottom-6 left-6">
                            <Title className={'text-2xl text-white font-semibold font-inter leading-6 tracking-[3%]'} text={'Women’s Collections'} as={'h5'}/>
                            <Peragrap className={'text-white w-[242px] py-3'} peraText={'Featured woman collections that give you another vibe.'}/>
                            <button className='text-base font-medium font-poppin leading-6 text-white border-b-2 border-primery'>Shop Now</button>
                        </div>
                    </div>
                    <div className="flex justify-between pt-5">
                        <div className="bg-black w-[48%] relative">
                            <Image imgSrc={arrivalThree} imgAlt={'arrivalFour.png'}/>
                            <div className="absolute bottom-6 left-6">
                            <Title className={'text-2xl text-white font-semibold font-inter leading-6 tracking-[3%]'} text={'Speakers'} as={'h5'}/>
                            <Peragrap className={'text-white w-[242px] py-3'} peraText={'Amazon wireless speakers'}/>
                            <button className='text-base font-medium font-poppin leading-6 text-white border-b-2 border-primery'>Shop Now</button>
                        </div>
                        </div>
                        <div className="bg-black w-[48%] relative">
                            <Image imgSrc={arrivalFive} imgAlt={'arrivalFive.png'}/>
                            <div className="absolute bottom-6 left-6">
                            <Title className={'text-2xl text-white font-semibold font-inter leading-6 tracking-[3%]'} text={'Perfume'} as={'h5'}/>
                            <Peragrap className={'text-white w-[242px] py-3'} peraText={'GUCCI INTENSE OUD EDP'}/>
                            <button className='text-base font-medium font-poppin leading-6 text-white border-b-2 border-primery'>Shop Now</button>
                        </div>
                        </div>
                    </div>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default NewArrival