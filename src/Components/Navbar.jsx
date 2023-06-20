import React, { useState, useEffect, useContext } from "react";
import "../css/Navbar.css";
import blacklogo from "../Images/blacklogo.png";
import { AuthContext } from "./AuthContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
export default function Navbar() {
  const navigate = useNavigate();

  const [showBlock, setShowBlock] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBlock(true);
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const closeLoginForm = () => {
    document.getElementById("loginFormSection").style.display = "none";
  };
  const openLoginForm = () => {
    document.getElementById("loginFormSection").style.display = "flex";
  };
  const closeRegisterForm = () => {
    setShowBlock(false);
  };
  const openRegisterForm = () => {
    setShowBlock(true);
  };

  const closeLogout = () => {
    document.getElementById("logoutScreen").style.display = "none";
  };
  const openLogout = () => {
    document.getElementById("logoutScreen").style.display = "flex";
  };
  const closeResponsiveMenu = () => {
    document.getElementById("responsiveMenu").style.top = "-80vh"
  }
  const openResponsiveMenu = () => {
    document.getElementById("responsiveMenu").style.top = "0vh"
  }

  const { isAuthenticated, login, logout, clearAuthToken, setAuthToken } =
    useContext(AuthContext);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [classValue, setClassValue] = useState("");
  const [stream, setStream] = useState("");
  const [state, setState] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [logpassword, setlogPassword] = useState("");

  console.log(isAuthenticated);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleClassChange = (e) => {
    setClassValue(e.target.value);
  };

  const handleStreamChange = (e) => {
    setStream(e.target.value);
  };
  const handleLogout = () => {
    logout();
    clearAuthToken();
    closeLogout();
    navigate("/");
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Create a payload object with the form data
    const payload = {
      fullname: fullName,
      email: email,
      password: password,
      contactnumber: contactNumber,
      classstandard: classValue,
      stream: stream,
      state: state,
    };

    fetch(`https://extinct-scarf-fly.cyclic.app/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Registration successfully");
        } else {
          console.error("Failed to Registration");
        }
      })
      .catch((error) => {
        console.error("An error occurred while deleting the video", error);
      });
    // Reset the form fields
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setContactNumber("");
    setClassValue("");
    setStream("");
    setState("");
  };

  const handleEmailOrPhoneChange = (e) => {
    setEmailOrPhone(e.target.value);
  };

  const handleLogPasswordChange = (e) => {
    setlogPassword(e.target.value);
  };

  const handlelogSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: emailOrPhone,
      password: logpassword,
    };
    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        login();
        setAuthToken(data);
        console.log("Login successful", data);
      } else {
        console.error("Failed to login");
      }
    } catch (error) {
      console.error("An error occurred while logging in", error);
    }
    // Reset the form fields
    setEmailOrPhone("");
    setlogPassword("");
    closeLoginForm();
  };

  return (
    <div className="navbar">
      <img src={blacklogo} alt="" className="navbar-logo" />

      <div className="navbar-items">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="course" className="nav-item">
          Course
        </Link>
        <Link to="/" className="nav-item">
          Test Series
        </Link>
        <Link to="study-material" className="nav-item">
          Study Material
        </Link>
        <Link to="about" className="nav-item">
          About Us
        </Link>
        <Link to="contact" className="nav-item">
          Contact Us
        </Link>
      </div>

      <MenuIcon className="menu-icon" onClick={openResponsiveMenu}/>

      {!isAuthenticated ? (
        <div className="navbar-buttons">
          {" "}
          <div className="btn-a-outline" onClick={openRegisterForm}>
            Register
          </div>{" "}
          <div className="btn-a-solid" onClick={openLoginForm}>
            Login
          </div>{" "}
        </div>
      ) : (
        <div className="btn-a-solid" onClick={openLogout}>
          Logout
        </div>
      )}

      <div className="login-form-section" id="loginFormSection">
        <form onSubmit={handlelogSubmit} className="login-form">
          <HighlightOffIcon className="close-icon" onClick={closeLoginForm} />
          <h3>Login</h3>
          <div className="input-box">
            <p>Enter E-mail or Phone No.</p>
            <input
              type="email"
              className="input-field"
              value={emailOrPhone}
              onChange={handleEmailOrPhoneChange}
            />
          </div>
          <div className="input-box">
            <p>Enter Password</p>
            <input
              type="password"
              className="input-field"
              value={logpassword}
              onChange={handleLogPasswordChange}
            />
          </div>
          <input type="submit" value="Login" className="btn-a-solid" />
        </form>
      </div>
      {showBlock && (
        <div className="register-form-section" id="registerFormSection">
          <form onSubmit={handleSubmit} className="register-form">
            <HighlightOffIcon
              className="close-icon-2"
              onClick={closeRegisterForm}
            />
            <h3>
              Register <span>Yourself</span> Now!
            </h3>
            <div className="input-row">
              <div className="input-box">
                <p>Full Name</p>
                <input
                  type="text"
                  className="input-field"
                  value={fullName}
                  onChange={handleFullNameChange}
                />
              </div>
              <div className="input-box">
                <p>Email</p>
                <input
                  type="email"
                  className="input-field"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-box">
                <p>Password</p>
                <input
                  type="password"
                  className="input-field"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="input-box">
                <p>Confirm Password</p>
                <input
                  type="password"
                  className="input-field"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-box">
                <p>Contact Number</p>
                <input
                  type="number"
                  className="input-field"
                  value={contactNumber}
                  onChange={handleContactNumberChange}
                />
              </div>
              <div className="input-box">
                <p>Class</p>
                <input
                  type="number"
                  className="input-field"
                  value={classValue}
                  onChange={handleClassChange}
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-box">
                <p>Stream</p>
                <input
                  type="text"
                  className="input-field"
                  value={stream}
                  onChange={handleStreamChange}
                />
              </div>
              <div className="input-box">
                <p>State</p>
                <input
                  type="text"
                  className="input-field"
                  value={state}
                  onChange={handleStateChange}
                />
              </div>
            </div>
            <div className="register-btn-section">
              <button type="submit" className="btn-a-solid">
                Register
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="logout-screen" id="logoutScreen">
        <div className="logout-box">
          <HighlightOffIcon className="close-icon" onClick={closeLogout} />
          <h4>Do you Want To Logout?</h4>
          <button className="btn-a-solid" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="responsive-menu" id="responsiveMenu">

        <CloseIcon className="menu-close-icon" onClick={closeResponsiveMenu}/>
      
        <img src={blacklogo} alt="" className="navbar-logo" />

        <div className="responsive-navbar-items">
          <Link to="/" className="responsive-nav-item" onClick={closeResponsiveMenu}>
            Home
          </Link>
          <Link to="course" className="responsive-nav-item" onClick={closeResponsiveMenu}>
            Course
          </Link>
          <Link to="/" className="responsive-nav-item" onClick={closeResponsiveMenu}>
            Test Series
          </Link>
          <Link to="study-material" className="responsive-nav-item" onClick={closeResponsiveMenu}>
            Study Material
          </Link>
          <Link to="about" className="responsive-nav-item" onClick={closeResponsiveMenu}>
            About Us
          </Link>
          <Link to="contact" className="responsive-nav-item" onClick={closeResponsiveMenu}>
            Contact Us
          </Link>
        </div>


        {!isAuthenticated ? (
          <div className="responsive-navbar-buttons" onClick={closeResponsiveMenu}>
            {" "}
            <div className="btn-a-outline" onClick={openRegisterForm}>
              Register
            </div>{" "}
            <div className="btn-a-solid" onClick={openLoginForm}>
              Login
            </div>{" "}
          </div>
        ) : (
          <div className="btn-a-solid" onClick={openLogout}>
            Logout
          </div>
        )}
      </div>
    </div>
  );
}
