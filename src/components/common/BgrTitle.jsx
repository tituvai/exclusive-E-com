import React from 'react'

const BgrTitle = ({bgrText}) => {
  return (
    <>
    <div className="flex gap-x-3 items-center ">
        <div className="w-[20px] h-[40px] rounded-[4px] bg-primery"></div>
        <span className='text-base font-poppin text-primery leading-5'>{bgrText}</span>
    </div>
    </>
  )
}

export default BgrTitle