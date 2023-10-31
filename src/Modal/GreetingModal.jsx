import React, { useState } from 'react';
import '../styles/GreetingsModal.css';
import Close from '../Assets/close.png';


function ContactModal({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);


    const closeModal = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <div className={`greetings-modal ${isOpen ? 'active' : ''}`}>
            <div className="greetings-content">
                <button onClick={closeModal}>
                    <img src={Close} alt='close-btn' width={20} height={20} />
                </button>
                <div className='header'>
                    <h4>Greetings </h4>
                </div>
            </div>
        </div>
    );
}

export default ContactModal;
