import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/sun-tornado.svg)` }}>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-brand">
                    <img src={process.env.PUBLIC_URL + '/images/e-commerce logo.png'} alt="Logo" width="40" height="40" />
                </div>
                <div>
                    <span className="navbar-brand-name">Skooler</span>
                </div>
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link" href="#">Home</a>
                    <a className="nav-item nav-link" href="#">Products</a>
                    <a className="nav-item nav-link" href="#">Events & Activities</a>
                    <a className="nav-item nav-link" href="#">Contact Us</a>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/man.png'} alt="Image" width="40" height="40" />
                </div>
            </div>
        </nav>
    );
}