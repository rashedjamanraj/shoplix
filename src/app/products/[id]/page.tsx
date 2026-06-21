import Container from '@/components/Container'
import ProductImages from '@/components/ProductImages';
import { getData } from '@/helpers';
import { ProductType } from '../../../../typs';
import ProductPrice from '@/components/ProductPrice';
import { MdStar } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
import PriceFormate from '@/components/PriceFormate';
import AddToCartButton from '@/components/AddToCartButton';
import Image from 'next/image';

interface Props {
  params: Promise <{
    id: string
  }>;
}

const SingleProductPage = async({params}: Props) => {
  const {id} = await params;
 
  

  const endpoint = `https://dummyjson.com/products/${id}`
  const product:ProductType = await getData(endpoint);
  
  

    
  return (
    <Container className=' py-10 grid grid-cols-1 md:grid-cols-2 gap-10 '>
        {/* product image */}
        
        <ProductImages images={product?.images} /> 
        {/* product details */}
        <div className=' flex flex-col gap-4' >
          <h2 className=' text-3xl font-bold'>{product?.title}</h2>
          <div className=' flex items-center justify-between gap-5'>
            <ProductPrice product={product}  />
            <div className=' flex items-center gap-1'>
              <div className=' flex items-center gap-1 text-base text-gray-500'>
              {
                Array?.from({length: 5})?.map((_, index) => {
                  const filled = index +1 <= Math.floor(product?.rating);
                  const halfFilled = index +1 > Math.floor(product?.rating) && index < Math.ceil(product?.rating);

                  return(

                    <MdStar key={index} 
                    className={`${filled ? "text-[#fa8900]" : halfFilled ? 'text-[#f7ca00]' : 'text-gray-500' }`}
                    />
                  )
                })
              }
            </div>
            <p className=' text-base font-semibold'>{`(${product?.rating?.toFixed(1)}) reviews`}</p>
            </div>
          </div>
          <p className='flex items-center'>
              <FaRegEye className='mr-1' />{" "}
              <span className='font-semibold mr-1'>300+</span>
              Peoples are viewing this right now
          </p>
          <p>You are saving{" "} 
            <PriceFormate amount={product?.price * product?.discountPercentage / 100}  className='text-base font-semibold text-cyan-700'/> upon purchase 
          </p>
          <div className=' space-y-4'>
            <p className=' text-sm tracking-wide'>{product?.description}</p>
            <p className=' text-base'>{product?.warrantyInformation}</p>
            
          </div>
          <p>
              Brand: <span className=' font-medium'>{product?.brand}</span>
            </p>
            <p>
              Category: {" "}
              <span className=' font-medium capitalize '>{product?.category}</span>
            </p>
            <p>
              Tags: {" "}
              {product?.tags?.map((item, index) => (
                <span key={index} className=' font-medium capitalize'>
                  {item}
                  {index < product?.tags?.length - 1 && ", "}
                </span>
              ))}
            </p>
            <AddToCartButton product={product} className='font-semibold uppercase rounded-md w-full'/>
            <div>
              <Image src="/images/paymentCard.png" alt='payment' width={350} height={45} />
            </div>
        </div>
        {/* product reviews */}
    </Container>
    
  )
}

export default SingleProductPage