import React from 'react'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'

const Header = () => {
  return (
    <div className=' sticky top-0 z-50 bg-white'>
      <TopHeader />
        <BottomHeader />
    </div>
  )
}

export default Header