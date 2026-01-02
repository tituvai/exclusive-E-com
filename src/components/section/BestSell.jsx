import React from 'react'
import BgrTitle from '../common/BgrTitle'
import Container from '../common/Container'
import MainTitle from '../common/MainTitle'
import Button from '../common/Button'
import Flex from '../common/Flex'
import Product from './Product'

const BestSell = () => {
  return (
    <>
    <div className="">
        <Container>
            <div className=" border-t-1 border-borderC pt-5">
                <BgrTitle bgrText={'This Month'}/>
                <Flex className={'items-center'}>
                    <MainTitle className={'pt-5'} mainText={'Best Selling Products'}/>
                    <div className="">
                        <Button btnText={'View All'}/>
                    </div>
                </Flex>
            </div>
            <Flex className={'flex-wrap py-15'}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default BestSell