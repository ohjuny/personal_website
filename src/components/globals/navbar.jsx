import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../../index.css';

class Navbar extends Component {
    render () {
        return (
            <div className="navbar">
                <div className="navbar-text">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/biography">Biography</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/education">Education</Link></li>
                        <li><Link to="/reading">Reading</Link></li>
                        <li><Link to="/ideas">Ideas</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;