import React, {  useState } from 'react';
// import { useSelector } from 'react-redux';
import {Link, useLocation} from 'react-router-dom'
import {MenuOutlined,UpCircleOutlined} from '@ant-design/icons'

function Navbar() {
    // const {}=useSelector(state => state)
    const [navcluch,setNavcluch]=useState(false)

    const {pathname} = useLocation()

    return (
        <nav className='container'>
                <Link to={"/"} className="nav_logo"><img src="./img/logo1.png" alt="" /></Link>
            <ul className={navcluch ?'active':''}>
                <li><Link to={"/"}   className={pathname==='/'?'active':''}   onClick={()=>setNavcluch(!navcluch)}>Home</Link></li>
                <li><Link to={"/aboutme"}  className={pathname==='/aboutme'?'active':''}   onClick={()=>setNavcluch(!navcluch)}>About me</Link></li>
                <li><Link to={"/portfolyo"}  className={pathname==='/portfolyo'?'active':''}   onClick={()=>setNavcluch(!navcluch)}>Portfolio</Link></li>
                <li><Link to={"/contact"}  className={pathname==='/contact'?'active':''}   onClick={()=>setNavcluch(!navcluch)}>Contact</Link></li>
            </ul>
            <button className='burger' onClick={()=>setNavcluch(!navcluch)}>{navcluch?<UpCircleOutlined />:<MenuOutlined />}</button>
        </nav>
    );
}

export default Navbar;