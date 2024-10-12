import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 px-10 py-7 border-pink-500 border-2'>
      <h1 className='text-3xl font-extrabold'>BLACKPINK FAN HUB</h1>
      <p className='md:text-[2vw] text-[4vw] p-1 text-pink-500 font-bold'>A Comprehensive Online Platform For Blackpink Enthusiasts</p>
      <p className='text-lg font-semibold'>Hello, I Khushi Varshney, is very pleased to introduce the "BLACKPINK FAN HUB", a meticulously designed online platform dedicated to providing an immersive experience for fans of the renowned K-POP Group, BLACKPINK. This Website is for all of those BLINKS like me who have loved BLACKPINK infinitely and will continue to adore, respect and protect them. As a Fan-Driven Project, This website is created for the BLINKS so that they can unite, share and indulge in their Love for Rose, Jennie, Lisa and Jisoo.</p>
      <p className='text-lg font-semibold'>The Blackpink Fan Hub aims to provide a user-friendly and engaging environment for fans worldwide, fostering a sense of community and connection. Our Goal is to become the premier online destination for BLACKPINK Enthusiasts, Offering unparalleled access to information, resources and networking opportunities.</p>
      <p className='md:text-[2vw] text-[4vw] font-extrabold py-2 text-pink-800'>BLACKPINK-BLINK UNIVERSE &hearts; Explore, Connect and Celebrate with Blackpink Fan Hub.</p>
      <div><NavLink to="/contact" className="bg-yellow-50 text-lg hover:bg-black hover:text-pink-700 hover:border-red-600 hover:text-xl hover:font-bold text-black border-pink-500 border-[3px] rounded-lg px-7 py-2">Contact Us</NavLink></div>
    </div>
  )
}

export default About
