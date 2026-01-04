import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import service from '/src/assets/Services.png'
import service_1 from '/src/assets/Services (1).png'
import service_2 from '/src/assets/Services (2).png'
import Title from '../common/Title'
import Peragrap from '../common/Peragrap'

const Delivery = () => {
  return (
    <>
    <div className="py-15">
        <Container>
            <div className='flex justify-evenly'>
                <div className="flex justify-center items-center flex-col">
                    <Image imgSrc={service} imgAlt={"Services.png"}/>
                    <Title className={'text-xl text-black font-poppin font-semibold leading-7 pt-3'} text={'FREE AND FAST DELIVERY'} as={'h4'}/>
                    <Peragrap className={'text-black'} peraText={'Free delivery for all orders over $140'}/>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <Image imgSrc={service_1} imgAlt={"Services (2).png"}/>
                    <Title className={'text-xl text-black font-poppin font-semibold leading-7 pt-3'} text={'24/7 CUSTOMER SERVICE'} as={'h4'}/>
                    <Peragrap className={'text-black'} peraText={'Friendly 24/7 customer support'}/>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <Image imgSrc={service_2} imgAlt={"Services (2).png"}/>
                    <Title className={'text-xl text-black font-poppin font-semibold leading-7 pt-3'} text={'MONEY BACK GUARANTEE'} as={'h4'}/>
                    <Peragrap className={'text-black'} peraText={'We reurn money within 30 days'}/>
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Delivery