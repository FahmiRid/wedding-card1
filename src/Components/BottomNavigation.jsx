// src/components/BottomNavigation.js
import React, { useState } from 'react';
import '../styles/BottomNavigation.css';
import Map from '../Assets/map2.png';
import Reminder from '../Assets/reminder2.png';
import Contact from '../Assets/contact2.png';
import Greetings from '../Assets/greetings2.png';
import MapModal from '../Modal/MapModal';
import ModalReminder from '../Modal/ModalReminder';
import ContactModal from '../Modal/ContactModal';
import GreetingModal from '../Modal/GreetingModal';

function BottomNavigation() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isGreetingModalOpen, setIsGreetingModalOpen] = useState(false);

  const openMapModal = () => {
    setIsMapModalOpen(true);
  };
  const openReminderModal = () => {
    setIsReminderModalOpen(true);
  }

  const openContactModal = () => {
    setIsContactModalOpen(true);
  }

  const openGreetingModal = () => {
    setIsGreetingModalOpen(true);
  }


  const closeMapModal = () => {
    setIsMapModalOpen(false);
  };

  const closeReminderModal = () => {
    setIsReminderModalOpen(false);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const closeGreetingModal = () => {
    setIsGreetingModalOpen(false);
  };


  return (
    <div className="bottom-navigation">
      <div className="nav-item">
        <img className='img-class' src={Map} alt='map' width={20} height={20} onClick={openMapModal} />
        <span>Maps</span>
      </div>
      {isMapModalOpen && <MapModal onClose={closeMapModal} />}
      {/* <div className="nav-item">
        <img className='img-reminder' src={Reminder} alt='map' width={20} height={20} onClick={openReminderModal} />
        <span>Reminder</span>
      </div>
      {isReminderModalOpen && <ModalReminder onClose={closeReminderModal} />} */}
      <div className="nav-item">
        <img className='img-contact' src={Contact} alt='map' width={20} height={20} onClick={openContactModal} />
        <span>Contact</span>
      </div>
      {isContactModalOpen && <ContactModal onClose={closeContactModal} />}
      <div className="nav-item">
        <img className='img-greetings' src={Greetings} alt='map' width={20} height={20} onClick={openGreetingModal} />
        <span>Greetings</span>
      </div>
      {isGreetingModalOpen && <GreetingModal onClose={closeGreetingModal} />}
    </div>
  );
}

export default BottomNavigation;
