import React from 'react'
import Navbar from '../components/shared/navbar/Navbar'
import { Outlet } from 'react-router'
import '../App.css'

const MainLayout = () => {
  return (
    <div className='min-h-screen relative overflow-hidden'>
        <Navbar />
        <Outlet/>
    </div>
  )
}

export default MainLayout