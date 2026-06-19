
import Container from '../Container'
import Image from 'next/image'
import { logoShoplix } from '@/assets'
import SearchInput from './SearchInput'
import Link from 'next/link'
import { LiaUser } from 'react-icons/lia'
import HeaderIcon from './HeaderIcon'
import MobileNavigation from './MobileNavigation'


const TopHeader = () => {
  return (
    <div className='border-b border-b-gray-400'>
    <Container className='py-4 flex items-center gap-4 md:gap-6 lg:gap-20 justify-between'>
      <Link href={"/"}>
        <Image src={logoShoplix} alt='Logo' className='h-12 w-36 cursor-pointer priority'/>
      </Link>
      
      <SearchInput />
      <div className=' hidden md:inline-flex items-center gap-3'>
        <Link href={"/signin"} className='flex items-center gap-2 text-sm '>
        <div className='border border-gray-300 p-1.5 rounded-full text-xl'>
          <LiaUser />
        </div>
        <div>
          <p className='text-xs'>Hello, Guest</p>
          <p className='font-medium'>Login / Register</p>
        </div>
        </Link>
        <HeaderIcon />
      </div>
      <MobileNavigation />
    </Container>
    </div>
  )
} 

export default TopHeader