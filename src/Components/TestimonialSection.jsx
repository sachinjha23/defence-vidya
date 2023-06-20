import React from 'react'
import "../css/TestimonialSection.css"
import testimonial1 from "../Images/testimonial1.jpeg"
import testimonial2 from "../Images/testimonial2.jpeg"
import testimonial3 from "../Images/testimonial3.jpeg"
import testimonial4 from "../Images/testimonial4.jpeg"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
export default function TestimonialSection() {
  return (
    <div className='testimonial-section'>
        <div className="testimonial-section-top">
            <h3><span>Our</span> Testimonial</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint porro fugit nisi laudantium facere ut?</p>
        </div>
        <div className="testimonial-section-bottom">
            <div className="testimonial-card">
                <img src={testimonial1} alt="" />
                <div className="star-box">
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                </div>
                <div className="name-box">
                    <h5>Sachin Jha</h5>
                    <p>NDA Asspirant</p>
                </div>
                <div className="feedback">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus cum deleniti dolor fuga, laudantium laborum. Sapiente aperiam reprehenderit libero.</p>
                </div>
            </div>
            <div className="testimonial-card">
            <img src={testimonial2} alt="" />
                <div className="star-box">
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarHalfIcon className='icon'/>
                </div>
                <div className="name-box">
                    <h5>Vikas</h5>
                    <p>NDA Asspirant</p>
                </div>
                <div className="feedback">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus cum deleniti dolor fuga, laudantium laborum. Sapiente aperiam reprehenderit libero.</p>
                </div>
            </div>
            <div className="testimonial-card">
            <img src={testimonial3} alt="" />
                <div className="star-box">
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                </div>
                <div className="name-box">
                    <h5>Manisha</h5>
                    <p>NDA Asspirant</p>
                </div>
                <div className="feedback">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus cum deleniti dolor fuga, laudantium laborum. Sapiente aperiam reprehenderit libero.</p>
                </div>
            </div>
            <div className="testimonial-card">
            <img src={testimonial4} alt="" />
                <div className="star-box">
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                </div>
                <div className="name-box">
                    <h5>Mahika</h5>
                    <p>NDA Asspirant</p>
                </div>
                <div className="feedback">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus cum deleniti dolor fuga, laudantium laborum. Sapiente aperiam reprehenderit libero.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
