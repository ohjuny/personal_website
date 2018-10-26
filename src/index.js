import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './index.css';

import Home from './components/home/home';
import Biography from './components/biography/biography';
import Projects from './components/projects/projects';
import Education from './components/education/education';
import Reading from './components/reading/reading';
import Ideas from './components/ideas/ideas';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/biography/" component={Biography} />
                    <Route path="/projects/" component={Projects} />
                    <Route path="/education/" component={Education} />
                    <Route path="/reading/" component={Reading} />
                    <Route path="/ideas/" component={Ideas} />
                </Switch>
            </BrowserRouter>
        )

    }
}

export default App;



ReactDOM.render(
    <App />,
    document.getElementById('root')
);