import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import {NavLink,Link} from 'react-router-dom'
import {MenuOutlined,UpCircleOutlined} from '@ant-design/icons'

function Navbar() {
    // const {}=useSelector(state => state)
    const [navcluch,setNavcluch]=useState(false)
    console.log(navcluch);
    return (
        <nav className='container'>
                <Link to={"/"} className="nav_logo"><img src="./img/logo1.png" alt="" /></Link>
            <ul className={navcluch ?'active':''}>
                <li><NavLink to={"/"}  activeClassName="active ">Home</NavLink></li>
                <li><NavLink to={"/aboutme"} activeClassName="active ">About me</NavLink></li>
                <li><NavLink to={"/portfolyo"} activeClassName="active ">Portfolio</NavLink></li>
                <li><NavLink to={"/contact"} activeClassName="active ">Contact</NavLink></li>
            </ul>
            <button className='burger' onClick={()=>setNavcluch(!navcluch)}>{navcluch?<UpCircleOutlined />:<MenuOutlined />}</button>
        </nav>
    );
}

export default Navbar;