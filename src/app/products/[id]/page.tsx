import Container from '@/components/Container'
import { getData } from '@/helpers';

interface Props {
  params: {
    id: string;
  };
}

const SingleProductPage = async ({params}: Props) => {
  const {id} = params;

  const endpoint = `https://dummyjson.com/products/${id}`
  const product= await getData(endpoint);
    console.log(product);
    
  return (
    <Container className=' py-10 '>
        single
    </Container>
    
  )
}

export default SingleProductPage