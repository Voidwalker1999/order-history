import React from 'react';
import './Sidebar.css';
export default function Sidebar() {
    return (
        <div className="sidebar" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/sun-tornado.svg)` }}>
            <div className="sidebar-header">
                <h3>Administration Dashboard</h3>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Product Management</a>
                </li>
                <li className="active">
                    <a href="#">Order Management</a>
                </li>
                <li>
                    <a href="#">Complaints</a>
                </li>
                <li>
                    <a href="#">User Management</a>
                </li>
                <li>
                    <a href="#">Admin Management</a>
                </li>
                <li>
                    <a href="#">Events & Activities</a>
                </li>
                <li>
                    <a href="#">Settings</a>
                </li>
            </ul>
        </div>
    );
}
