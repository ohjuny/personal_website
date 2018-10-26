import React, { Component } from 'react';

import '../../index.css';

import Header from '../globals/header';
import Navbar from '../globals/navbar';
import Projects_Sidebar from './projects_sidebar';
import Projects_Content from './projects_content';

class Projects extends Component {
    render () {
        return (
            <div className="wrapper">
                <Header />
                <Navbar />
                <Projects_Sidebar />
                <Projects_Content />
            </div>
        )

    }
}

export default Projects;