import React from 'react'
import "../css/WhyUs.css"
import AddTaskIcon from '@mui/icons-material/AddTask';
import WhyUsImg from "../Images/whyusimg.png"
export default function WhyUs() {
    return (
        <div className='why-us-section'>
            <div className="why-us-section-top">
                <h3>Why <span>Us?</span></h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, ratione numquam rerum at voluptas quibusdam tenetur. Qui voluptatum ?</p>
            </div>
            <div className="why-us-section-bottom">
                <div className="why-us-section-bottom-left">
                    <div className="why-us-quality-box">
                        <div className="quality-icon"><AddTaskIcon /></div>
                        <div className="quality-text">
                            <h4>Quality 1</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nam impedit facere accusantium deserunt error.</p>
                        </div>
                    </div>
                    <div className="why-us-quality-box">
                        <div className="quality-icon"><AddTaskIcon /></div>
                        <div className="quality-text">
                            <h4>Quality 2</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nam impedit facere accusantium deserunt error.</p>
                        </div>
                    </div>
                    <div className="why-us-quality-box">
                        <div className="quality-icon"><AddTaskIcon /></div>
                        <div className="quality-text">
                            <h4>Quality 3</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nam impedit facere accusantium deserunt error.</p>
                        </div>
                    </div>
                    <div className="why-us-quality-box">
                        <div className="quality-icon"><AddTaskIcon /></div>
                        <div className="quality-text">
                            <h4>Quality 4</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nam impedit facere accusantium deserunt error.</p>
                        </div>
                    </div>
                </div>
                <div className="why-us-section-bottom-right">
                    <img src={WhyUsImg} alt="" />
                </div>
            </div>
        </div>
    )
}
