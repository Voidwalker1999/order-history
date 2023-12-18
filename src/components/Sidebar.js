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
                    <a href="http://localhost:3000/">Dashboard</a>
                </li>
                <li>
                    <a href="http://localhost:3000/">Product Management</a>
                </li>
                <li className="active">
                    <a href="http://localhost:3000/">Order Management</a>
                </li>
                <li>
                    <a href="http://localhost:3000/">Complaints</a>
                </li>
                <li>
                    <a href="http://localhost:3000/">User Management</a>
                </li>
                <li>
                    <a href="http://localhost:3000/">Admin Management</a>
                </li>
                <li>
                    <a href="http://localhost:3000/">Events & Activities</a>
                </li>
                <li>
                    <a href="http://localhost:3000/">Settings</a>
                </li>
            </ul>
        </div>
    );
}
