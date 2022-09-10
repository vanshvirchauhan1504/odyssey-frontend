import React from 'react'
import './Navbar.css'
import test_logo from '../../Assets/test_logo.png'

const Navbar = () => {
  return (
    <div className='nav_container'>
        <div className="nav_div">
            <div className="nav_logo">
              <img src={test_logo} alt="LOGO" />
            </div>
            <div className="nav_list">
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact Us</a></li>
                <li><a href='/'>Login</a></li>
                <li><a href=''>Search</a></li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar