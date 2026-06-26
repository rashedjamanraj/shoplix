import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../../../typs'
import Button from '../Button';


const CartProduct = () => {
  const {cart} = useSelector((state: StateType) => state?.shoplix);

  return (
    <div>
      { cart?.length > 0 ? <div> <p>product</p> </div> : (
        <div className=' bg-white h-96 my-10 flex flex-col gap-4 items-center justify-center py-5 rounded-lg border border-gray-200 drop-shadow-2xl'>
          <h1 className=' text-3xl font-bold tracking-tight text-taupe-900 sm:text-4xl'>
            Shopping Cart
          </h1>
          <p className=' text-base max-w-115 text-center text-gray-600 tracking-wide leading-6'>
            Your cart is empty. Visit our site's product page to shop for your essentials from our vast collection of awesome products. Visit our shopping page.
          </p>
          <Button href='/' className=' rounded-md font-semibold bg-sky-600 hover:bg-amber-700'>Go to Shopping</Button>
        </div>
      )}
    </div>
  )
}

export default CartProduct