import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { LuEye } from 'react-icons/lu'
import { MdFavoriteBorder } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className=' absolute right-2 bottom-44 border flex flex-col text-2xl border-gray-200 bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40 ease-in-out'>
      <button className=' p-2 hover:bg-sky-500 hover:text-white duration-200 cursor-pointer'>
        <FiShoppingCart />
      </button>

      <button className=' p-2 hover:bg-sky-500 hover:text-white duration-200 cursor-pointer border-y border-y-gray-200'>
        <LuEye />
      </button>

      <button className=' p-2 hover:bg-sky-500 hover:text-white duration-200 cursor-pointer '>
        <MdFavoriteBorder />
      </button>
    </div>
  )
}

export default Sidebar