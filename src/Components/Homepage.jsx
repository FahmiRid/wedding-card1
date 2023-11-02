import React, { useState, useEffect } from 'react';
import "../styles/admin1.css";
import BottomNavigation from "./BottomNavigation";
import Kad from "../Assets/kad1.png";
import Kad2 from '../Assets/kad2.png';
import Modal from "./Modal";

export default function Admin() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <BottomNavigation />
      <div className="AppGlass">
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        
        <div className="kad1">
          <img src={Kad} alt="Your Image Description" />
          <img src={Kad2} alt="Your Image Description" />
        </div>
      </div>
    </div>
  );
}
