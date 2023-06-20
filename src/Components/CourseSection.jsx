import React from 'react'
import "../css/CourseSection.css"
import NearMeIcon from '@mui/icons-material/NearMe';
export default function CourseSection() {
  return (
    <div className='course-section'>
        <div className="course-section-top">
            <h3>Our <span>Courses</span></h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam dolore doloremque earum illo amet atque officiis voluptas pariatur at eos!</p>
        </div>
        <div className="course-section-middle">
            <div className="course-card">
                <h3>NDA</h3>
                <h5>Advantages</h5>
                <div className="course-card-advantage-points">
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Study Material</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Live Classes</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Recorded Lectures</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Affordable Fee</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Experienced Faculty</p>
                    </div>
                </div>
                <a href="#" className="btn-a-solid">Enroll Now</a>
            </div>
            <div className="course-card">
                <h3>NCC</h3>
                <h5>Advantages</h5>
                <div className="course-card-advantage-points">
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Study Material</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Live Classes</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Recorded Lectures</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Affordable Fee</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Experienced Faculty</p>
                    </div>
                </div>
                <a href="#" className="btn-a-solid">Enroll Now</a>
            </div>
            <div className="course-card">
                <h3>SSC</h3>
                <h5>Advantages</h5>
                <div className="course-card-advantage-points">
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Study Material</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Live Classes</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Recorded Lectures</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Affordable Fee</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Experienced Faculty</p>
                    </div>
                </div>
                <a href="#" className="btn-a-solid">Enroll Now</a>
            </div>
        </div>
    </div>
  )
}
