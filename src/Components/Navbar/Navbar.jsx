import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container';
import { Link } from 'react-router';


const Navbar = () => {
     const [scrolled, setScrolled] = useState(false);

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
  
  return (
     <div className={`fixed top-0 w-full z-50 transition-all duration-500 py-4 ${
        scrolled ? "bg-black/70 shadow-lg" : "bg-black"
      }`}>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className='bg-black'>
                        <p className='font-heading font-bold text-[22px] bg-gradient-to-r from-primary to-[#ECD8F2] text-transparent bg-clip-text'>Fatema</p>
                    </div>
                    <div>
                        <ul className='flex gap-x-3 items-center font-body font-medium text-white text-[17px]'>
                            <li>
                                <Link to="/" className='active text-primary py-2 px-3'>Home</Link>
                            </li>
                            <li>
                                <Link to="/" className='py-2 px-3 hover:text-primary'>About</Link>
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
        </div>
  )
}

export default Navbar