import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Container>
      <Image src="/images/notFoundPage.png" width={500} height={600} alt='notFound'/>
    </Container>
    </div>
  )
}

export default NotFound