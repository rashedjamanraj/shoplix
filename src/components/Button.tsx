import React from 'react'
import { twMerge } from 'tailwind-merge'



const Button = ({children, className}) => {
  return (
    <>

    <button className={twMerge(' bg-cyan-600 text-white py-2 px-6 hover:bg-cyan-700 cursor-pointer duration-200', className)}>{children}</button>
    </>
  )
}

export default Button