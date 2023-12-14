import React, { useState } from 'react'
import bannerImage from '../assets/Akleh4.png'

const About = () => {

  const [data,setData] = useState({
   image:bannerImage,
   title:'Software Engineer and Frontend Developer',
   desc1:'I m fueled by the desire to create elegant solutions to real-world problems. Whether it is a small personal project or a large-scale application, I bring the same level of dedication and craftsmanship to every endeavor. I thrive in collaborative environments and welcome challenges that push me to grow as a developer.',
   desc2:'If you are as excited about the world of web development and technology as I am, let is connect! I am always open to new opportunities, collaborations, and discussions about the latest trends in the tech space. Feel free to explore my GitHub repositories to see my work in action.'
  ,
   actionButton:{
   title:"Read More...",
   link:"/readmore"
  }
  })

  return (
    <>
    <div className='main-container bg-gray-100 py-15 mt-1 justify-center '>
     <h1 className='text-4xl font-bold text-center underline'> About Me </h1> 

                                          {/* left box */}
     <div className='flex items-center'>
     <div className=' w-full flex justify-center'>
      <img className='rounded-full my-2 w-fit' src={bannerImage} alt='Aklesh Jaiswar' />
     </div>

                                         {/* right box */}
     <div className='w-full flex justify-center'> 
      <div className='space-y-5 w-2/3'>
      <h1 className='text-3xl font-semibold'>{data.title}</h1>
      <p>{data.desc1}</p>
      <p>{data.desc2}</p>
      <button className='bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg'>{data.actionButton.title}</button>
      </div>
       </div>

       </div>

    </div>
    </>
  )
}

export default About