import React, { useEffect, useState } from 'react'
import Title from '../Title'
import PriceFormate from '../PriceFormate'
import { ProductType } from '../../../typs'
import Button from '../Button';
import toast from 'react-hot-toast';

interface Props {
  cart: ProductType[];
}

const CartSummary = ({cart} : Props) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);

  useEffect(() => {
    let amount = 0;
    let discount = 0;
    cart?.map((item) => {
       const itemTotal = item?.price * item?.quantity!;
        const itemDiscount =
        (item?.price * item?.discountPercentage) / 100 * item?.quantity!;
      amount += itemTotal;
      discount += itemDiscount;
    });
    setTotalAmount(amount);
    setDiscountAmount(discount);
  }, [cart]);


  const handleCheckout = () => {
    toast.success('Checkout is coming soon!')
  }

  return (
    <div className=' bg-gray-100 rounded-lg px-4 lg:px-8 py-6 p-4  lg:col-span-5 mt-10 lg:mt-0'>
      <Title>Cart Summary</Title>
      <div className='mt-5 flex flex-col gap-3'>
        <div className=' flex items-center justify-between'>
          <Title className=' text-lg font-medium'>
            Sub Total
          </Title>
          <PriceFormate amount={totalAmount} />
        </div>
        <div className=' flex items-center justify-between'>
          <Title className=' text-lg font-medium'>
            Discount
          </Title>
          <PriceFormate amount={discountAmount} className=' text-lg font-semibold'/>
        </div>
        <div className=' flex items-center justify-between'>
          <Title className=' text-lg font-medium'>
            Payable Amount 
          </Title>
          <PriceFormate amount={totalAmount - discountAmount} className=' text-lg font-bold'/>
        </div>
        <Button onClick={handleCheckout} className=' rounded-md text-lg'>Checkout</Button>
      </div>
    </div>
  )
}

export default CartSummary