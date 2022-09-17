import React from 'react'
import Categories from '../../Components/Categories/Categories'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Navbar from '../../Components/Navbar/Navbar'
import Auth from '../../Components/Auth/Auth'
import {useStateContext} from '../../Context/StateContext';

const Landing = () => {
  const {isBlur,showAuth} = useStateContext();
  return (
    <>
    <div id="home"></div>
    <Navbar/>
    <Categories/>
    <About/>
    <Contact/>
    {isBlur && showAuth ?  <Auth/> : null}
    </>
  )
}

export default Landing