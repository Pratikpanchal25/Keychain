import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
function App() {
  return (
    <div className='min-h-screen overflow-hidden overflow-x-hidden flex flex-wrap content-between bg-black text-black w-full'>
      <div className='w-full min-h-screen'>
        <Navbar/>
        <main>
        <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App