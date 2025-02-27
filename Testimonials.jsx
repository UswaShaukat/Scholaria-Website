import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    
    const slideForward = () => {
        if (tx > -75) { // 4 slides, so max move = -75%
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    
    const slideBackward = () => {
        if (tx < 0) { 
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    

    return (
        <div className="testimonials">
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />

            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="Emma Johnson" />
                                <div className="user-details">
                                    <h3>Emma Johnson</h3>
                                    <span>Scholaria, UK</span>
                                    <p>
                                        I chose <b>Scholaria</b> University for its innovative teaching and strong leadership focus. The hands-on learning and supportive faculty make it the perfect place for my growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="Liam Smith" />
                                <div className="user-details">
                                    <h3>Liam Smith</h3>
                                    <span>Scholaria, UK</span>
                                    <p>
                                        <b>Scholaria</b> University stood out to me because of its commitment to real-world learning. The dynamic environment and expert faculty push me to excel every day.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="Sofia González" />
                                <div className="user-details">
                                    <h3>Sofia González</h3>
                                    <span>Scholaria, UK</span>
                                    <p>
                                    I wanted a university that fosters creativity and critical thinking, and Scholaria does exactly that. The engaging curriculum and mentorship here have truly shaped my academic journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="Johnson Darius" />
                                <div className="user-details">
                                    <h3>Johnson Darius</h3>
                                    <span>Scholaria, UK</span>
                                    <p>
                                    At <b>Scholaria</b>, I found more than just education—I found a community that inspires success. The personalized support and cutting-edge programs make it the ideal place to thrive.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
