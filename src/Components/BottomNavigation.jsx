// src/components/BottomNavigation.js
import React from 'react';
import '../styles/BottomNavigation.css';
import Lottie from 'lottie-react'

function BottomNavigation() {
  return (
    <div className="bottom-navigation">
      <div className="nav-item">
      Maps
      </div>
      <div className="nav-item">
        Reminder
      </div>
      <div className="nav-item">Contact</div>
      <div className="nav-item">Greetings</div>
    </div>
  );
}

export default BottomNavigation;
