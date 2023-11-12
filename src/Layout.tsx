import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'

interface LayoutProps {
  // Add your prop types here
}

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <div>Layout
      <Outlet></Outlet>
    </div>
  )
}

export default Layout