import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';


const About = () => {
    return (
        <div className='about'>
            {/* Left Section */}
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
    
            </div>

           {/* Right Section */}
<div className="about-right">
    <h3>ABOUT UNIVERSITY</h3>
    <h2>Tomorrow’s Success Begins with Today’s Guidance</h2>
    <p>At <b>Scholaria</b>, we believe in empowering young minds through education that fosters curiosity, confidence, and a love for learning. Our goal is to shape future leaders ready for tomorrow’s challenges.</p>
    <p>With dedicated educators and innovative teaching methods, we cultivate critical thinking, creativity, and leadership skills, ensuring students excel in their fields.</p>
    <p>More than just an institution, we are a community committed to transforming lives through learning. <b>Tomorrow’s success starts with today’s guidance.</b></p>
</div>

        </div>
    );
};

export default About;
