import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

const MainRoute = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>        
    </div>
  )
}

export default MainRoute