import React, { useEffect } from 'react'
import Container from '../Layout/Container'
import vector from '../../assets/vector.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNpm } from "react-icons/fa6";
import { ShootingStarsAndStarsBackgroundDemo } from '../ui/ShootingStarsAndStarsBackgroundDemo';

const About = () => {
    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 700,
            easing: "ease-out",
            once: true,
        });
    }, []);
    return (
        <div className='relative
        bg-black py-[60px]'>
            <div className="absolute inset-0 w-full h-full">
                    <ShootingStarsAndStarsBackgroundDemo />
                  </div>
            <Container>
                <div className='text-center'>
                    <h1 data-aos="fade-up"
                        data-aos-duration="1500"
                        className='font-heading font-semibold text-white text-[40px] leading-[70px] border-b border-white inline-block'> About <span className='text-primary'>Me</span></h1>
                </div>
                <div className='lg:flex gap-x-[155px] items-center pt-[50px]'>
                    <div className='w-auto lg:w-[70%]'>
                        <p className='font-body text-white text-[20px]'>Hi, I’m <span className='text-primary'>Fatema (Aney)</span> — a passionate Front-End Developer with a strong focus on creating clean, responsive, and user-friendly websites. I enjoy transforming ideas into reality through code, blending creativity with functionality to deliver seamless digital experiences.</p>
                        <p className='font-body text-white text-[20px] py-4'> I’ve learned and worked with modern technologies like HTML, CSS, Tailwind CSS, JavaScript, React, and Git/GitHub. Currently, I’m expanding my skills into Next.js, PHP, and MySQL to grow as a full-stack developer.</p>
                        <p className='font-body text-white text-[20px]'> Beyond coding, I believe in continuous learning, problem-solving, and building projects that make an impact. My goal is to contribute to a dynamic team where I can learn, grow, and create value through technology.</p>
                    </div>
                    <div className='w-auto lg:w-[30%] pt-[40px] lg:pt-0 sm:pl-[185px] lg:pl-0'>
                        <img src={vector} alt="" />
                    </div>
                </div>
                <div className='text-center pt-[40px]'>
                    <h1 data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-delay="300"
                        className='font-heading font-medium text-white text-[35px] leading-[70px] inline-block'>My <span className='text-primary'>Skills</span></h1>
                </div>

                <div className="skills mt-5 flex flex-wrap gap-10 items-center justify-center">

                    <div className='border border-primary text-white py-4 px-7 rounded shadow-lg hover:scale-110 hover:shadow-lg transition-all duration-300'>
                        <SiHtml5 size={50} />
                    </div>
                    <div className='border border-primary text-white py-4 px-7 rounded shadow-lg hover:scale-110 hover:shadow-lg transition-all duration-300'>
                        <FaCss3Alt size={50} />
                    </div>
                    <div className='border border-primary text-white py-4 px-7 rounded shadow-lg hover:scale-110 hover:shadow-lg transition-all duration-300'>
                        <FaBootstrap size={50} />
                    </div>
                    <div className='border border-primary text-white py-4 px-7 rounded shadow-lg hover:scale-110 hover:shadow-lg transition-all duration-300'>
                        <RiTailwindCssFill size={50} />
                    </div>
                    <div className='border border-primary text-white py-4 px-7 rounded shadow-lg hover:scale-110 hover:shadow-lg transition-all duration-300'>
                        <FaReact size={50} />
                    </div>
                    <div className='border border-primary text-white py-4 px-7 rounded shadow-lg hover:scale-110 hover:shadow-lg transition-all duration-300'>
                        <SiNextdotjs size={50} />
                    </div>
                    <div className='border border-primary text-white py-4 px-7 rounded shadow-lg hover:scale-110 hover:shadow-lg transition-all duration-300'>
                        <SiRedux size={50} />
                    </div>
                </div>
                <div className='text-center pt-12'>
                    <h1 className='font-heading font-medium text-white text-[35px] leading-[70px] inline-block'>Tools & <span className='text-primary'>Platform</span></h1>
                </div>
                <div className="tools mt-5 flex flex-wrap gap-10 items-center justify-center">

                    <div className='border border-primary text-white py-4 px-7 rounded shadow-lg hover:scale-110 hover:shadow-lg transition-all duration-300'>
                        <VscVscode size={50} />
                    </div>
                    <div className='border border-primary text-white py-4 px-7 rounded shadow-lg hover:scale-110 hover:shadow-lg transition-all duration-300'>
                        <FaGitAlt size={50} />
                    </div>
                    <div className='border border-primary text-white py-4 px-7 rounded shadow-lg hover:scale-110 hover:shadow-lg transition-all duration-300'>
                        <FaGithub size={50} />
                    </div>
                    <div className='border border-primary text-white py-4 px-7 rounded shadow-lg hover:scale-110 hover:shadow-lg transition-all duration-300'>
                        <FaNpm size={50} />
                    </div>
                    <div className='border border-primary text-white py-4 px-7 rounded shadow-lg hover:scale-110 hover:shadow-lg transition-all duration-300'>
                        <IoLogoFirebase size={50} />
                    </div>
                    <div className='border border-primary text-white py-4 px-7 rounded shadow-lg hover:scale-110 hover:shadow-lg transition-all duration-300'>
                        <IoLogoVercel size={50} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About