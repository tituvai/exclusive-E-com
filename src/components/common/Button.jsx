import React from 'react'

const Button = ({btnText, className}) => {
  return (
    <button className={`text-white text-base font-poppin  leading-4 px-6 py-3 rounded bg-primery cursor-pointer ${className}`}>{btnText}</button>
  )
}

export default Button