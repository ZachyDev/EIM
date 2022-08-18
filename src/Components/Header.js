import React from 'react';
import logo from '../assets/logo.png';
import './style.css'

function Header() {
  return (
    <div class="header">
    <div class="inner-header">
    <div class="logo">
      <img src= { logo } width="70px" height="70px" />
    </div>

    <div class="nav">
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