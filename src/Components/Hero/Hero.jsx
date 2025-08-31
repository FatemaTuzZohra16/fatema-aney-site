import React from 'react'
import Container from '../Layout/Container'
import aney from '../../assets/aney.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className='bg-black pb-[90px] pt-[150px] overflow-visible'>
      <Container>
        <div className='flex justify-between'>
          <div className='w-[60%]'>
            <h3 className='font-body text-[25px] leading-[40px] text-primary'>Hello, I'm</h3>
            <h1 className='text-white font-heading font-semibold text-[45px] leading-[65px]'>Fatema Tuz Zohra</h1>
            <h2 className='text-primary font-body font-medium text-[26px] leading-[40px] py-2'>
          <Typewriter
    onInit={(typewriter) => {
      typewriter
        .typeString("Frontend Web Developer") // টেক্সট টাইপ করবে
        .callFunction(() => {
          const cursor = document.querySelector(".Typewriter__cursor");
          if (cursor) cursor.style.display = "none"; // টাইপ শেষে cursor hide
        })
        .start();
    }}
    options={{
      autoStart: true,
      loop: false,
      delay: 75,
    }}
  />
            </h2>
            <p className='w-[641px] pt-5 pb-8 font-body text-white leading-[32px] text-[18px]'>Bringing ideas to life with code, I create interactive, seamless, and engaging web experiences that leave a lasting impression. Using HTML, CSS, React, and Tailwind, I focus on building websites that are not only visually appealing but also intuitive, responsive, and highly functional. My goal is to craft digital experiences that delight users, elevate brands, and turn ideas into reality.</p>
            <div className='flex gap-x-6'>
              <button className='bg-primary text-white font-body py-3 px-[25px] rounded cursor-pointer hover:scale-110 transition-all duration-300'>About Me</button>
              <button className='bg-primary text-white font-body py-3 px-[25px] rounded cursor-pointer hover:scale-110 transition-all duration-300'>Download Resume</button>
            </div>
            <h2 className='text-white font-heading font-semibold text-[40px] leading-[65px] mt-8'>Find Me On</h2>
            <h3 className='text-white font-body font-medium text-[18px] leading-[40px]'>Feel free to <span className='text-primary'>connect</span> with me</h3>
            <div className='social links mt-6'>
              <ul className='flex items-center gap-x-5'>
                <li className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center text-primary hover:bg-[#0A192F] hover:text-white transform transition duration-300 hover:-translate-y-2'>
                  <a href=""><FaGithub size={24} /></a>
                </li>
                <li className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center text-primary hover:bg-[#0077B5] hover:text-white transform transition duration-300 hover:-translate-y-2'>
                  <a href=""><FaLinkedinIn size={24} /></a>
                </li>
                <li className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center text-primary hover:bg-[#0866FF] hover:text-white transform transition duration-300 hover:-translate-y-2'>
                  <a href=""><FaFacebookF size={24} /></a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <img className='shadow-[0_0_25px_rgba(128,128,128,0.3)] rounded-2xl' src={aney} alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero