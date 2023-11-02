import React, { useState, useEffect } from 'react';
import '../styles/ContactModal.css';
import Close from '../Assets/close.png';
import Whatsapp from '../Assets/whatsapp.png';

function ContactModal({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);


    const closeModal = () => {
        setIsOpen(false);
        onClose();
    };

    const openFazli = () => {
     
        window.location.href = 'https://wa.link/oaldv5';
    }

    const openHasnah = () => {
     
        window.location.href = 'https://wa.link/2of6tv';
    }
    
    const openNafiisa = () => {
     
        window.location.href = 'https://wa.link/3yyzec';
    }

    const openNasir = () => {
     
        window.location.href = 'https://wa.link/mg29mq';
    }

    return (
        <div className={`contact-modal ${isOpen ? 'active' : ''}`}>
            <div className="contact-content">
                <button onClick={closeModal}>
                    <img src={Close} alt='close-btn' width={20} height={20} />
                </button>
                <div className='header'>
                    <h4>Contact</h4>
                </div>
                <div className='contact-container'>
                    <span>Fazli</span>
                    <div className='image-container'>
                        <img src={Whatsapp} alt='whatsapp-icon' width={30} onClick={openFazli} />
                    </div>
                    <br/>
                    <span>Hasnah</span>
                    <div className='image-container'>
                        <img src={Whatsapp} alt='whatsapp-icon' width={30} onClick={openHasnah} />
                    </div>
                    <br />
                    <span>Nasir</span>
                    <div className='image-container'>
                        <img src={Whatsapp} alt='whatsapp-icon' width={30} onClick={openNasir}/>
                    </div>
                    <br />
                    <span>Nafiisah</span>
                    <div className='image-container'>
                        <img src={Whatsapp} alt='whatsapp-icon' width={30} onClick={openNafiisa} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ContactModal;
