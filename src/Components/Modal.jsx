import React, { useState, useEffect } from 'react';
import '../styles/Modal.css';
import Close from '../Assets/close.png';
import SoundFile from '../Assets/thousand.mp3';

function Modal ({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
        onClose();
    };

    useEffect(() => {
        // When the component is mounted, add a small delay to show the modal with animation.
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 100);

        // Clear the timeout when the component unmounts to prevent a memory leak.
        return () => clearTimeout(timer);
    }, []);

    const playSound = () => {
        setIsOpen(false); // Close the modal with animation
        setTimeout(() => {
          onClose(); // Remove the modal
        }, 300); // Adjust the timing to match the CSS transition duration
    
        const audio = new Audio(SoundFile); // Create an audio element
        audio.play(); // Play the audio
      };

    return (
        <div className={`reminder-modal ${isOpen ? 'active' : ''}`}>
            <div className="reminder-content">
                <button onClick={closeModal}>
                    <img src={Close} alt='close-btn' width={20} height={20} />
                </button>
                <div className='header'>
                    <h1>Walimatus Urus</h1>
                </div>
                <div className="modal-name">
                    <p>Fazli</p>
                    <p>&</p>
                    <p>Nurul</p>
                </div>
                <div className='btn-sound'>
                    <button className='play-sound' onClick={playSound}>Play Sound</button>
                    <button className='no-sound' onClick={closeModal}>no sound</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
