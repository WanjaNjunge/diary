import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import { AppState } from './AppState';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppState>
    <Router>
    <Route path="/" component={App}/>
    </Router>
    </AppState>
    
    
  </React.StrictMode>
);

