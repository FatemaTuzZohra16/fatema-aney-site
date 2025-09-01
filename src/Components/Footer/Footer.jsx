import React from 'react'
import Container from '../Layout/Container'
import { ShootingStarsAndStarsBackgroundDemo } from '../ui/ShootingStarsAndStarsBackgroundDemo'

const Footer = () => {
  return (
    <div className='relative bg-black py-10'>
      <div className="absolute inset-0 z-0 w-full h-full">
              <ShootingStarsAndStarsBackgroundDemo />
            </div>
        <Container>
            <div>
               <p className='text-white font-primary font-medium text-[18px] leading-[26px] text-center'>© 2025 | Designed and Developed  with 💜 by Fatema Tuz Zohra</p>
            </div>
        </Container>
    </div>
  )
}

export default Footer