import React from 'react'
import "../css/LectureSection.css"
import LectureCard from './LectureCard'
import thumbnail1 from "../Images/thumbnail1.png"
import thumbnail2 from "../Images/thumbnail2.png"
import thumbnail3 from "../Images/thumbnail3.png"
export default function LectureSection() {
  return (
    <div className='lecture-section'>
        <div className="lecture-section-top">
            <h3><span>Watch</span> Lecture</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at neque non animi sapiente vitae ut nulla tempora officiis rerum.</p>
        </div>
        <div className="lecture-section-middle">
            <LectureCard thumbnail={thumbnail1} title="Title Of Video" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at neque non animi sapiente vitae ut nulla tempora officiis rerum"/>
            <LectureCard thumbnail={thumbnail2} title="Title Of Video" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at neque non animi sapiente vitae ut nulla tempora officiis rerum"/>
            <LectureCard thumbnail={thumbnail3} title="Title Of Video" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at neque non animi sapiente vitae ut nulla tempora officiis rerum"/>
        </div>
        <div className="lecture-section-bottom">
            <a href="#" className="btn-a-solid">View All Lectures</a>
        </div>
    </div>
  )
}
