import React from 'react'
import Container from '../common/Container'
import BgrTitle from '../common/BgrTitle'
import MainTitle from '../common/MainTitle'
import ProductCategori from './ProductCategori'
import Flex from '../common/Flex'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IoWatchOutline } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";

const Categori = () => {
  return (
    <>
    <div className="py-25">
        <Container>
            <div className="">
                <BgrTitle bgrText={'Categori'}/>
                <MainTitle className={'pt-5'} mainText={'Browse By Category'}/>
                
            </div>
            <Flex className={'flex-wrap pt-16'}>
              <ProductCategori categoriIcon={<MdOutlinePhoneIphone className='size-16'/>} categoriTitle={'Phones'}/>
              <ProductCategori categoriIcon={<RiComputerLine className='size-16'/>} categoriTitle={'Computers'}/>
              <ProductCategori categoriIcon={<IoWatchOutline className='size-16'/>} categoriTitle={'SmartWatch'}/>
              <ProductCategori categoriIcon={<IoCameraOutline className='size-16'/>} categoriTitle={'Camera'}/>
              <ProductCategori categoriIcon={<CiHeadphones className='size-16'/>} categoriTitle={'HeadPhones'}/>
              <ProductCategori categoriIcon={<TbDeviceGamepad className='size-16'/>} categoriTitle={'Gaming'}/>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Categori