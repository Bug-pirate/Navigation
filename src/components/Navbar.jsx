import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-box'>
        <div className='nav-link'>
          <a href="">Home</a>
        </div>
        <div className='nav-link'>
          <a href="">About</a>
        </div>
        <div className='nav-link'>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
