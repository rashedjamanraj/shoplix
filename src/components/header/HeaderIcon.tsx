import Link from 'next/link'
import { BiShoppingBag } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'

const HeaderIcon = () => {
  return (
    <>
    {/* favorite icon */}
      <Link href={'/favorite'} className='text-2xl relative'>
         <MdFavoriteBorder />
         <span className=' absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-sky-600 rounded-full text-white flex items-center justify-center '>
            0
         </span>
      </Link>

      {/* cart icon */}
      <Link href={'/cart'} className='text-2xl relative'>
         <BiShoppingBag />
         <span className=' absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-sky-600 rounded-full text-white flex items-center justify-center '>
            0
         </span>
      </Link>
    </>
  )
}

export default HeaderIcon
