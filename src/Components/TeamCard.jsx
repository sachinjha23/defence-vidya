import React from 'react'
import "../css/TeamCard.css"
export default function TeamCard(props) {
  return (
    <div className='team-card'>
        <img src={props.image} alt="" />
        <div className="team-card-name">
            <h4>{props.name}</h4>
            <p>{props.position}</p>
        </div>
        <p>{props.about}</p>
    </div>
  )
}
