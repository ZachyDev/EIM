import React from 'react';
import logo from '../assets/logo.png';
import './style.css'

function Header() {
  return (
    <div className="header">
    <div className="inner-header">
    <div className="logo">
      <img src= { logo } width="70px" height="70px" />
    </div>

    <div className="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    </div>
  </div>
  )
}

export default Header