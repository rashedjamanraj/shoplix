import Container from '@/components/Container'
import ProductImages from '@/components/ProductImages';
import { getData } from '@/helpers';
import { ProductType } from '../../../../typs';
import ProductPrice from '@/components/ProductPrice';
import { MdStar } from 'react-icons/md';

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
        </div>
        {/* product reviews */}
    </Container>
    
  )
}

export default SingleProductPage