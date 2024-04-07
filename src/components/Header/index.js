import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";  
import { FaUserCircle } from "react-icons/fa"; 

export const Header = () => {
  return (
    <div className='bg-indigo-900 h-14 flex justify-between px-9 items-center'>
        <div className='flex items-center font-bold'>
            <GiHamburgerMenu className='text-white mx-4 text-xl'/>
            <h1 className='text-white text-xl'>IndigoLearn</h1>
        </div>

        <div className='hidden md:flex items-center text-white font-medium'>
            <p className='mx-4'>BUY COURSES</p>
            <p className='mx-4'>PROGRAMS</p>
            <p className='mx-4'>FREE RESOURCES</p>
        </div>

        <button className='bg-white p-2 rounded-md text-indigo-800 font-medium flex items-center text-base'><FaUserCircle className='mx-1 te'/> Log In/Sign Up</button>
    </div>
  )
}

export default Header