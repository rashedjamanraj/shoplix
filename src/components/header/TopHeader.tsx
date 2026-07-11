
import Container from '../Container'
import Image from 'next/image'
import { logoShoplix } from '@/assets'
import SearchInput from './SearchInput'
import Link from 'next/link'
import { LiaUser } from 'react-icons/lia'
import HeaderIcon from './HeaderIcon'
import MobileNavigation from './MobileNavigation'
import SingINButton from './SingINButton'


const TopHeader = () => {
  return (
    <div className='border-b border-b-gray-400'>
    <Container className='py-4 flex items-center gap-4 md:gap-6 lg:gap-20 justify-between'>
      <Link href={"/"}>
        <Image src={logoShoplix} alt='Logo' className='h-12 w-36 cursor-pointer priority'/>
      </Link>
      
      <SearchInput />
      <div className=' hidden md:inline-flex items-center gap-3'>
        <SingINButton />
        <HeaderIcon />
      </div>
      <MobileNavigation />
    </Container>
    </div>
  )
} 

export default TopHeader