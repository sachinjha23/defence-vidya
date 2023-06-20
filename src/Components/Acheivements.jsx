import React from 'react'
import "../css/Acheivements.css"
import acheivement1 from "../Images/acheivement1.png"
import acheivement2 from "../Images/acheivement2.png"
import acheivement3 from "../Images/acheivement3.png"
import acheivement4 from "../Images/acheivement4.png"
export default function Acheivements() {
  return (
    <div className='acheivements-section'>
        <div className="acheivements-section-top">
            <h3>Our <span>Acheivements</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cum impedit vel repudiandae distinctio enim.</p>
        </div>
        <div className="acheivements-section-bottom">
            <div className="acheivements-card">
                <img src={acheivement1} alt="" />
                <h4>Acheivement 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quidem numquam atque odio velit reiciendis.</p>
            </div>
            <div className="acheivements-card">
                <img src={acheivement2} alt="" />
                <h4>Acheivement 2</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quidem numquam atque odio velit reiciendis.</p>
            </div>
            <div className="acheivements-card">
                <img src={acheivement3} alt="" />
                <h4>Acheivement 3</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quidem numquam atque odio velit reiciendis.</p>
            </div>
            <div className="acheivements-card">
                <img src={acheivement4} alt="" />
                <h4>Acheivement 4</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quidem numquam atque odio velit reiciendis.</p>
            </div>
        </div>
    </div>
  )
}
