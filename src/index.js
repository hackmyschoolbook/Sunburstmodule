import React from 'react';
import ReactDOM, { hashHistory } from "react-dom";
import './font.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from "react-router-dom";
import Demo from './pages/admin/demo';

const Root = (
    <Router basename={'/sunburst'} history={hashHistory}>
 <Demo/>      
    </Router>
);

ReactDOM.render(Root, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();