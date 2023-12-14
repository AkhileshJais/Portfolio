import React from 'react'
import BannerBackGround from '../assets/banner_wallpaper.svg'

const Expertise = () => {
  return (
   
    <div className='justify-cente'>
    <h1 className='mb-10 text-4xl font-bold underline text-center'> My Experties </h1>
    <div style={{
        backgroundImage:`url(${BannerBackGround})`,
        backgroundSize: 'cover'
    }} className='box-container items-center flex py-16'>
    <div className='flex justify-center '>
    <div className='w-2/4 text-center text-white space-y-4'>
    <h1 className='text-4xl font-semibold'>I love this Technologies </h1>
    <p>I am passionate and creative web developer with a love for cutting-edge technologies. Web development has been shaped by my expertise in a variety of powerful tools and frameworks</p>
    <button className='px-4 py-2 bg-orange-500 text-2xl rounded-full'>Hire Me</button>
    </div>
    </div>
    <div className='flex justify-center' >
    <div className=' flex justify-center  w-2/3 h-fit space-x-2 flex-wrap '>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2  rounded-full hover:bg-orange-500 cursor-pointer'>JavaScript</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>React JS</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Tailwind CSS</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>HTML</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>CSS</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Boostrap</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>ReduxToolkit</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>GIT</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Postmen</p>
    </div>
   
    </div>
    </div>
    </div>
  )
}

export default Expertise