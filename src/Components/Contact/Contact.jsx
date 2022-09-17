import React from 'react'
import './Contact.css'
import {useStateContext} from '../../Context/StateContext';

const Contact = () => {
  const {isBlur} = useStateContext();
  return (
    <div id='contact' className={isBlur ? "blur " : ""}>
      <h1>Contact</h1>
    </div>

  )
}

export default Contact