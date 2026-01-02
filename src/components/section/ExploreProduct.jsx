import React from 'react'
import Container from '../common/Container'
import BgrTitle from '../common/BgrTitle'
import Flex from '../common/Flex'
import MainTitle from '../common/MainTitle'
import { FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import Product from './Product'
import Button from '../common/Button'


const ExploreProduct = () => {
  return (
   <>
   <div className="py-10">
    <Container>
        <div className="">
            <BgrTitle bgrText={'Our Products'}/>
            <Flex className={'pt-5'}>
                <MainTitle mainText={'Explore Our Products'}/>
                <div className="flex items-center gap-x-2">
                    <div className="bg-productC w-[30px] h-[30px] rounded-full flex justify-center items-center"><FaArrowLeftLong/></div>
                    <div className="bg-productC w-[30px] h-[30px] rounded-full flex justify-center items-center"><FaArrowRightLong/></div>
                </div>
            </Flex>
            <Flex className={'flex-wrap gap-y-18 pt-15'}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </Flex>
            <div className="flex justify-center pt-25">
                <Button  btnText={'View All Products'}/>
            </div>
        </div>
    </Container>
   </div>
   </>
  )
}

export default ExploreProduct