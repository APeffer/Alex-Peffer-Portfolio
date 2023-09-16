import React from 'react'
import Navbar from '../../src/Navbar'
import { Outlet, ScrollRestoration } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='root-layout'>
        <Navbar/>
        <Outlet />
        <ScrollRestoration />
    </div>
  )
}
