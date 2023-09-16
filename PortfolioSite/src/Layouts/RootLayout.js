import React from 'react'
import Navbar from '../Navbar'
import { Outlet, ScrollRestoration , Link } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='root-layout'>
        <Navbar/>
        <Outlet />
        <ScrollRestoration />
    </div>
  )
}
