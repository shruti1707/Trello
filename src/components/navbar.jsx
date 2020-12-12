import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
const Navbar = () => {
    return (  
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="#">CRM</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink className="nav-link" to="#">Home <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Profile</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Analytics</NavLink>
        </li>
        
      </ul>
    </div>
  </nav>
  </Router>
  );
}
 
export default Navbar;