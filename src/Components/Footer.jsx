import React from "react";
import "../css/Footer.css";
import whiteLogo from "../Images/whitelogo.png";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer() {
  return (
    <div className="footer">
            <div className="footer-top">
            <div className="footer-column first-column">
              <img src={whiteLogo} alt="" />
              <h5>Service Before Self</h5>
            </div>
            <div className="footer-column second-column">
              <h4>Quick Contacts</h4>
              <div className="contact-field">
                <div className="contact-field-icon">
                  <AddIcCallIcon />
                </div>
                <div className="contact-field-text">
                  <h6>Call Us</h6>
                  <p>+91 123 456 789 0</p>
                </div>
              </div>
              <div className="contact-field">
                <div className="contact-field-icon">
                  <AddIcCallIcon />
                </div>
                <div className="contact-field-text">
                  <h6>WhatsApp Us</h6>
                  <p>+91 123 456 789 0</p>
                </div>
              </div>
              <div className="contact-field">
                <div className="contact-field-icon">
                  <AddIcCallIcon />
                </div>
                <div className="contact-field-text">
                  <h6>Email Us</h6>
                  <p>OfficialMail@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="footer-column third-column">
              <h4>Office Address</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
                autem veritatis esse velit iure ut non dolore quaerat earum et.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                reiciendis atque! Velit suscipit eaque perspiciatis.
              </p>
            </div>
            <div className="footer-column forth-column">
              <h4>Social Links</h4>
              <div className="social-media-links">
                <a href="#"><InstagramIcon className="social-media-icon"/></a>
                <a href="#"><FacebookIcon className="social-media-icon"/></a>
                <a href="#"><LinkedInIcon className="social-media-icon"/></a>
                <a href="#"><TwitterIcon className="social-media-icon"/></a>
              </div>
              <h4>Download APP</h4>
              <div className="download-field">
                <a href="#"><AppleIcon className="download-app-icon"/></a>
                <a href="#"><AdbIcon className="download-app-icon"/></a>
              </div>
            </div>
      </div>
      <div className="footer-bottom">
        <p>This Website Is Designed And Developed By <span><a href="https://wa.me/8742920558" target="_blank">Sachin <WhatsAppIcon/></a></span></p>
      </div>
    </div>
  );
}
