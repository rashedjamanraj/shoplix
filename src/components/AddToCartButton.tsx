"use client"


import { FiShoppingCart } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'
import { ProductType } from '../../typs'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/shoplixSlice'
import toast from 'react-hot-toast'

const AddToCartButton = ({product, className}: {product: ProductType, className?:string}) => {
  const disPatch = useDispatch();
  const handleAddToCart = () => {
    if (product) {
      disPatch(addToCart(product));
      toast.success(`${product?.title.substring(0,10)} added successfully!`)
    }
  };

  return (
    
      <button
      onClick={handleAddToCart}
      className={twMerge(' flex items-center justify-center text-black font-semibold text-md gap-2 bg-transparent border border-sky-600 rounded-full py-1.5 hover:bg-sky-600 hover:text-white duration-300 my-2 cursor-pointer', className)}>
        <FiShoppingCart /> Add to Cart
      </button>
    
  )
}

export default AddToCartButton