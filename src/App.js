import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import StudyMaterialPage from './Components/StudyMaterialPage';
import AboutUsPage from './Components/AboutUsPage';
import ContactPage from './Components/ContactPage';
import Error404 from './Components/Error404';
import CoursePage from './Components/CoursePage';
import AdminNavbar from './Components/AdminNavbar';
import AdminStudyMaterial from './Components/AdminStudyMaterial';
import AdminLecturePage from './Components/AdminLecturePage';
import AdminDashboard from './Components/AdminDashboard';
import { AuthContext } from './Components/AuthContext';

function App() {
  // const navigate = useNavigate()
  const { token } = useContext(AuthContext);
  console.log("token", token)
  const userRole = token?.role || "user"; // Set the user role here ('user' or 'admin')

  const renderNavbar = () => {
    if (userRole === 'admin') {
      return <AdminNavbar />;
    }
    return <Navbar />;
  };



  return (
    <div className="App">
      <Router>
        {renderNavbar()}
        <Routes>


          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="study-material" element={<StudyMaterialPage />} />
          <Route path="course" element={<CoursePage />} />

          {/* Routes for admins */}
          {userRole === 'admin' && (
            <>
              <Route path="admin/study-material" element={<AdminStudyMaterial />} />
              <Route path="admin/lecture-page" element={<AdminLecturePage />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </>
          )}

          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
