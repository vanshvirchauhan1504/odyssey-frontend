import React from 'react'
import './Categories.css'
import test_logo from '../../Assets/test_logo.png'

const Categories = () => {
  return (
    <>
<div className="container">
    <div className="category_container">
        <div className="header_box">
            <div className="header">
            <h2>Categories</h2>
            </div>
        </div>
        <div className="card_box">
        {
            ['1','2','3','4','5','6','7','8','9'].map((item)=>(
                <div className="card" key={item}>
                    <div className="card_img">

                    </div>
                    <div className="card_title">
                        <h3>Title {item}</h3>
                    </div>
                </div>
            ))
        }
        </div>
    </div>


    <div className="banner_container">
        <img src={test_logo} alt="LOGO" />
    </div>
</div>
    </>
  )
}

export default Categories