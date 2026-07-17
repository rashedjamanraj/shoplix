import Button from '@/components/Button'
import Container from '@/components/Container'
import Title from '@/components/Title'
import React from 'react'

const CancelPage = () => {
  return (
    <Container className=' py-10'>
      <Title> Your payment has been cancelled</Title>
      <p> dolor sit amet consectetur adipisicing elit. Voluptatibus in illo quidem praesentium incidunt aperiam eos non placeat blanditiis earum! Placeat voluptatem animi error debitis deserunt accusamus quod quis provident, maxime unde obcaecati ab optio architecto veritatis sed porro labore.</p>

      <div className=' mt-5 flex  items-center  gap-5 md:gap-10  '>
        <Button href='/' className=' rounded-md'>
          Continue Shopping
        </Button>
        <Button href='/cart' className=' rounded-md'>View Cart</Button>
      </div>
    </Container>
  )
}

export default CancelPage