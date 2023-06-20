import React from 'react'
import "../css/AdminStudentCard.css"
export default function AdminStudentCard(props) {
  return (
    <div className='admin-student-card'>
      <div className="user-profile"></div>
      <h4><strong>Name : </strong>{props.fullname}</h4>
      <p><strong>Email : </strong>{props.email}</p>
      <p><strong>MobileNumber : </strong>{props.contactnumber}</p>
      <p>{props.gender}</p>
    </div>
  )
}
