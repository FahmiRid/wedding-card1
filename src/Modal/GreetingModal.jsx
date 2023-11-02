import React, { useState, useEffect } from "react";
import "../styles/GreetingsModal.css";
import Close from "../Assets/close.png";
import Line from '../Assets/line.png';
import { createClient } from "@supabase/supabase-js";
import { motion } from 'framer-motion';


const supabaseUrl = "https://jasoibiowxdceftgeqhm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imphc29pYmlvd3hkY2VmdGdlcWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3ODQxNjMsImV4cCI6MjAxNDM2MDE2M30.2CCr7Xm_2Gz5TzggpIvqlk6qStmoV2jFuHT0-cpuDcI";
const supabase = createClient(supabaseUrl, supabaseKey);

function GreetingModal({ onClose }) {
  
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState([]);
  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  const fetchData = async () => {
    const { data, error } = await supabase.from("greetings").select("*");
    if (data) {
      setFormData(data);
    } else if (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch data from your Supabase table
    fetchData();
  }, []);
  const handleSubmit = async event => {
    event.preventDefault();

    const name = event.target.name.value;
    const description = event.target.description.value;

    // Insert the form data into your Supabase table
    const { data, error } = await supabase.from("greetings").upsert([
      {
        name,
        description,
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
      fetchData();
    }

    // Reset the form fields
    event.target.reset();
  };

  return (
    <div className={`greetings-modal ${isOpen ? "active" : ""}`}>
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
      <div className="greetings-content">
        <button onClick={closeModal}>
          <img src={Close} alt="close-btn" width={20} height={20} />
        </button>
        <div className="header">
          <h4>Greetings</h4>
        </div>
        <div className="data-list">
          <div className="greeting-card">
            {formData.map(item => (
              <div className="greeting">
                <span>{item.description}</span>
                <p>-{item.name}-</p>
                <p>---------------------------------------------------</p>
              </div>
            ))}
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" id="name" name="name" placeholder="Name" />
            </div>
            <div className="textarea-group">
              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Greetings"
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      </motion.div>
    </div>
  );
}

export default GreetingModal;
