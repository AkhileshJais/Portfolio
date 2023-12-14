import React, { useEffect, useRef } from 'react'
import BannerImage from '../assets/bi1.png'
import BannerImage2 from '../assets/Akleh4.png'
import BannerBackGround from '../assets/banner_wallpaper.svg'
import Typed from 'typed.js'

const Banner = () => {

  const el = useRef(null);

  useEffect(()=>{
  const typed = new Typed(el.current,{
    strings:["Frontend Developer"],
    startDelay:300,
    typeSpeed:50,
    backSpeed:10,
    backDelay:100,
    loop:true
  })
  return()=>{
    typed.destroy();
  };
  },[])

  return (
    <div style={{
        backgroundImage:`url(${BannerBackGround})`,
        backgroundSize: 'cover' }} className='main-container flex items-center your-containe'>
    {/*   ---------------------Image-------------------     */}
    <div className=' w-full flex item-center justify-center text-white'>
    <div className='w-2/3 ms-4'>
    <h3 className='text-3xl-semibold'> Hi, I am </h3>
    <h2 className='mt-3 text-4xl font-bold'>Aklesh Jaiswar </h2>
    <h1 className='mt-3 text-2xl'>I am <span className='font-bold underline' ref={el}></span> </h1>
    <p className='mt-3'>Hello there! 👋 I'm Aklesh Jaiswar, a passionate and creative web developer with a love for cutting-edge technologies. My journey in the vast world of web development has been shaped by my expertise in a variety of powerful tools and frameworks</p>
   <br/>
    <div className='icon-container flex space-x-5'>
    <a className='hover:bg-orange-600 border cursor-pointer px-1 py-1 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800'>
    <i class="fa-brands text-4xl fa-facebook"></i>
    </a>
    <a className='hover:bg-orange-600 border cursor-pointer px-1 py-1 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800'>
    <i class="fa-brands text-4xl fa-instagram"></i>
    </a>
    <a className='hover:bg-orange-600 border cursor-pointer px-1 py-1 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800'>
    <i class="fa-brands text-4xl fa-youtube"></i>
    </a>
    <a className='hover:bg-orange-600 border cursor-pointer px-1 py-1 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800'>
    <i class="fa-brands text-4xl fa-linkedin"></i>
    </a>
    </div>

    <br/>
    <a className='px-3 py-2 bg-orange-500 rounded-full shadow-lg' href='/contact'>Contact Me</a>
    </div>
    </div>

    {/*    --------------------Text---------------------    */} 
    <div className=" w-full flex justify-center">
    <img  className="rounded-full my-2 w-fit" style={{ width: '80%', Width: '50px', height: 'auto' }} src={BannerImage2}></img>
    
    </div>
    </div>
  )
}

export default Banner