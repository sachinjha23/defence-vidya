import React, { useContext, useEffect } from 'react'
import "../css/AdminNavbar.css"
import logo from "../Images/whitelogo.png"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext';
export default function AdminNavbar() {
  const navigate = useNavigate()

  const { isAuthenticated, login, logout, clearAuthToken, setAuthToken, token } = useContext(AuthContext);
  const closeLogout = () => {
    document.getElementById("logoutScreen").style.display = "none";
  }
  const openLogout = () => {
    document.getElementById("logoutScreen").style.display = "flex";
  }
  const handleLogout = () => {
    logout();
    clearAuthToken()
    closeLogout();
    navigate("/")
  };
  useEffect(() => {
    if (token.role === 'admin') {
      navigate("/admin/dashboard")
    }
  }, [])
  return (
    <div className="admin-navbar">
      <img src={logo} alt="" className='logo' />
      <div className="admin-navbar-items">
        <Link to="/admin/dashboard" className='nav-links'>Database</Link>
        <Link to="/admin/lecture-page" className='nav-links'>Upload Video</Link>
        <Link to="/admin/study-material" className='nav-links'>Upload PDFs</Link>
      </div>
      <button className="btn-a-outline" onClick={openLogout}>Logout</button>
      <div className="logout-screen" id='logoutScreen'>
        <div className="logout-box">
          <HighlightOffIcon className='close-icon' onClick={closeLogout} />
          <h4>Do you Want To Logout?</h4>
          <button className="btn-a-solid" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}
