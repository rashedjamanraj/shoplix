"use client"


import { FiShoppingCart } from 'react-icons/fi'
import { LuEye } from 'react-icons/lu'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { ProductType, StateType } from '../../typs'
import { useEffect, useState } from 'react'
import { addToFavorite } from '@/redux/shoplixSlice'
import toast from 'react-hot-toast'

const Sidebar = ({product}: {product: ProductType}) => {
  const { favorite } = useSelector((state: StateType) => state?.shoplix);
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null,
  );

  const disPatch = useDispatch();

  useEffect(() => {
      const availableProduct = favorite?.find((item) => item?.id === product?.id);
      if (availableProduct) {
        setExistingProduct(availableProduct);
      } else {
        setExistingProduct(null);
      }
    }, [favorite, product, disPatch, existingProduct]);

    const handleFavorite = () => {
      disPatch(addToFavorite(product))
      if(existingProduct) {
        toast.success("Remove from favorite Successfully!");
      } else {
        toast.success("Added to favorite Successfully!");
      }
    };

  return (
    <div className=' absolute right-2 bottom-44 border flex flex-col text-2xl border-gray-200 bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40 ease-in-out'>
      <button className=' p-2 hover:text-sky-500  duration-200 cursor-pointer'>
        <FiShoppingCart />
      </button>

      <button className=' p-2 hover:text-sky-500  duration-200 cursor-pointer border-y border-y-gray-200'>
        <LuEye />
      </button>

      <button onClick={handleFavorite} className=' p-2 hover:text-sky-500  duration-200 cursor-pointer '>
        {existingProduct ? <MdFavorite className=' text-sky-500'/> : <MdFavoriteBorder />} 
      </button>
    </div>
  )
}

export default Sidebar