import React from 'react'
import logo from '../assets/1logo.png'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const navi = useNavigate();
  return (
  <>
    <div className='shadow-md'>
<div className='max-w-6xl  py-3 font flex md:justify-between items-center mx-auto justify-center'>
     <div className='hidden md:inline'>
      <img src={logo} alt="dope_devs" className='w-[70px]' />
     </div>
     <div>
      <ul className='flex md:space-x-6 mx-6 space-x-5 '>
        <li className='text-[#5a5a5a] font-semibold hover:scale-110 hover:underline transition duration-300 cursor-pointer' onClick={() => navi("/")}>Home</li>
        <li className='text-[#5a5a5a] font-semibold hover:scale-110 hover:underline transition duration-300 cursor-pointer' onClick={() => navi("/team")}>Team</li>
        <li className='text-[#5a5a5a] font-semibold hover:scale-110 hover:underline transition duration-300 cursor-pointer' onClick={() => navi("/events")}>Events</li>
        <li className='text-[#5a5a5a] font-semibold hover:scale-110 hover:underline transition duration-300 cursor-pointer' onClick={() => navi("/#contact")}>Contact</li>
      </ul>
     </div>
    </div>
    </div>

   
  </>
  )
}
