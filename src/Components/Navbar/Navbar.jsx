import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container';
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa6";


const Navbar = () => {
     const [scrolled, setScrolled] = useState(false);
     const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

       const handleClick = () => {
    setShow(prevShow => !prevShow)
  };
  
  return (
     <div className={`fixed top-0 w-full z-50 transition-all duration-500 py-4 ${
        scrolled ? "bg-black/70 shadow-lg" : "bg-black"
      }`}>
            <Container>
                <div className='md:flex justify-between items-center'>
                      <div className='bg-black flex justify-between items-center'>
                        <p className='font-heading font-bold text-[22px] bg-gradient-to-r from-primary to-[#ECD8F2] text-transparent bg-clip-text'>
                          <Link>Fatema</Link>
                        </p>
                        <div className='md:hidden text-white'>
                          <FaBars onClick={handleClick} />
                        </div>
                    </div>
                    <div>
                        <ul className='hidden md:flex gap-x-3 items-center font-body font-medium text-white text-[17px]'>
                            <li>
                                <Link to="/" className='active text-primary py-2 px-3'>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className='py-2 px-3 hover:text-primary'>About</Link>
                            </li>
                            <li>
                                <Link to="/project" className='py-2 px-3 hover:text-primary'>Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact" className='py-2 px-3 hover:text-primary'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            {
              show &&
              <div>
                        <ul className='flex flex-col bg-primary gap-3 items-center font-body font-medium text-white text-[17px] py-8 rounded-[0_0_0_126px]'>
                            <li>
                                <Link to="/" className='active text-black py-8 px-3 text-[20px]'>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className='py-8 px-3 text-[20px] hover:text-black'>About</Link>
                            </li>
                            <li>
                                <Link to="/project" className='py-8 px-3 text-[20px] hover:text-black'>Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact" className='py-8 px-3 text-[20px] hover:text-black'>Contact</Link>
                            </li>
                        </ul>
                    </div>
            }
        </div>
  )
}

export default Navbar