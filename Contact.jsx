import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
    const [result, setResult] = useState(""); // ✅ Fix 1: Add useState

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target);
        formData.append("access_key", "bd0cc87b-c9ae-4ee2-ba93-f17baf4a78a4");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            setResult("An error occurred. Please try again.");
            console.error("Fetch error:", error);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a Message  <img src={msg_icon} alt="" /></h3>
                <p>We’re here to help! Whether you have questions, feedback, or need assistance, feel free to reach out.</p>
                <ul>
                    <li><img src={mail_icon} alt=""/> info@scholaria.ac.uk</li>
                    <li><img src={phone_icon} alt=""/> +44 20 7946 0123</li>
                    <li><img src={location_icon} alt=""/> Scholaria University - UK Campus<br />
                        123 Innovation Street, London, SW1A 1AA, United Kingdom</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}> {/* ✅ Fix 2: Add onSubmit */}
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder='Enter your name' required />
                    
                    <label>Your Mobile</label>
                    <input type="tel" name="phone" placeholder='Enter your mobile' required />
                    
                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    
                    <button type="submit" className='btn'>
                        Submit <img src={white_arrow} alt=""/>
                    </button>
                </form>
                <span>{result}</span> {/* ✅ Fix 3: Ensure result displays properly */}
            </div>
        </div>
    );
}

export default Contact;
