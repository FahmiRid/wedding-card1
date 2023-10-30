// src/components/BottomNavigation.js
import React, {useState} from 'react';
import '../styles/BottomNavigation.css';
import Map from '../Assets/map2.png';
import Reminder from '../Assets/reminder2.png';
import Contact from '../Assets/contact2.png';
import Greetings from '../Assets/greetings2.png';
import MapModal from '../Modal/MapModal';

function BottomNavigation() {
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const openMapModal = () => {
        setIsMapModalOpen(true);
      };
    
      const closeMapModal = () => {
        setIsMapModalOpen(false);
      };
    return (
        <div className="bottom-navigation">
            <div className="nav-item">
                <img className='img-class' src={Map} alt='map' width={20} height={20} onClick={openMapModal} />
                <span>Maps</span>
            </div>
            {isMapModalOpen && <MapModal onClose={closeMapModal} />}
            <div className="nav-item">
                <img  className='img-reminder' src={Reminder} alt='map' width={20} height={20} />
                <span>Reminder</span>
            </div>
            <div className="nav-item">
                <img className='img-class' src={Contact} alt='map' width={20} height={20} />
                <span>Contact</span>
            </div>
            <div className="nav-item">
                <img className='img-greetings' src={Greetings} alt='map' width={20} height={20} />
                <span>Greetings</span>
            </div>
        </div>
    );
}

export default BottomNavigation;
