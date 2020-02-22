import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

import {TourProvider} from "./context";

ReactDOM.render(
    <TourProvider>
    <Router>
        <App />
    </Router>
    </TourProvider>

, document.getElementById('root'));

