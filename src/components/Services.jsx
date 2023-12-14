import React from 'react'

const Services = () => {
  return (
    <div className='main-container py-5'>
    
    <h1 className='text-4xl font-bold text-center underline'> My Services</h1>
    <div className="services-container space-x-5 px-10 flex mt-10">

    <div className='cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center service1 space-y-3 shadow-lg rounded-xl'>
    <i class=" text-4xl fa-brands fa-aws"></i>
    <h1 className='text-4xl '>Web Development</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat possimus ad maiores molestiae iusto est aliquid modi rerum tenetur dolorem!</p>
    <button className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl'>Check</button>
    </div>
    <div className='cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center  space-y-3 shadow-lg rounded-xl'>
    <i class="text-4xl fa-solid fa-mobile"></i>
    <h1 className='text-4xl'>Web Development</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat possimus ad maiores molestiae iusto est aliquid modi rerum tenetur dolorem!</p>
    <button className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl'>Check</button>
    </div>
    <div className=' cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center  space-y-3 shadow-lg rounded-xl'>
    <i class="text-4xl fa-solid fa-server"></i>
    <h1 className='text-4xl'>Web Development</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat possimus ad maiores molestiae iusto est aliquid modi rerum tenetur dolorem!</p>
    <button className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl'>Check</button>
    </div>
    </div>
    </div>
  )
}

export default Services