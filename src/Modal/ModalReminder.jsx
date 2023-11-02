import React, { useState, useEffect } from 'react';
import '../styles/ReminderModal.css';
import Close from '../Assets/close.png';
import Flower from '../Assets/flower.png'

function ModalReminder({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);
    const targetDate = new Date('11/1/2023'); // Set your specific target date here
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    // Function to calculate the time remaining
    function calculateTimeRemaining() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    // Function to open Google Calendar with the reminder date pre-filled
    function openGoogleCalendar() {
        const startDate = targetDate.toISOString(); // Convert the target date to ISO format
        const endDate = targetDate.toISOString(); // For a reminder, start and end dates can be the same

        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&dates=${startDate}/${endDate}&text=Reminder&details=Your%20reminder%20description`;

        // Open the link in a new tab or window
        window.open(googleCalendarUrl, '_blank');
    }

    useEffect(() => {
        // Update the countdown every second
        const intervalId = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <div className={`reminder-modal ${isOpen ? 'active' : ''}`}>
            <div className="reminder-content">
                <button onClick={closeModal}>
                    <img src={Close} alt='close-btn' width={20} height={20} />
                </button>
                <div className='header'>
                    <h1>Reminder</h1>
                </div>
                <div className="countdown">
                    <p className='count-day'> {timeRemaining.days} days </p>
                    <p className='count-hour'>{timeRemaining.hours} hours </p>
                    <p className='count-minute'>{timeRemaining.minutes} minutes  </p>
                    <p className='count-second'>{timeRemaining.seconds} seconds</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default ModalReminder;
