import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work
ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));

// it gives us access to history, match and location. 
// These are built into the browser. 
// Browsers are web application with built in functionality like APIs.
// React Router is hooking into that functionality in order to be used in React.
