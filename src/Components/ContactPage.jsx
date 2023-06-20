import React, { useState } from 'react'
import "../css/ContactPage.css"
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            name: name,
            email: email,
            querydetails: query,
        };

        fetch(`http://localhost:8000/api/auth/feedback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
            .then((response) => {
                if (response.ok) {
                    console.log("successfully");
                } else {
                    console.error("Failed to upload video");
                }
            })
            .catch((error) => {
                console.error("An error occurred while deleting the video", error);
            });
        // Reset the form fields
        setName("");
        setEmail("");
        setQuery("");
    };
    return (
        <div className='contact-page'>
            <div className="contact-page-top">
                <h3>Contact Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error fugit ipsa impedit asperiores itaque dolorem ipsam esse? Debitis, officia obcaecati consequuntur et labore est nam voluptatum recusandae ex error harum!</p>
            </div>
            <div className="contact-page-bottom">
                <div className="bottom-left">
                    <div className="contact-field">
                        <div className="contact-field-circle"><PlaceIcon className='contact-icon' /></div>
                        <div className="contact-field-text">
                            <h4>Visit Us</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos asperiores ipsum blanditiis quod ea!</p>
                        </div>
                    </div>
                    <div className="contact-field">
                        <div className="contact-field-circle"><CallIcon className='contact-icon' /></div>
                        <div className="contact-field-text">
                            <h4>Call Us</h4>
                            <p>+91 1234567890</p>
                        </div>
                    </div>
                    <div className="contact-field">
                        <div className="contact-field-circle"><EmailIcon className='contact-icon' /></div>
                        <div className="contact-field-text">
                            <h4>Mail Us</h4>
                            <p>officialMail@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="bottom-right">
                    <form onSubmit={handleSubmit} className="form">
                        <h4>Send Messsage</h4>
                        <div className="input-box">
                            <p>Your Name</p>
                            <input
                                type="text"
                                name="name"
                                className="input-field"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="input-box">
                            <p>Your Email</p>
                            <input
                                type="email"
                                name="email"
                                className="input-field"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="input-box">
                            <p>Your Query</p>
                            <input
                                type="text"
                                name="query"
                                className="input-field"
                                value={query}
                                onChange={handleQueryChange}
                            />
                        </div>
                        <input type="submit" className="btn-a-solid" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
