import React, { useState, useEffect } from 'react';
import '../styles/ContactModal.css';
import Close from '../Assets/close.png';
import Whatsapp from '../Assets/whatsapp.png';
import { motion } from 'framer-motion';

function ContactModal({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        // When the component is mounted, add a small delay to show the modal with animation.
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 100);

        // Clear the timeout when the component unmounts to prevent a memory leak.
        return () => clearTimeout(timer);
    }, []);


    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => {
            onClose(); 
        }, 300);
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
            </motion.div>
        </div>
    );
}

export default ContactModal;
