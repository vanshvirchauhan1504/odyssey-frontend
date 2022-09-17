import React from 'react'
import './Profile.css'
import test_logo from '../../Assets/test_logo.png'
import {useStateContext} from '../../Context/StateContext';

const Profile = () => {
  const {toggleIsAuthorised} = useStateContext();
  return (
    <>
    <div className="profile_container">
      <div className="profile_header_container">
        <div className="profile_header">
        <div className="profile_header_shadow_box">
            <div className="profile_header_img">
              <img src={test_logo} alt="logo" />
            </div>
            <div className="profile_header_title">
              <div className="profile_header_title_name">
                <h1>Vansh Chauhan</h1>
              </div>
              <div className="profile_header_title_tags">
                <ul>
                  <li>Tag 1</li>
                  <li>Tag 2</li>
                  <li>Tag 3</li>
                  <li>Tag 4</li>
                  <li>+ Add Tag</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="logout">
          <button onClick={toggleIsAuthorised}>
            Log Out
          </button>
        </div>
      </div>
      
      <div className="profile_workplace_container">
        <div className="profile_workplace">
          <div className="profile_workplace_current_header">
            <h3>Current Workplace</h3>
          </div>
        <div className="profile_workplace_shadow_box">       
            <div className="profile_workplace_attribute">
              <div className="profile_workplace_attribute_header">
                <h3>Designation</h3>
              </div>
              <div className="profile_workplace_attribute_status">
                <h4>Lorem Ipsum</h4>
              </div>
            </div>
            <div className="profile_workplace_attribute">
              <div className="profile_workplace_attribute_header">
                <h3>Company Name</h3>
              </div>
              <div className="profile_workplace_attribute_status">
                <h4>Lorem Ipsum</h4>
              </div>
            </div>
            <div className="profile_workplace_attribute">
              <div className="profile_workplace_attribute_header">
                <h3>Company Name</h3>
              </div>
              <div className="profile_workplace_attribute_status">
                <h4>Lorem Ipsum</h4>
              </div>
            </div>
            <div className="profile_workplace_attribute">
              <div className="profile_workplace_attribute_header">
                <h3>Role Type</h3>
              </div>
              <div className="profile_workplace_attribute_status">
                <h4>Lorem Ipsum</h4>
              </div>
            </div>
            <div className="profile_workplace_attribute">
              <div className="profile_workplace_attribute_header">
                <h3>Payscale</h3>
              </div>
              <div className="profile_workplace_attribute_status">
                <h4>Lorem Ipsum</h4>
              </div>
            </div>
        </div>
      </div>
    </div>


        
    <div className="profile_workplace_container">
        <div className="profile_workplace">
          <div className="profile_workplace_current_header">
            <h3>Previous Workplace</h3>
          </div>
        {
          [1,2].map((item)=>(
            <div className="profile_workplace_shadow_box" key={item}>       
            <div className="profile_workplace_attribute">
              <div className="profile_workplace_attribute_header">
                <h3>Designation</h3>
              </div>
              <div className="profile_workplace_attribute_status">
                <h4>Lorem Ipsum</h4>
              </div>
            </div>
            <div className="profile_workplace_attribute">
              <div className="profile_workplace_attribute_header">
                <h3>Company Name</h3>
              </div>
              <div className="profile_workplace_attribute_status">
                <h4>Lorem Ipsum</h4>
              </div>
            </div>
            <div className="profile_workplace_attribute">
              <div className="profile_workplace_attribute_header">
                <h3>Company Name</h3>
              </div>
              <div className="profile_workplace_attribute_status">
                <h4>Lorem Ipsum</h4>
              </div>
            </div>
            <div className="profile_workplace_attribute">
              <div className="profile_workplace_attribute_header">
                <h3>Role Type</h3>
              </div>
              <div className="profile_workplace_attribute_status">
                <h4>Lorem Ipsum</h4>
              </div>
            </div>
            <div className="profile_workplace_attribute">
              <div className="profile_workplace_attribute_header">
                <h3>Payscale</h3>
              </div>
              <div className="profile_workplace_attribute_status">
                <h4>Lorem Ipsum</h4>
              </div>
            </div>
        </div>
          )
          )
        }



        
      </div>
    </div>


    </div>
    </>
  )
}

export default Profile