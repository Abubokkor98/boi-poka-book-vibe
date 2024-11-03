import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='max-w-screen-xl'>
        {/* navbar */}
        <Navbar></Navbar>
        <Outlet></Outlet>

        {/* footer */}
        <Footer></Footer>
    </div>
  )
}
