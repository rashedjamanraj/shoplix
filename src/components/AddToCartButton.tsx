"use client"


import { FiShoppingCart } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'

const AddToCartButton = () => {
  return (
    
      <button
      onClick={() => window.alert('Button Clicked')}
      className={twMerge(' flex items-center justify-center text-black font-semibold text-md gap-2 bg-transparent border border-sky-600 rounded-full py-1.5 hover:bg-sky-600 hover:text-white duration-300 my-2 cursor-pointer')}>
        <FiShoppingCart /> Add to Cart
      </button>
    
  )
}

export default AddToCartButton