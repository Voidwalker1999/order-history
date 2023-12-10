import React from 'react';
import './Sidebar.css';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>Administration Dashboard</h3>
            </div>
            <ul className="sidebar-menu">
                <li className="active">
                    <a href="#">Profile</a>
                </li>
                <li>
                    <a href="#">Orders</a>
                </li>
                <li>
                    <a href="#">Payment settings</a>
                </li>
                <li>
                    <a href="#">Complaints</a>
                </li>
                <li>
                    <a href="#">Reviews</a>
                </li>
                <li>
                    <a href="#">Vouchers</a>
                </li>
                <li>
                    <a href="#">Notification settings</a>
                </li>
            </ul>
        </div>
    );
}
