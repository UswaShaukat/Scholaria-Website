import React, { useState } from 'react';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';
import './Navbar.css';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <nav className='navbar-container'>
            <span className='nav-title'>Scholaria</span>
            
            {/* Menu */}
            <ul className={mobileMenu ? 'mobile-menu' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={toggleMenu}>About Us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={toggleMenu}>Contact Us</Link></li>
            </ul>

            {/* Menu Icon */}
            <img src={menu_icon} alt="Menu" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
