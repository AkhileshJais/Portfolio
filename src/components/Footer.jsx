import React from 'react'

const Footer = () => {
  return (
    <div className='py-5 bg-gray-200 flex justify-between px-10'>
    <div className=''>
  <p>@2023 Aklesh Jaiswar <span>All Rights Reserved</span></p>
  
    </div>
 <div className='space-x-5'>
   <a href='/about' className='hover:underline'>About</a>
   <a href='/about' className='hover:underline' >Privacy Policy</a>
   <a href='/about' className='hover:underline' >Licensing</a>
   <a href='/about' className='hover:underline' >Contact</a>
   </div>
    </div>
  )
}

export default Footer