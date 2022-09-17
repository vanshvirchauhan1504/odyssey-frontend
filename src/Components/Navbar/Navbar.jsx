import React from 'react'
import './Navbar.css'
import './Phone.css'
import { Link } from "react-router-dom";
import test_logo from '../../Assets/test_logo.png'
import {useStateContext} from '../../Context/StateContext';

const Navbar = () => {

  const {isBlur,toggleShowAuth} = useStateContext();

  return (
    <div className={isBlur ? "blur nav_container" : "nav_container"}>
        <div className="nav_div">
            <div className="nav_logo">
              <img src={test_logo} alt="LOGO" />
            </div>
            <div className="nav_list">
              <ul>
                <li><a href='#home' className={isBlur ? "nav_disable" : ""} to='/'>Home</a></li>
                <li><a href='#about' className={isBlur ? "nav_disable" : ""}>About</a></li>
                <li><a href='#contact' className={isBlur ? "nav_disable" : ""}>Contact Us</a></li>
                <li><button className={isBlur ? "nav_disable" : ""} onClick={toggleShowAuth}>Sign In</button></li>
                <li><Link className={isBlur ? "nav_disable" : ""} to='/search'>Search</Link></li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar