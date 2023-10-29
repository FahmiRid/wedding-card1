
import React, { useState, useEffect } from 'react';
import "../styles/admin1.css";
import BottomNavigation from "./BottomNavigation";
import Kad from "../Assets/kad1.png";
import Kad2 from '../Assets/kad2.png';
import Modal from "./Modal";

export default function Admin() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    // When the component is mounted, add a small delay to show the modal with animation.
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 100);

    // Clear the timeout when the component unmounts to prevent a memory leak.
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <BottomNavigation />
      <div className="AppGlass">
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        <div className="kad1">
        <img src={Kad} alt="Your Image Description" width={400} height={600} />
        <img src={Kad2} alt="Your Image Description" width={400} height={600} />
        </div>
      </div>
    </div>
  );
}
