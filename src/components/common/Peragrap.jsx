import React from 'react'

const Peragrap = ({className, peraText}) => {
  return (
    <p className={`text-sm font-poppin leading-5 ${className}`}>{peraText}</p>
  )
}

export default Peragrap