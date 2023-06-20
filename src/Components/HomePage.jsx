import React from 'react'
import Navbar from './Navbar'
import "../css/HomePage.css"
import homeArmyVideo from "../Videos/Home Army.mp4"
import LearningPlatform from './LearningPlatform'
import WhyUs from './WhyUs'
import StudyMaterial from './StudyMaterial'
import Acheivements from './Acheivements'
import LectureSection from './LectureSection'
import CourseSection from './CourseSection'
import TestimonialSection from './TestimonialSection'
import Footer from './Footer'
import brochure1 from "../Images/clientImage.jpg"
import brochure2 from "../Images/StudyBg.jpg"
import brochure3 from "../Images/defenceBg.jpg"
import clientImage from "../Images/clientImage.jpg"
export default function HomePage() {

  return (
    <>
        <div className="home-header">
            <video src={homeArmyVideo} autoPlay loop muted></video>
            <div className="home-header-text">
                <p>Welcome To</p>
                <h1>Defence Vidya</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quaerat nobis obcaecati, officiis dolorum cupiditate nesciunt? Dolorem autem commodi quia!</p>
            </div>
        </div>
        <LearningPlatform/>
        <WhyUs/>
        <StudyMaterial/>
        <Acheivements/>
        <div className="army-background"></div>
        <LectureSection/>
        <CourseSection/>
        <div className="brochure-section">
          <div className="brochure-card">
            <img src={brochure1} alt="" />
            <h4>NDA</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum optio dignissimos ipsa autem enim. Officiis incidunt eum magni fugit perferendis pariatur doloremque placeat eveniet?</p>
            <button className="btn-a-solid">Download Brochure</button>
          </div>
          <div className="brochure-card">
          <img src={brochure2} alt="" />
            <h4>CGL</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum optio dignissimos ipsa autem enim. Officiis incidunt eum magni fugit perferendis pariatur doloremque placeat eveniet?</p>
            <button className="btn-a-solid">Download Brochure</button>
          </div>
          <div className="brochure-card">
          <img src={brochure3} alt="" />
            <h4>NCC</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum optio dignissimos ipsa autem enim. Officiis incidunt eum magni fugit perferendis pariatur doloremque placeat eveniet?</p>
            <button className="btn-a-solid">Download Brochure</button>
          </div>
        </div>
        <div className="client-change-image-section">
          <img src={clientImage} alt="" />
        </div>
        <TestimonialSection/>
    </>
  )
}
