import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'


export const Layout = () => {
  return (
    <main>
        <Navbar />
        <Outlet />
    </main>
  )
}
