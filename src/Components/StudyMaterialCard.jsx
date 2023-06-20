import React from 'react'
import "../css/StudyMaterialCard.css"
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import DownloadingIcon from '@mui/icons-material/Downloading';
export default function StudyMaterialCard(props) {
  return (
    <div className='study-material-card'>
      <div className="study-material-card-circle">
        <NoteAddOutlinedIcon className='icon' />
      </div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <a href={props.pdf_link} className="btn-a-solid"><DownloadingIcon /> Download</a>
    </div>
  )
}
