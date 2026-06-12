import Link from 'next/link'
import { twMerge } from 'tailwind-merge'




interface Props {
  children : React.ReactNode;
  className?: string;
  href?: string;
}

const Button = ({children, className, href}: Props) => {
  return (
    <>
    {<Link href="/products"
      className={twMerge(' bg-cyan-600 text-white py-2 px-6 hover:bg-cyan-700 cursor-pointer duration-200', className)}>{children}
    </Link>} 
    
    </>
  )
}

export default Button