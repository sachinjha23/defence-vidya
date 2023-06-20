import React, { useContext, useEffect, useState } from 'react'
import "../css/AdminDashboard.css"
import blackLogo from "../Images/blacklogo.png"
import AdminStudentCard from './AdminStudentCard'
import { AuthContext } from './AuthContext';
export default function AdminDashboard() {
  const { token } = useContext(AuthContext);
  const [studentdata, setstudentdata] = useState([])
  async function studentList() {
    let res = await fetch('http://localhost:8000/api/admin/getuserlist', {
      headers: {
        "Authorization": `bearer ${token.token}`
      }
    }).then((r) => r.json()).then((res) => (setstudentdata(res.userList)))
  }

  useEffect(() => {
    studentList()
  }, [])
  return (
    <div className='admin-dashboard'>
      <div className="admin-welcome-box">
        <div className="admin-welcome-box-text">
          <h1><span>Welcome</span> Back</h1>
          <h2>Mr. <span> Admin</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe alias iure sequi assumenda nemo molestias rerum aperiam numquam asperiores vero, repudiandae dignissimos quaerat corporis beatae architecto tempora, omnis suscipit!</p>
        </div>
        <img src={blackLogo} alt="" />
      </div>
      <h3>Student Profile</h3>
      <div className="admin-dashboard-main">
        {studentdata?.map((item) => {
          return <AdminStudentCard {...item} />
        })}


      </div>
    </div>
  )
}
