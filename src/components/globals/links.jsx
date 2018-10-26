import React, { Component } from 'react';

class Links extends Component {
    render () {
        return (
            <ul>
                <li><a href="">GitHub</a></li>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">Medium</a></li>
                <br></br>
                <li><img src={require('../../images/ohjun_logo.png')} width="30px"/></li>
            </ul>
        )
    }
}

export default Links;