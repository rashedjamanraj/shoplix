"use client"

import { signOut } from 'next-auth/react'
import React from 'react'

const Signout = () => {
  return (
    <button onClick={() => signOut()} className=' cursor-pointer hover:text-sky-600'>
      Signout
    </button>
  )
}

export default Signout