"use client"

import CartProduct from '@/components/cartPage/CartProduct';
import Container from '@/components/Container'


const CartPage = () => {
  return (
    <div className=' px-4 md:px-20  py-10'>
      <CartProduct />
    </div>
  )
  
  // <Container className=' flex flex-start py-10'>  </Container>;
      
}

export default CartPage