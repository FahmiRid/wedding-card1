import React, { useState, useEffect } from 'react';
import '../styles/Modal.css';
import Close from '../Assets/close.png';
import SoundFile from '../Assets/thousand.mp3';
import { motion } from 'framer-motion';

function Modal({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const playSound = () => {
        setIsOpen(false);
        setTimeout(() => {
            onClose();
        }, 300);

        const audio = new Audio(SoundFile);
        audio.play();
    };

    return (
        <div className={`reminder-modal ${isOpen ? 'active' : ''}`}>
            <motion.div
                className={`reminder-modal ${isOpen ? 'active' : ''}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
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
                        <button className='no-sound' onClick={closeModal}>No Sound</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Modal;
