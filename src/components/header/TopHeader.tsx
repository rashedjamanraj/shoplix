import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import { logoShoplix } from '@/assets'


const TopHeader = () => {
  return (
    <div className='border-b border-b-gray-400'>
    <Container className='py-4 flex items-center gap-4 md:gap-6 lg:gap-20 justify-between'>
      <Image src={logoShoplix} alt='Logo' className='h-12 w-36'/>
      <div>Searchbar</div>
      <div>Navigation Menu</div>
    </Container>
    </div>
  )
} 

export default TopHeader