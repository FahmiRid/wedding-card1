
import React, { useState, useEffect } from 'react';
import '../styles/Modal.css'
import Close from '../Assets/close.png';
import SoundFile from '../Assets/thousand.mp3';


function Modal({ onClose }) {
    const [isModalOpen, setIsModalOpen] = useState(true);


    useEffect(() => {
        // When the component is mounted, add a small delay to show the modal with animation.
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 100);

        // Clear the timeout when the component unmounts to prevent a memory leak.
        return () => clearTimeout(timer);
    }, []);

    const playSound = () => {
        setIsModalOpen(false); // Close the modal with animation
        setTimeout(() => {
          onClose(); // Remove the modal
        }, 300); // Adjust the timing to match the CSS transition duration
    
        const audio = new Audio(SoundFile); // Create an audio element
        audio.play(); // Play the audio
      };
    const closeModal = () => {
        // Set isModalOpen to false to trigger the closing animation.
        setIsModalOpen(false);
        // Wait for the animation to finish before actually closing the modal.
        setTimeout(() => onClose(), 500); // You can adjust the timing to match the CSS transition duration.
    };
    return (
        <div className={`modal ${isModalOpen ? "active" : ""}`}>
            <div className={`modal-content ${isModalOpen ? "active" : ""}`}>
                <button onClick={closeModal}>
                    <img src={Close} alt='close-btn' width={20} height={20} />
                </button>
                <div className='header-modal'>
                    <span>Walimatus Urus</span>
                </div>
                <div className='bride-men'>
                    <span>Fazli</span>
                </div>
                <div className='bride-and'>
                    <span>&</span>
                </div>
                <div className='bride-girl'>
                    <span>Nurul</span>
                </div>
                <br></br>
                <div className='btn-sound'>
                    <button className='play-sound' onClick={playSound}>Play Sound</button>
                    <button className='no-sound' onClick={closeModal}>no sound</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
