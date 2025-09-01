import React from 'react'
import Container from '../Layout/Container'
import ecommerce from '../../assets/ecommerce.png'
import innovate from '../../assets/innovate.png'
import agance from '../../assets/agance.png'
import cleaning from '../../assets/cleaning-service.png'
import quriarbox from '../../assets/quriarbox.png'
import weather from '../../assets/weather-app.png'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from 'react-parallax-tilt';
import { ShootingStarsAndStarsBackgroundDemo } from '../ui/ShootingStarsAndStarsBackgroundDemo'

const Project = () => {
    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 700,
            easing: "ease-out",
            once: true,
        });
    }, []);
    const projects = [
        {
            img: ecommerce,
            title: "Exclusive Ecommerce",
            description: "A modern and fully functional eCommerce web application combining a sleek UI with robust cart management and seamless state handling. Data persistence via localStorage ensures users’ cart items stay saved even after page refresh. This project demonstrates my ability to create responsive, scalable, and user-friendly web applications.",
            tools: [
                { name: "React" },
                { name: "TailwindCSS" },
                { name: "Redux" }
            ],
            live: "https://ecommerce-murex-two.vercel.app",
            github: "https://github.com/FatemaTuzZohra16/Ecommerce"
        },
        {
            img: innovate,
            title: "React Innovate",
            description: "React Innovate is a clean and minimal landing page UI crafted with React and Tailwind CSS. It is built mobile-first and designed for component reusability, ensuring a smooth user experience across devices. Its lightweight implementation, powered by Tailwind’s utility-first approach, underscores maintainable and performance-oriented design.",
            tools: [
                { name: "React" },
                { name: "TailwindCSS" },
            ],
            live: "https://react-innovate-38tc.vercel.app",
            github: "https://github.com/FatemaTuzZohra16/react-innovate"
        },
        {
            img: agance,
            title: "Agance",
            description: "This project is a fully responsive Bootstrap-based website built using HTML, CSS, and Bootstrap components. It features a fully mobile-responsive layout, interactive elements powered by minimal JavaScript, and a clean, structured design that highlights front-end craftsmanship, attention to detail, and an overall highly professional user experience.",
            tools: [
                { name: "HTML" },
                { name: "CSS" },
                { name: "Bootstrap" },
            ],
            live: "https://bootstrap-project-self.vercel.app",
            github: "https://github.com/FatemaTuzZohra16/Bootstrap-Project"
        },
        {
            img: cleaning,
            title: "Cleaning Services",
            description: "Cleaning Services Website is a fully responsive static site built with HTML and CSS, designed to showcase professional cleaning services with a clean and minimal layout. The project features organized a functional contact form for inquiries, and smooth navigation across all devices, user-friendly design and providing an browsing experience similar to modern web applications.",
            tools: [
                { name: "HTML" },
                { name: "CSS" },
            ],
            live: "https://cleaning-services-tan.vercel.app",
            github: "https://github.com/FatemaTuzZohra16/Cleaning-Services"
        },
        {
            img: quriarbox,
            title: "Quriarbox",
            description: "Quriarbox is a modern web application built with React and Vite, featuring a clean and minimal design. It offers a fully responsive layout, ensuring smooth navigation across devices. The project emphasizes front-end development best practices, including modular components and efficient state management, providing a seamless user experience.",
            tools: [
                { name: "React" },
                { name: "TailwindCSS" },
            ],
            live: "https://quriarbox-two.vercel.app",
            github: "https://github.com/FatemaTuzZohra16/quriarbox"
        },
        {
            img: weather,
            title: "Weather App",
            description: "Weather App is a responsive weather forecasting application built using HTML, JavaScript, and Tailwind CSS. It fetches real-time weather data from a public API, providing users with current weather conditions, forecasts, and location-based information. The app features a clean and intuitive interface, ensuring a seamless user experience across devices.",
            tools: [
                { name: "HTML" },
                { name: "JavaScript" },
                { name: "TailwindCSS" },
            ],
            live: "https://weather-app-lovat-five-70.vercel.app",
            github: "https://github.com/FatemaTuzZohra16/weather-app"
        },
    ]
    return (
        <div className='relative bg-black py-[90px]'>
            <div className="absolute inset-0 w-full h-[250px]">
                    <ShootingStarsAndStarsBackgroundDemo />
                  </div>
            <Container>
                <div>
                    <div className='text-center'>
                        <h1 data-aos="fade-down"
                            data-aos-duration="1500"
                            className='font-heading font-semibold text-white text-[45px] leading-[70px] border-b border-white inline-block'>My <span className='text-primary'>Projects</span></h1>
                    </div>
                    <div className='lg:flex flex-wrap justify-between gap-y-6 text-white mt-[90px]'>
                        {
                            projects.map((project) => (
                                <Tilt
                                    key={project.id}
                                    glareEnable={true}
                                    glareMaxOpacity={0.5}
                                    glareColor="#ffffff"
                                    className="w-auto lg:w-[32%]"
                                    tiltMaxAngleX={1}  
                                    tiltMaxAngleY={10}   
                                    transitionSpeed={400}  
                                >
                                    <div className='border rounded-2xl overflow-hidden mt-10 lg:mt-0'>
                                        <img src={project.img} className='w-full h-[200px] object-cover object-top' />
                                        <div className='p-5'>
                                            <div>
                                                <h1 className='font-heading font-medium text-primary text-[24px] leading-[40px] mt-[10px]'>{project.title}</h1>
                                                <p className='font-body'>{project.description}</p>
                                            </div>
                                            <div className='flex gap-2 pt-5 pb-7'>
                                                {
                                                    project.tools.map((tool) => (
                                                        <p className='font-body border border-primary py-1 px-5 rounded-[40px]'>{tool.name}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className="flex gap-4 mt-4">
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-body py-2 px-[30px] rounded bg-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                                                >
                                                    Live
                                                </a>
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-body py-2 px-[30px] rounded bg-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                                                >
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Project