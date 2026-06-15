import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import Image from 'next/image'
import { logoShoplix } from '@/assets'
import SocialLinks from '../SocialLinks'
import Title from '../Title'
import { navigation } from '@/constants'
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='bg-lightBG py-10 lg:py-20'>
      <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
        <div className='flex flex-col gap-y-5'>
          <Link href={"/"}>
            <Image src={logoShoplix} alt='LogoShoplix' className='h-12 w-36 priority' />
          </Link>
          <p>I'm Rashed Jaman Raj. Full Stack JavaScript Developer. Developing web, web app & Superior Software for Leading Businesses.</p>
          <SocialLinks iconStyle='bg-white/80 border border-sky-600 shadow-md text-black p-3 text-lg hover:bg-sky-600 hover:text-white cursor-pointer duration-200 rounded-md'  />
        </div>



        <div>
          <Title>My Account</Title>
          <div className=' flex flex-col font-medium text-xs md:text-sm gap-1 md:gap-3'>
          {
            navigation?.map((raj, index) =>(
               <Link key={index} href={raj?.href} className=' hover:text-sky-600 duration-200 cursor-pointer'>{raj?.title}</Link>
            ))}
          <Link href={"/signin"} className=' hover:text-sky-600 duration-200 cursor-pointer'>signin</Link>
        </div>
        </div>



        <div>
          <Title>Informatin</Title>
          <div>
            <p>Our Awesome Proucts</p> 
            <p>Our Company Details </p>
            <p>Privacy Policy</p>
            <p>products About</p>
            <p>Our Members</p>
            <p>About Our Team </p>
            <p>Others</p>

          </div>
        </div>




        <div>
            <Title>Talk To Us</Title>
            <p>Got Questions? Call Us</p>
            <p className='  font-semibold'>+88 09111365247</p>
            <div>
              <MdOutlineEmail />
              rashed.jaman.raj@gmail.com
            </div>
            <div>
              Dhaka, Bangladesh
            </div>
            
        </div>
        
      </Container>
    </div>
  )
}

export default Footer