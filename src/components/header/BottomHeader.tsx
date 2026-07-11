
import Link from 'next/link'
import Container from '../Container'
import { navigation } from '@/constants'
import { getServerSession } from 'next-auth'
import Signout from '../Signout'

const BottomHeader = async() => {
  const session = await getServerSession();

  return (
    <div className=' border-b border-b-gray-400'>
      <Container className=' flex items-center justify-between py-1 '>
        <div className=' flex items-center font-medium text-xs md:text-sm gap-2 md:gap-5'>
          {
            navigation?.map((raj, index) =>(
               <Link key={index} href={raj?.href} className=' hover:text-sky-600 duration-200 cursor-pointer'>{raj?.title}</Link>
            ))}
          {session?.user ? (
            <Signout />
          ) : ( <p  className=' hover:text-sky-600 duration-200 cursor-pointer'>Signin to view your cart</p>)}
        </div>
         <p className=' hidden md:inline-flex text-xs text-gray-400 font-medium'> 
          <span className=' text-black'>Hotline: +88 09111365247</span>
         </p>
      </Container>
    </div>
  )
}

export default BottomHeader
