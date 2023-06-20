import React from 'react'
import "../css/LectureCard.css"
import NotStartedOutlinedIcon from '@mui/icons-material/NotStartedOutlined';
export default function LectureCard(props) {
  return (
    <div className='lecture-card'>
      <img src={props.thumbnail} alt="" />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <a href={props.video_url} target="_blank" className="btn-a-solid"><NotStartedOutlinedIcon /> Watch Now</a>
    </div>
  )
}
