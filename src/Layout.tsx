import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import Navbar from './components/Navbar'

interface LayoutProps {
  // Add your prop types here
}

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <div className='relative'>
      <div className="absolute inset-0" style={{ background: `url(./public/bg.png)`, backgroundRepeat:"repeat", filter: 'blur(1px)' }}></div>
      <div className=" absolute inset-0 bg-amber-50 opacity-20"></div> {/* Overlay to darken the blurred image */}
      <div className="relative z-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
