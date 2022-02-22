import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // 



// You'll need to wrap <App /> for routing to work
ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root')); 
// gives us access to history, match and location. These are built into the browser. Browsers are web applications that have built in functionality like the API. They gives us access and react router is hooking into functionality and allows us to use it in React. 
