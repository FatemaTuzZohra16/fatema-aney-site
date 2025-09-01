import React, { useState } from 'react'
import Container from '../Layout/Container'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router';
import { ShootingStarsAndStarsBackgroundDemo } from '../ui/ShootingStarsAndStarsBackgroundDemo';


const Contact = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [nameErr, setNameErr] = useState("")
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [message, setMessage] = useState("")
    const [messageErr, setMessageErr] = useState("")

    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 700,
            easing: "ease-out",
            once: true,
        });
    }, []);

    const handleName = (e) => {
        setName(e.target.value)
        setNameErr("")
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailErr("")
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
        setMessageErr("")
    }
    const handleButton = (e) => {
        if (!name) {
            setNameErr("Please Inter Your Email")
        } else {
            setNameErr("")
        }
        if (!email) {
            setEmailErr("Please Inter Your Email")
        } else {
            if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
                setEmailErr("Invalid Email")
            } else {
                setEmailErr("")
            }
        }
        if (!message) {
            setMessageErr("Write Your Message")
        }
        if (name && email && message && !nameErr && !emailErr && !messageErr) {
            alert('Your form has been submitted.  We will get back to you soon.  Please wait while we redirect you.......')
            setName("")
            setEmail("")
            setMessage("")
            navigate("/Success")
        }
    }
    return (
        <div className='relative bg-black pt-[60px] lg:pt-[100px]'>
            <div className="absolute inset-0 w-full h-full">
                    <ShootingStarsAndStarsBackgroundDemo />
                  </div>
            <Container>
                <div className='text-center'>
                    <h1 data-aos="fade-down"
                        data-aos-duration="1500"
                        className='font-heading font-semibold text-white text-[45px] leading-[70px] border-b border-white inline-block'>GET IN <span className='text-primary'>TOUCH</span></h1>
                </div>
               <div className='flex justify-center'>
                <div className='lg:flex gap-x-[200px] items-center mt-[80px] pb-[100px]'>
                    <div className='text-white'>
                        <h2 className="text-4xl font-heading font-semibold mb-4">Let’s <span className='text-primary'>Connect</span> ✨</h2>
                        <p className="text-lg leading-relaxed mb-3 font-body">
                            I’d love to hear about your project or ideas.
                        </p>
                        <p className="text-lg leading-relaxed mb-3 font-body">
                            Got an idea, question, or just want to say hi?
                        </p>
                        <p className="text-lg leading-relaxed font-body">
                            Skip the form—shoot me an  <a href="mailto:aneyrahman16@gmail.com" className="text-primary font-bold text-[20px] underline hover:text-purple-400 transition">
                                email
                            </a>.
                        </p>
                        <div className='social links mt-6 relative z-10'>
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

                    <div className='mt-[60px] lg:mt-0 relative z-10'>
                        <div className='w-auto md:w-[500px] font-body border border-white mx-auto px-6 py-12 rounded-2xl'>
                            <label className="block text-white font-medium mb-2">Name</label>
                            <input
                                onChange={handleName}
                                type="text"
                                value={name}
                                name='name'
                                placeholder='Your Name'
                                className='w-full text-black p-3 outline-0 border rounded bg-white ' />
                            <p className='font-body text-red-900 pt-2'>{nameErr}</p>
                            <label className="block text-white font-medium mb-2 mt-5">Email</label>
                            <input
                                onChange={handleEmail}
                                type="email"
                                value={email}
                                name='email'
                                placeholder='Your Email'
                                className='w-full text-black p-3 outline-0 border rounded bg-white' />
                            <p className='font-body text-red-900 pt-2'>{emailErr}</p>
                            <label className="block text-white font-medium mb-2 mt-5">Message</label>
                            <textarea
                                onChange={handleMessage}
                                name="message"
                                value={message}
                                placeholder='Your Message'
                                className='w-full h-[100px] text-black p-3 outline-0 border rounded bg-white' />
                            <p className='font-body text-red-900 pt-2'>{messageErr}</p>

                            <button onClick={handleButton} className='bg-primary text-white font-body py-3 px-[25px] rounded w-full mt-6
                     '>Send Message</button>
                        </div>
                    </div>
                </div>
                </div> 
            </Container>
            <Footer />
        </div>
    )
}

export default Contact;