import React from 'react'
import Container from './Container'
import { banner } from '@/constants'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='bg-cyan-700 py-20 text-white'>
      <Container>
        <div className=' flex flex-col gap-5'>
          <p className=' text-base font-semibold'>{banner?.priceText}</p>
        <h2 className=' text-5xl font-bold max-w-125 '>{banner?.title}</h2>
        <p className='text-lg font-bold'> {banner?.textOne } <span className=' text-yellow-300 mx-1'> {banner?.offerPrice}</span>
        {banner.textTwo}
         </p>
         <button>Shop Now</button>
        </div>
      </Container>
      <Image className=' h-80 w-96 ml-20' src={banner?.image} alt='bannerImage' priority />
      </div>
  )
}

export default Banner