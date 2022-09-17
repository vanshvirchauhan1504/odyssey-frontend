import React from 'react'
import './About.css'
import {useStateContext} from '../../Context/StateContext';
    
const About = () => {

  const {isBlur} = useStateContext();

  return (
    <>
    <div id="about" className={isBlur ? "blur " : ""}>
      <h1>About</h1>
    </div>
    </>
  )
}

export default About