import React from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";


const Footer = () => {
    return (
        <div className='footer container'>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/aboutme"}>Aboutme</NavLink></li>
                <li><NavLink to={"/portfolyo"}>Portfolyo</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
            <ul>
                <li><p>Contact:</p></li>
                <li><p>Email: notitanic33@gmail.com</p></li>
                <li><p>Inst: notitanic33:</p></li>
                <li><p>Calls: +99899 - 110 - 11 -97:</p></li>
            </ul>
            <ul>
                <li className='toTopLi'>
                    <NavLink to={'/'} className='nav_logo'> <img src="./img/logo1.png" alt="" className='nav_logo' />Notitanic</NavLink> 
                    <button className='toTop'><img src="./img/up_ctg.svg" alt="" className='footerTopIcon' /> <ScrollToTop smooth /></button>
                </li>
            </ul>
        </div>
    );
}

export default Footer;