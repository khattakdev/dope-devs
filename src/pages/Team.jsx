import React from 'react'
import Arsalan from '../assets/Arsalan.png'
import Hamza from '../assets/Hamza.png'
import Tayyaba from '../assets/Tayyaba.jpeg'
import linked from '../assets/linkedin.svg'
import instagram from '../assets/insta.svg'
import Footer from '../components/Footer'

export default function Team() {

  const team = [
    {
    name: "Arsalan Khattak",
    position: "Community Founder",
    image: Arsalan,
    des: "Arsalan Khattak is all about tech and education, diving deep into Web Development and Developer Relations (DevRel) with loads of enthusiasm since 2019, aiming to light the way for fellow tech lovers on the rise. Arsalan in Ex Software Engineer at Vercel and currently Arsalan Khattak is working as DevRel at Bryntum.",
    linkedin: "https://www.linkedin.com/in/khattakdev/",
    instagram: "https://www.instagram.com/khattakdev/",
  },
  {
    name: "Hamza Khattak",
    position: "Community Manager",
    image: Hamza,
    des: "Hamza Khattak is FrontEnd Web Developer and a Computer Science student. He is a passionate learner and loves to share his knowledge with others. He is a community moderator at Dope Devs and also a content creator. He is also a member of Google Developer Student Club and a Microsoft Learn Student Ambassador.",
    linkedin: "https://www.linkedin.com/in/mzeedev/",
    instagram: "https://www.instagram.com/mzeedev/",
  },
  {
    name: "Tayyaba Ai",
    position: "Content Creator",
    image: Tayyaba,
    des: "Tayyaba Ali is a full stack web development enthusiast and a data science student seeking to fuse both the fields to create a greater impact in the world of tech. Her only goal is to make the things  easy for new beginners that she struggled with during the learning curve so that others don't have to go through the same thing and enjoy learning data science and web development.",
    linkedin: "https://www.linkedin.com/in/tayyaba-ali-95157120a/",
    instagram: "",
  },
]
  return (
   <>
   <div className='max-w-6xl mx-auto my-10 font text-[#5a5a5a]'>
   <h1 className='text-[#5a5a5a] text-xl font-semibold text-center uppercase'>Meet our Team</h1>
   <h1 className='text-[#3e3e3e] text-2xl font-semibold text-center uppercase'>The Faces Behind Dope Devs</h1>
   <div className='grid lg:grid-cols-3 md:gap-12 my-3 rounded-md md:grid-cols-2'>
   {team.map((person, key) => (
    <div className='shadow-lg ' key={key}>
     <div className='h-[50%] overflow-hidden'>
     <img src={person.image} alt="img" className='rounded-md'/>
     </div>
    <div className=''>
      <h1 className='text-center font-semibold text-[#3e3e3e]'>{person.name}</h1>
      <div className='flex justify-center'>
      <h1 className=' bg-gray-600 text-white p-1 rounded-lg'>{person.position}</h1>      
      </div>
      </div>
      <p className='p-1 text-gray-600'>{person.des}</p>
     <div className='flex justify-center items-center space-x-5 mt-3'>
      <a href={person.linkedin}><img src={linked} alt="linked-in" className='h-8'/></a>
      <a href={person.instagram}><img src={instagram} alt="instagram" className='h-11'/></a>
     </div>
      </div>
   ))}
   </div>
   </div>
   <Footer/>
   </>
  )
}
