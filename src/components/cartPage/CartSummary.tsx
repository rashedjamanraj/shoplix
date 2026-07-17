// import React, { useEffect, useState } from 'react'
// import Title from '../Title'
// import PriceFormate from '../PriceFormate'
// import { ProductType } from '../../../typs'
// import Button from '../Button';
// import toast from 'react-hot-toast';
// import { useSession } from 'next-auth/react';
// import { loadStripe } from '@stripe/stripe-js';


// interface Props {
//   cart: ProductType[];
// }

// const CartSummary =  ({cart} : Props) => {
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [discountAmount, setDiscountAmount] = useState(0);

//   const {data:session} = useSession();

//   useEffect(() => {
//     let amount = 0;
//     let discount = 0;
//     cart?.map((item) => {
//        const itemTotal = item?.price * item?.quantity!;
//         const itemDiscount =
//         (item?.price * item?.discountPercentage) / 100 * item?.quantity!;
//       amount += itemTotal;
//       discount += itemDiscount;
//     });
//     setTotalAmount(amount);
//     setDiscountAmount(discount);
//   }, [cart]);

//   const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);


//   const handleCheckout = async () => {
//     const stripe = await stripePromise;
//     const response = await fetch('/api/checkout', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         items: cart,
//         email: session?.user?.email,
//       }),
//     });


//     const checkoutSession = await response?.json();
//     const result: any = await stripe?.redirectToCheckout({
//       sessionId: checkoutSession?.id,
  
// });

// console.log("Stripe Result:", result);
//     if (result?.error) {
//       window.alert(result?.error?.message)
//     }
    
//   };

//   return (
//     <div className=' bg-gray-100 rounded-lg px-4 lg:px-8 py-6 p-4  lg:col-span-5 mt-10 lg:mt-0'>
//       <Title>Cart Summary</Title>
//       <div className='mt-5 flex flex-col gap-3'>
//         <div className=' flex items-center justify-between'>
//           <Title className=' text-lg font-medium'>
//             Sub Total
//           </Title>
//           <PriceFormate amount={totalAmount} />
//         </div>
//         <div className=' flex items-center justify-between'>
//           <Title className=' text-lg font-medium'>
//             Discount
//           </Title>
//           <PriceFormate amount={discountAmount} className=' text-lg font-semibold'/>
//         </div>
//         <div className=' flex items-center justify-between'>
//           <Title className=' text-lg font-medium'>
//             Payable Amount 
//           </Title>
//           <PriceFormate amount={totalAmount - discountAmount} className=' text-lg font-bold'/>
//         </div>
//         <Button onClick={handleCheckout} className=' rounded-md text-lg'>Checkout</Button>
//       </div>
//     </div>
//   )
// }

// export default CartSummary





import React, { useEffect, useState } from 'react'
import Title from '../Title'
import PriceFormate from '../PriceFormate'
import { ProductType } from '../../../typs'
import Button from '../Button';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';

interface Props {
  cart: ProductType[];
}

const CartSummary = ({ cart }: Props) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);

  const { data: session } = useSession();

  useEffect(() => {
    let amount = 0;
    let discount = 0;
    cart?.forEach((item) => {
      const itemTotal = item?.price * (item?.quantity || 1);
      const itemDiscount =
        ((item?.price * (item?.discountPercentage || 0)) / 100) * (item?.quantity || 1);
      amount += itemTotal;
      discount += itemDiscount;
    });
    setTotalAmount(amount);
    setDiscountAmount(discount);
  }, [cart]);

  const handleCheckout = async () => {
    if (!session?.user?.email) {
      toast.error("Please sign in to proceed to checkout!");
      return;
    }

    try {
      const response = await fetch('/api/checkout', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart,
          email: session?.user?.email,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to initialize checkout session.");
      }

      // CHANGE HERE: Get the checkout URL returned from the backend API
      const { url } = await response.json();
      
      if (url) {
        // Redirect the browser straight to Stripe Checkout
        window.location.assign(url);
      } else {
        throw new Error("Stripe URL not found.");
      }
      
    } catch (err: any) {
      console.error("Checkout Error:", err);
      toast.error(err.message || "Something went wrong.");
    }
  };

  return (
    <div className='bg-gray-100 rounded-lg px-4 lg:px-8 py-6 p-4 lg:col-span-5 mt-10 lg:mt-0'>
      <Title>Cart Summary</Title>
      <div className='mt-5 flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          <Title className='text-lg font-medium'>Sub Total</Title>
          <PriceFormate amount={totalAmount} />
        </div>
        <div className='flex items-center justify-between'>
          <Title className='text-lg font-medium'>Discount</Title>
          <PriceFormate amount={discountAmount} className='text-lg font-semibold'/>
        </div>
        <div className='flex items-center justify-between'>
          <Title className='text-lg font-medium'>Payable Amount</Title>
          <PriceFormate amount={totalAmount - discountAmount} className='text-lg font-bold'/>
        </div>
        <Button onClick={handleCheckout} className='rounded-md text-lg'>Checkout</Button>
      </div>
    </div>
  )
}

export default CartSummary;