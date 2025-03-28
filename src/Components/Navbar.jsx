import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../public/logo.png'
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import profile from '../../public/profile.jpg';






const Navbar = () => {
  return (
    <div className='flex justify-between px-6 py-2 fixed top-0 w-[100%] bg-white'>
        <div className=' flex justify-center items-center space-x-4'><RxHamburgerMenu  className='text-xl cursor-pointer' /><img className='w-28 cursor-pointer' src={logo} alt="" /></div>
        <div className=' flex w-[35%] items-center'>
           <div className=' hidden lg:w-[100%] lg:px-3 py-2 border   rounded-l-full lg:block'> 
            <input className='outline-none' type="text" placeholder='Search'  />
            </div>
           <button className='  hidden lg:px-4 py-2 border rounded-r-full lg:bg-gray-100 lg:block'><CiSearch className='text-[25px]' /></button>
           <IoMdMic className=' hidden lg:text-[42px] ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200 lg:block' />
        </div>
        <div className=' flex space-x-5 items-center'>
        <RiVideoAddLine  className='text-2xl'/>
        <AiOutlineBell className='text-2xl' /> 
        <img className=' w-[0px] lg:w-[32px] rounded-[50%]' src={profile} alt="" />
        </div>
        <div className='p-2'><CiSearch className='text-[25px]'/></div>
    </div>
  )
}

export default Navbar