import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-brand">
                    <img src="/path/to/your/logo.png" alt="Logo" width="30" height="30" />
                    <span className="navbar-brand-name">Skooler</span> {/* Added line */}
                </div>
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link" href="#">Home</a>
                    <a className="nav-item nav-link" href="#">Products</a>
                    <a className="nav-item nav-link" href="#">Events & Activities</a>
                    <a className="nav-item nav-link" href="#">Contact Us</a>
                </div>
            </div>
        </nav>
    );
}