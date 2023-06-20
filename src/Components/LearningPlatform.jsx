import React from 'react'
import "../css/LearningPlatform.css"
import learningPlatformImg from "../Images/learningPlatform.png"
export default function LearningPlatform() {
  return (
    <div className='learning-platform-section'>
        <div className="learning-platform-box">
            <div className="learning-platform-box-left">
                <h2>The Most <span>Affordable</span>
                <br />
                    Learning Platform
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam minima non numquam dolorem doloribus.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit molestiae repudiandae impedit eligendi accusantium esse. Quaerat obcaecati quae deserunt quos.</p>
                <div className="learning-platform-box-left-buttons">
                    <a href="#" className="btn-a-outline">Enroll Now</a>
                    <a href="#" className="btn-a-solid">Watch Video</a>
                </div>
            </div>
            <div className="learning-platform-box-right">
                <img src={learningPlatformImg} alt="" />
            </div>
        </div>
    </div>
  )
}
