import React from 'react'
import first from '../assets/FirstEvent.png';
import second from '../assets/SecEvent.png';
import third from '../assets/Thrid.jpg';
import coming from '../assets/coming.png';
import Footer from '../components/Footer';
export default function Events() {
  document.title = "Dope Devs | Events"

  return (
    <>
      <div className='max-w-6xl mx-auto my-10 font text-[#5a5a5a] font'>
        <h1 className='text-[#5a5a5a] text-xl font-semibold text-center uppercase'>Journey Through Time</h1>
        <h1 className='text-[#3e3e3e] text-2xl font-semibold text-center uppercase'>Upcoming and Past Events</h1>
        <div className='my-6 space-y-6'>
          <div className='flex flex-col lg:flex-row shadow-md border border-gray-300 items-center'>
            <img src={first} alt="f_event" className='lg:w-[40%] border border-gray-300' />
            <div className='m-3  w-full'>
              <p className='my-3'>04 Nov, 2023</p>
              <h1 className='text-[#5a5a5a] text-3xl font-semibold text-center uppercase'>The 2023 <span className='underline'>Web Developer</span></h1>
              <div className='flex flex-col'>
                <p className='text-[#5a5a5a] my-3'>Step into the future of web development with "The 2023 Web Developer" event! Our speaker shared invaluable insights on the evolving landscape of web development, emphasizing the importance of focusing on niche expertise, mastering cutting-edge tools, and thriving in the dynamic realm of 2023 web development. Attendees gained a profound understanding of the industry's latest trends and emerging technologies, empowering them to stay ahead of the curve. The event served as a catalyst for attendees to refine their skills, broaden their perspectives, and build a roadmap for success in the fast-paced world of web development. </p>
                <div className='flex space-x-3'>
                  <p className='px-3 py-1 rounded-full border-gray-300 border'>Virtual</p>
                  <p className='px-3 py-1 rounded-full border-gray-300 border'>Speaker: Arsalan Khattak</p>
                </div>
                <div className='flex justify-center my-2'>
                  <button className='bg-[#3e3e3e] text-white px-3 py-1 rounded-md mt-3'><a href='https://www.linkedin.com/feed/update/urn:li:activity:7136008060346454016'>Read more</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex shadow-md flex-col lg:flex-row border border-gray-300 items-center'>
            <img src={second} alt="f_event" className='lg:w-[40%] ' />
            <div className='m-3  w-full'>
              <p className='my-3'>26 Jan, 2024</p>
              <h1 className='text-[#5a5a5a] text-3xl font-semibold text-center uppercase'>Da <span className='underline'>JavaScript</span> Hour</h1>
              <div className='flex flex-col'>
                <p className='text-[#5a5a5a] my-3'>
                  Dive deep into the realm of JavaScript mastery with our event, "Da JavaScript Hour"! Our speaker delved into the intricacies of JavaScript, guiding attendees through a dynamic session that unraveled the power and potential of this programming language. The central theme revolved around efficiency and effectiveness in JavaScript development. The speaker emphasized the significance of optimizing code, exploring advanced functionalities, and leveraging the latest features to elevate one's JavaScript expertise. Participants left the event with a renewed passion for JavaScript, armed with practical tips and techniques to enhance their coding proficiency. "Da JavaScript Hour" wasn't just an event; it was a focused exploration of the nuances that make JavaScript a force to be reckoned with in the world of programming.</p>
                <div className='flex space-x-3'>
                  <p className='px-3 py-1 rounded-full border-gray-300 border'>Virtual</p>
                  <p className='px-3 py-1 rounded-full border-gray-300 border'>Speaker: Hamza Khattak</p>
                </div>
                <div className='flex justify-center my-2'>
                  <button className='bg-[#3e3e3e] text-white px-3 py-1 rounded-md mt-3'><a href='https://www.linkedin.com/feed/update/urn:li:activity:7157378008540971008'>Read more</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex shadow-md flex-col lg:flex-row border border-gray-300 items-center'>
            <img src={third} alt="f_event" className='lg:w-[40%] ' />
            <div className='m-3  w-full'>
              <p className='my-3'>28 Jan, 2024 - 4 Feb, 2024 (Bootcamp)</p>
              <h1 className='text-[#5a5a5a] text-3xl font-semibold text-center uppercase'>Web <span className='underline'>Spark Series</span></h1>
              <div className='flex flex-col'>
                <p className='text-[#5a5a5a] my-3'>
                  Web Spark Series was a series of events that will help you learn the basics of web development. The series covered the basics of HTML, CSS, and JavaScript. Amazing folks joined us to get their hands dirty with code and learned the basics of web development.</p>
                <div className='flex  flex-col lg:w-[40%] space-y-3 justify-center items-center'>
                  <p className='px-3 py-1 rounded-full border-gray-300 border text-center'>Virtual</p>
                  <p className='px-3 py-1 rounded-full border-gray-300 border text-center'>Day 1 : Arsalan Khattak</p>
                  <p className='px-3 py-1 rounded-full border-gray-300 border text-center'>Day 2 : Maaz Ahmed</p>
                  <p className='px-3 py-1 rounded-full border-gray-300 border text-center'>Day 3 : Abdul Wassay</p>
                  <p className='px-3 py-1 rounded-full border-gray-300 border text-center'>Day 4 : Hamza Khattak</p>
                </div>
                <div className='flex justify-center my-2'>
                  <button className='bg-[#3e3e3e] text-white px-3 py-1 rounded-md mt-3'><a href='https://www.linkedin.com/feed/update/urn:li:activity:7158515941734068225'>Read more</a></button>
                </div>
              </div>
            </div>
          </div>

          <div className='flex shadow-md flex-col lg:flex-row border border-gray-300 items-center'>
            <img src={coming} alt="f_event" className='lg:w-[40%] ' />
            <div className='m-3  w-full'>
              <p className='my-3'>TBD</p>
              <h1 className='text-[#5a5a5a] text-3xl font-semibold text-center uppercase'>The Depth of <span className='underline'>Firebase</span></h1>
              <div className='flex flex-col'>
                <p className='text-[#5a5a5a] my-3'>

                  Ignite your development journey at our upcoming event, "Firebase Future Unleashed"! Join us for an immersive exploration into the boundless possibilities that Firebase offers in shaping the future of app and web development. Our expert speakers will illuminate the diverse features and functionalities of Firebase, showcasing how it can seamlessly integrate into your projects to enhance scalability, performance, and user engagement.
                </p>
                <div className='flex space-x-3 justify-center items-center'>
                  <p className='px-3 py-1 rounded-full border-gray-300 border text-center'>In-person</p>
                  <p className='px-3 py-1 rounded-full border-gray-300 border text-center'>Speaker: Hamza Khattak</p>
                  <p className='px-3 py-1 rounded-full border-gray-300 border text-center'>International Islamic University</p>

                </div>
                <div className='flex justify-center my-2'>
                  <button className='bg-[#3e3e3e] text-white px-3 py-1 rounded-md mt-3'><a>Read more</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
