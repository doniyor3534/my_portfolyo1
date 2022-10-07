import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'
import {MenuOutlined,UpCircleOutlined} from '@ant-design/icons'

function Navbar() {
    // const {}=useSelector(state => state)
    const [navcluch,setNavcluch]=useState(false)
    console.log(navcluch);
    return (
        <nav className='container'>
                <div className="nav_logo"><img src="./img/logo1.png" alt="" /></div>
            <ul className={navcluch ?'active':''}>
                <li><NavLink to='/home'  activeclassName="active ">Home</NavLink></li>
                <li><NavLink to='/aboutme' activeclassName="active">About me</NavLink></li>
                <li><NavLink to='/portfolyo' activeclassName="active">Portfolio</NavLink></li>
                <li><NavLink to='/contact' activeclassName="active">Contact</NavLink></li>
            </ul>
            <button className='burger' onClick={()=>setNavcluch(!navcluch)}>{navcluch?<UpCircleOutlined />:<MenuOutlined />}</button>
        </nav>
    );
}

export default Navbar;