import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import { logoShoplix } from '@/assets'


const TopHeader = () => {
  return (
    <div className='border-b border-b-gray-400'>TopHeader
    <Container >
      <Image src={logoShoplix} alt='Logo' className='h-12 w-36'/>
    </Container>
    </div>
  )
}

export default TopHeader