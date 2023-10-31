// MapModal.jsx
import React, { useState } from 'react';
import '../styles/MapModal.css';
import Close from '../Assets/close.png';
import GoogleMap from '../Assets/google-map.png'
import Waze from '../Assets/waze.png'

function MapModal({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
        onClose();
    };

    const openGoogleMapLink = () => {
     
        window.location.href = 'https://maps.app.goo.gl/6QA2TGnu7KHo8Ped7?g_st=iw';
    }

    const openWazeLink = () => {
     
        window.location.href = 'https://waze.com/ul/hw1p3h6nvj';
    }


    return (
        <div className={`map-modal ${isOpen ? 'active' : ''}`}>
            <div className="map-content">
                <button onClick={closeModal}>
                    <img src={Close} alt='close-btn' width={20} height={20} />
                </button>
                <div className='google-map'>
                    <img src={GoogleMap} alt='close-btn' width={30} height={30} />
                    <div className='google-font'>
                        <span >Google Map</span>
                        {/* <button>Open</button> */}
                        <button class="button" onClick={() => openGoogleMapLink()}>
                            Open
                            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                                <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                </div>
                <div className='google-map'>
                    <img src={Waze} alt='close-btn' width={30} height={30} />
                    <div className='google-font'>
                        <span >Waze</span>
                        {/* <button>Open</button> */}
                        <button class="button" onClick={() => openWazeLink()}>
                            Open
                            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                                <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MapModal;
