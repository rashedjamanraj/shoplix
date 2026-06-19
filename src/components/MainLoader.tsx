import React from 'react'
import { logoShoplix } from '@/assets'
import Image from 'next/image'


const MainLoader = () => {
  return (
    <div className="w-full min-h-screen absolute top-0 left-0 bg-white flex flex-col gap-2 items-center justify-center z-50">
      <div className="w-52 p-4 rounded-lg bg-amazonBlue flex items-center justify-center relative animate-bounce">
        <Image
          src={logoShoplix}
          alt="RJR-DX Logo"
          className="w-48 h-auto object-contain"
          priority
        />
      </div>

      <span className="w-14 h-14 inline-flex border-8 border-gray-50 rounded-full relative">
        <span className="w-14 h-14 border-8 border-r-sky-600  border-b-gray-50 border-t-gray-50 border-l-gray-50 rounded-full absolute -top-2 -left-2 animate-spin" />
      </span>
      <p className="mt-4 text-lg text-center font-semibold tracking-wide text-sky-600">
        Loading...
      </p>
    </div>

  )
}

export default MainLoader