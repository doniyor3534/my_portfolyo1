import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer= ()=> {
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
                <li><NavLink to={"/"} className="nav_logo footerlogo"> <img src="./img/logo1.png" alt="" /> Notitanic <img src="./img/up_ctg.svg" alt="" className='footerTopIcon' /></NavLink></li>
            </ul>
        </div>
    );
}

export default Footer;