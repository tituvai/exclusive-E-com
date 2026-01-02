import React from 'react'
import Image from '../common/Image'
import Title from '../common/Title'


const ProductCategori = ({categoriTitle, categoriIcon}) => {
  return (
    <>
    <div className="w-[170px] h-[175px] rounded-[4px] flex flex-col justify-center items-center border-1 border-borderC hover:bg-primery group transition-all duration-500 shadow">
      <span className='group-hover:text-white'>{categoriIcon}</span>
        <Title className={'text-base text-black font-poppin leading-6 pt-3 group-hover:text-white'} text={categoriTitle} as={'h4'}/>
    </div>
    </>
  )
}

export default ProductCategori