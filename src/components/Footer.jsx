import React from 'react'
import logo from '../assets/1logo.png'
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsDiscord } from "react-icons/bs";

export default function Footer() {
  return (
    <>
    <div className='mt-24  border-t-2 border-gray-400 font'>
      <div className='flex mt-3 items-center justify-between mx-3'>
         <img src={logo} alt="footer" className='lg:w-[70px] w-[50px] md:w-[50px] my-2' />
         
         <div className=''>
           <ul className='flex md:space-x-6 text-[#3e3e3e] underline cursor-pointer'>
            <li className='flex items-center md:text-xl'><BsDiscord className='mx-3'/>  <a href="https://discord.gg/wVaySB5H">Discord</a></li>
            <li className='flex items-center md:text-xl'><RiInstagramFill className='mx-3'/>  <a href="https://www.instagram.com/dope_devs/">Instagram</a></li>
            <li className='flex items-center md:text-xl'><FaLinkedin className='mx-3'/><a href='https://www.linkedin.com/company/dope-devs/'>LinkedIn</a></li>
           </ul>
      </div>
      </div>
    </div>
    </>
  )
}
