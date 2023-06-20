import React from 'react'
import "../css/AboutUsPage.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import aboutDefence from "../Images/learningPlatform.png"
import TestimonialSection from './TestimonialSection';
import TeamCard from './TeamCard';
import WhyUs from "./WhyUs"
import boy1 from "../Images/boy1.jpg"
import boy2 from "../Images/boy2.jpg"
import girl1 from "../Images/girl1.jpg"
import girl2 from "../Images/girl2.jpg"
import girl3 from "../Images/girl3.jpg"
export default function AboutUsPage() {
  return (
    <>
    <div className='about-us-header'>
        <h1>Who We <br/><span>Are?</span></h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nihil vitae necessitatibus sint deserunt aut inventore explicabo quos. Voluptates at nihil molestias odio veritatis sapiente assumenda non expedita tempore officiis!</p>
    </div>
    <div className="about-defence-vidya">
        <div className="about-defence-vidya-text">
            <h3>Know About <br/><span>Defence Vidya</span></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, nemo voluptas nam deleniti ratione aliquid inventore esse! Dolore tempora asperiores fuga dolorum et adipisci magni dignissimos in, repellat impedit esse magnam at eos qui alias nisi perferendis enim inventore id!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nobis amet ratione quisquam doloribus unde perferendis consectetur natus facere optio cumque, nemo ea dolorem hic, repellat voluptate ex reiciendis sunt.</p>
            <a href="#"><InstagramIcon className="defence-icon"/></a>
        </div>
        <div className="about-defence-image">
            <img src={aboutDefence} alt="" />
        </div>
    </div>
    <TestimonialSection/>
    <div className="defence-bg"></div>
    <WhyUs/>
    <div className="core-team">
        <div className="core-team-top">
            <h3>Our <span> Team</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolores perspiciatis quidem eligendi fugit iure tempora autem deserunt eaque officia!</p>
        </div>
        <div className="core-team-bottom">
            <TeamCard image={boy1} name="Sachin" position="Teacher" about="I am the faculty at Defence Vidya to teach you
            more about NDA I am the faculty at Defence Vidya to teach"/>
             <TeamCard image={girl1} name="Launa" position="Teacher" about="I am the faculty at Defence Vidya to teach you
            more about NDA I am the faculty at Defence Vidya to teach"/>
             <TeamCard image={boy2} name="Vikas" position="Teacher" about="I am the faculty at Defence Vidya to teach you
            more about NDA I am the faculty at Defence Vidya to teach"/>
             <TeamCard image={girl2} name="Mahira" position="Teacher" about="I am the faculty at Defence Vidya to teach you
            more about NDA I am the faculty at Defence Vidya to teach"/>
             <TeamCard image={girl3} name="Shakshi" position="Teacher" about="I am the faculty at Defence Vidya to teach you
            more about NDA I am the faculty at Defence Vidya to teach"/>
             <TeamCard image={boy2} name="Rohan" position="Teacher" about="I am the faculty at Defence Vidya to teach you
            more about NDA I am the faculty at Defence Vidya to teach"/>
        </div>
    </div>
    </>

  )
}
