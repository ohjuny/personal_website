import React, { Component } from 'react';

import '../../index.css';

import quotes from './quotes.json';

class Quote extends Component {
    render () {
        const i = Math.floor(Math.random() * quotes.length);
        return (
            <div className="quote">
                "{ quotes[i]["content"] }" - { quotes[i]["author"] }
            </div>
        )
    }
}

export default Quote;