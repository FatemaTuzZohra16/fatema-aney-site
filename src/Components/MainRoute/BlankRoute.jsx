import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'

const BlankRoute = () => {
  return (
    <div>
        <Navbar />
        <main className='pt-[64px]'>
            <Outlet />
        </main>
    </div>
  )
}

export default BlankRoute