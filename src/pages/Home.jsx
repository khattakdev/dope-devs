import React from 'react'
import logo from '../assets/1logo.png'
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsDiscord } from "react-icons/bs";
import scales from '../assets/scales.png'
import Foother from '../components/Footer'
export default function Home() {
  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center flex-col justify-center my-24 '>
          <div className='flex items-center'>
            <h1 className='text-6xl font font-bold text-[#3e3e3e]'>Dope Devs</h1>
            <img src={logo} alt="logo" className='h-[60px]' />
          </div>
          <p className='text-[#5a5a5a] font-semibold my-4 text-xl font'>Crafting coders, the dope way!</p>
          <div>
            <ul className='flex md:space-x-6 text-[#3e3e3e] cursor-pointer space-x-2 '>
              <li className='flex items-center lg:text-2xl md:text-xl border border-gray-400 px-1 rounded-md hover:scale-110 duration-200'><BsDiscord className='mx-2' /> <a href="https://discord.gg/wVaySB5H">Discord </a></li>
              <li className='flex items-center lg:text-2xl md:text-xl  border border-gray-400 px-1 rounded-md hover:scale-110 duration-200'><RiInstagramFill className='mx-2' /> <a href="https://www.instagram.com/dope_devs/">Instagram </a></li>
              <li className='flex items-center  lg:text-2xl md:text-xl  border border-gray-400  px-1 py-2 rounded-md hover:scale-110 transition duration-200'><FaLinkedin className='mx-2' /> <a href="https://www.linkedin.com/company/dope-devs/">LinkedIn </a></li>
            </ul>
          </div>
        </div>

        <div>
         
          <p className='text-[#5a5a5a] font md:mx-24 mx-3'>
At Dope Devs, we believe in the transformative power of code. It's not just about lines on a screen; it's about crafting experiences, pushing  boundaries, and shaping the digital world. That's why we've built a dynamic community that celebrates the art of everything code-related, from web design and development to databases, apps, AI, and beyond.
We embrace the philosophy of "Crafting coders, the dope way," fostering an inclusive space where anyone, regardless of their skill level, can embark on their coding journey and thrive. Whether you're a seasoned veteran or a curious newcomer, you'll find a welcoming home among our passionate community.
Collaboration is at our core. We believe that by sharing knowledge, experiences, and challenges, we can all elevate our skills and reach new heights. Our community thrives on open communication, mentorship, and a willingness to help one another.
Shared learning fuels our fire. We offer a wealth of resources, workshops, and events designed to cater to all levels of expertise. From beginner tutorials to advanced discussions, there's always something new to discover and learn.
Passion is our compass. We're driven by a shared love for coding and its potential to create positive change. This passion fuels our community, fostering a culture of innovation, creativity, and problem-solving.
Join us at Dope Devs, and start an this exciting journey with us. Together, we can create, collaborate, and empower each other to become the dopest coders we can be.


          </p>
        </div>

        <div className='my-24 mx-3'>
        <h1 className='text-[#5a5a5a] text-xl font-semibold  uppercase'>Guiding Principles</h1>
        <h1 className='text-[#3e3e3e] text-2xl font-semibold uppercase'>Our Code of Conduct</h1>
       <div className='flex flex-col md:flex-row items-center'>
       <ul className=' list-disc my-2 space-y-3 font text-[#5a5a5a]'>
          <li id='contact'>
          We welcome and support people of all backgrounds and identities. This includes but is not limited to members of any race, ethnicity, culture, national origin, color, immigration status, social and economic class, educational level, sex, sexual orientation, gender identity and expression, age, size, family status, political belief, religion, and mental and physical ability.
          </li>
          <li>We will not tolerate harassment of community members in any form, including but not limited to harassment based on gender, gender identity, sexual orientation, disability, physical appearance, body size, race, or religion.</li>
          <li>Maintain a professional and respectful tone during all interactions. Disagreements are natural, but should be resolved courteously and professionally.</li>
         <li>Discriminatory jokes, language, and any form of hate speech are not allowed in our community. Members engaging in discriminatory behavior will face strict action, including potential banning from the community.</li>
         <li>If you are subject to or witness any violations of this Code of Conduct, please report them to <strong>hey@devsdope.com.</strong> All reports will be reviewed and investigated, and will result in a response that is deemed necessary and appropriate to the circumstances.We will prioritize marginalized people’s safety over privileged people’s comfort. The community organizers will not act on complaints regarding:‘Reverse’ -isms, including ‘reverse racism,’ ‘reverse sexism,’ and ‘cisphobia’.Reasonable communication of boundaries, such as “leave me alone,” “go away,” or “I’m not discussing this with you.”</li>
         <li>We encourage members to provide constructive feedback and to foster discussions that help individuals and the community grow. We seek to build a community where all members feel comfortable and empowered to share their experiences and knowledge.This Code of Conduct applies to all community spaces, both online and off. Anyone who violates this Code of Conduct may be sanctioned or expelled from these spaces at the discretion of the Dope Devs community organizers.</li>
        </ul>
     <img src={scales} alt="sclaes" className='md:w-[44%] lg:w-[30%] w-[50%]'/>
       </div>
       <p className='font text-[#3e3e3e]'>Thank you for helping make Dope Devs a welcoming, respectful, and inclusive community for all developers. ❤️</p>
        </div>
      </div>
      <Foother />
    </>
  )
}
