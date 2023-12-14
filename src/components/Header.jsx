import React from 'react'

const Header = () => {
    const [menuLink, setMenuLink] = React.useState([
        {
            titile:"Home",
            link:"/homr",
            id:1,
        },
        {
            titile:"About",
            link:"/about",
            id:2,
        },
        {
            titile:"Skills",
            link:"/skills",
            id:3,
        },
        {
            titile:"Portfolio",
            link:"/portfolio",
            id:4,
        },
        {
            titile:"Contact",
            link:"/contact",
            id:5,
        }
    ])
  return (
    <div className='h-20 border main flex justify-between items-center px-14 bg-gray-100'>
     <div className="text-2xl font-bold"><h1>Aklesh Jaiswar</h1></div>
     <div className='space-x-3'>
     
     {
        menuLink.map((data)=> <a  key={data.id} href={data.link}className='hover:text-orange-600'>{data.titile}</a>)
     }


     </div>
     <div className="">
     <button className='px-4 py-2 bg-orange-500 shadow rounded-full text-1xl'>Hire Me</button>
     </div>
     </div>
  )
}

export default Header