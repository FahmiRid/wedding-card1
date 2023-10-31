import React, { useState, useEffect } from 'react';
import '../styles/GreetingsModal.css';
import Close from '../Assets/close.png';
import { createClient } from '@supabase/supabase-js';



const supabaseUrl = 'https://jasoibiowxdceftgeqhm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imphc29pYmlvd3hkY2VmdGdlcWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3ODQxNjMsImV4cCI6MjAxNDM2MDE2M30.2CCr7Xm_2Gz5TzggpIvqlk6qStmoV2jFuHT0-cpuDcI';
const supabase = createClient(supabaseUrl, supabaseKey);

function GreetingModal({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);
    const [formData, setFormData] = useState([]);
    const closeModal = () => {
        setIsOpen(false);
        onClose();
    };
    useEffect(() => {
        // Fetch data from your Supabase table
        const fetchData = async () => {
            const { data, error } = await supabase.from('greetings').select('*');
            if (data) {
                setFormData(data);
            } else if (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const description = event.target.description.value;

        // Insert the form data into your Supabase table
        const { data, error } = await supabase.from('greetings').upsert([
            {
                name,
                description,
            },
        ]);

        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Data inserted successfully:', data);
        }

        // Reset the form fields
        event.target.reset();
    };

    return (
        <div className={`greetings-modal ${isOpen ? 'active' : ''}`}>
            <div className="greetings-content">
                <button onClick={closeModal}>
                    <img src={Close} alt="close-btn" width={20} height={20} />
                </button>
                <div className="header">
                    <h4>Greetings</h4>
                </div>
                <div className="data-list">
                    <h5>Submitted Data:</h5>
                    <ul>
                        {formData.map((item) => (
                            <li key={item.id}>
                                <label>Name:</label> <label>{item.name}</label>, <label>Description:</label> <label>{item.description}</label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" />
                        </div>
                        <div className="textarea-group">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="description" rows="4" placeholder="Enter your description here"></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default GreetingModal;
