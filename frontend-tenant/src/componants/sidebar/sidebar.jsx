import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import logo from '../../assets/logo.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={logo} alt="" />
            </div>
            {/* <h1>Paradise Place</h1> */}
            <nav>
                <ul id='ul-in-sidebar'>
                    <li id='side-home'><Link to="/">หน้าหลัก</Link></li>
                    <li id='side-bill'><Link to="/bills">ใบแจ้งหนี้</Link></li>
                    <li id='side-req'><Link to="/request">ส่งคำร้องขอ</Link></li>
                    <li id='side-noti'><Link to="/notification">การแจ้งเตือน</Link></li>
                    <li id='side-about'><Link to="/about">เกี่ยวกับฉัน</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;