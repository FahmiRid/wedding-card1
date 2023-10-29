// src/components/BottomNavigation.js
import React from 'react';
import '../styles/BottomNavigation.css';
import Lottie from 'lottie-react'
import Map from '../Assets/map.png';

function BottomNavigation() {
    return (
        <div className="bottom-navigation">
            <div className="nav-item">
                <img className='img-class' src={Map} alt='map' width={20} height={20} />
                Maps
            </div>
            <div className="nav-item">
                <img  className='img-class' src={Map} alt='map' width={20} height={20} />
                Reminder
            </div>
            <div className="nav-item">
                <img className='img-class' src={Map} alt='map' width={20} height={20} />
                Contact
            </div>
            <div className="nav-item">
                <img className='img-class' src={Map} alt='map' width={20} height={20} />
                Greetings
            </div>
        </div>
    );
}

export default BottomNavigation;
