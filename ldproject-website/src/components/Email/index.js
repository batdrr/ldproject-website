import React from 'react';
import emailjs from 'emailjs-com';
import "../Email/EmailElements.css"

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail-sent', 'email-form', e.target, 'user_mtQK1gXgvN7T7XtKw6jPw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    
    return(
        <div id="email" className="FormContainer">
            {/* Contact Form Container */}
                <div className="contactform">
                    <form className="form" onSubmit={sendEmail}>
                    <h1>Email Us</h1>

                    <label>Name</label>
                    <input placeholder="Name" name="name" required />

                    <label>Email</label>
                    <input placeholder="Email" name="email" required />

                    <label>Subject</label>
                    <input placeholder="Subject" name="subject" required />
            
                    <label>Message</label>
                    <textarea placeholder="Your Message" name="message" required >
                    </textarea>

                    <button href="/" type="sumbit">Submit</button>
                    </form>
                </div>
            </div>
    );
};