import React from 'react'
import "./App.css"
import { Outlet } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <h1 className='backg'>Taskade</h1>
       <Outlet/>
    </div>
    
  )
}

export default Navbar
