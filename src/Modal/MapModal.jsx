// MapModal.jsx
import React, { useState } from 'react';
import '../styles/MapModal.css';

function MapModal({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className={`map-modal ${isOpen ? 'active' : ''}`}>
      <div className="map-content">
        {/* Map content goes here */}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default MapModal;
