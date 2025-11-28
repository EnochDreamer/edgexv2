import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from '@/home/Footer'

function Courses() {
  return (
    <div className='pt-5 h-screen flex flex-col'>
        <div className='flex-shrink-0'><Header/></div>
        <div className='flex-1 overflow-auto pb-20 sm:pb-0'><Body/></div>
        <div className='flex-shrink-0'><Footer/></div>
    </div>
  )
}

export default Courses