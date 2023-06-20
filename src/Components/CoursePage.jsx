import React, { useContext, useEffect, useState } from 'react'
import "../css/CoursePage.css"
import "../Responsive/CoursePage.css"
import LearningPlatform from "./LearningPlatform"
import LectureCard from "./LectureCard"
import Acheivements from "./Acheivements"
import CourseSection from './CourseSection'
import { AuthContext } from './AuthContext'
export default function CoursePage() {
  const { token } = useContext(AuthContext);
  const [videodata, setvideodata] = useState([]);
  async function videoList() {
    let res = await fetch('http://localhost:8000/api/user/getcourse').then((r) => r.json()).then((res) => (setvideodata(res.coursedetails)))
  }
  useEffect(() => {
    videoList()
  }, [])

  return (
    <div className='course-page'>
      <LearningPlatform />
      <div className="video-section">
        <div className="video-section-top">
          <h3>Watch <span> Lectures</span></h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, eius cum. Vel placeat fuga exercitationem assumenda. Laudantium iure deserunt dicta non rerum laboriosam expedita cum.</p>
        </div>
        <div className="video-section-bottom">
          {
            videodata?.map((item) => {
              return <LectureCard {...item} key={item._id} />
            })
          }

        </div>
      </div>
      <div className="course-bg"></div>
      <CourseSection />
      <Acheivements />
    </div>
  )
}
