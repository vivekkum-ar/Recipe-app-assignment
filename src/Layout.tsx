import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import Navbar from './components/Navbar'

interface LayoutProps {
  // Add your prop types here
}

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout