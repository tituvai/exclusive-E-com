import React from 'react'

const MainTitle = ({mainText, className}) => {
  return (
    <h3 className={`text-[36px] text-black font-inter font-semibold leading-[48px] tracking-[4%] ${className}`}>{mainText}</h3>
  )
}

export default MainTitle