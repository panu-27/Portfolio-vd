'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const INQUIRY_OPTIONS = [
    "General Inquiry",
    "Speaking Engagements",
    "Business Consulting",
    "Mentorship"
];

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        message: ""
    });

    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", { ...formData, type: selectedOption });
        alert("Your message has been sent successfully.");
    };

    return (
        <section id="contact-form" className="cf-container">
            <style>{`
                .cf-container {
                    background-color: #000;
                    padding: 40px 20px; /* Reduced vertical padding */
                    display: flex;
                    justify-content: center;
                    font-family: 'Montserrat', system-ui, sans-serif;
                }
                .cf-wrapper {
                    max-width: 700px; /* Slimmer max-width */
                    width: 100%;
                    background: #050505;
                    border: 1px solid rgba(255,255,255,0.05);
                    border-radius: 20px;
                    padding: 32px 32px; /* Compact padding */
                    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                }
                .cf-title {
                    font-family: 'Syne', sans-serif;
                    font-size: 2rem; /* Scaled down title */
                    font-weight: 400;
                    color: #fff;
                    margin: 0 0 8px 0;
                    text-align: center;
                    letter-spacing: -0.02em;
                }
                .cf-subtitle {
                    color: rgba(255,255,255,0.4);
                    text-align: center;
                    font-size: 0.9rem;
                    margin-bottom: 32px; /* Tighter spacing */
                }
                .cf-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px; /* Reduced gap */
                    margin-bottom: 16px;
                }
                .cf-field-group {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .cf-full {
                    grid-column: 1 / -1;
                }
                .cf-label {
                    color: rgba(255,255,255,0.5);
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .cf-input {
                    background: #0a0a0a;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 10px;
                    padding: 12px 14px; /* Slimmer inputs */
                    color: #fff;
                    font-size: 0.95rem;
                    font-family: inherit;
                    width: 100%;
                    box-sizing: border-box;
                    transition: border-color 0.2s;
                }
                .cf-input:focus {
                    outline: none;
                    border-color: rgba(255,255,255,0.3);
                }
                
                /* Fixed Size Message Box */
                textarea.cf-input {
                    resize: none; /* Disables manual resizing */
                    height: 100px; /* Fixed height */
                    min-height: 100px;
                    max-height: 100px;
                }
                
                .cf-dropdown {
                    position: relative;
                    width: 100%;
                }
                .cf-dropdown-header {
                    background: #0a0a0a;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 10px;
                    padding: 12px 14px;
                    color: #fff;
                    font-size: 0.95rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                }
                .cf-dropdown-header.placeholder {
                    color: rgba(255,255,255,0.2);
                }
                .cf-dropdown-list {
                    position: absolute;
                    top: calc(100% + 4px);
                    left: 0;
                    right: 0;
                    background: #111;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 10px;
                    overflow: hidden;
                    z-index: 10;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.8);
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-5px);
                    transition: all 0.2s ease;
                }
                .cf-dropdown.open .cf-dropdown-list {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                .cf-dropdown-item {
                    padding: 12px 14px;
                    color: rgba(255,255,255,0.7);
                    cursor: pointer;
                    font-size: 0.9rem;
                    transition: background 0.2s;
                }
                .cf-dropdown-item:hover {
                    background: #1a1a1a;
                    color: #fff;
                }
                
                .cf-submit {
                    background: #fff;
                    color: #000;
                    width: 100%;
                    padding: 14px;
                    border-radius: 10px;
                    border: none;
                    font-weight: 700;
                    font-size: 1rem;
                    cursor: pointer;
                    margin-top: 8px;
                    transition: opacity 0.2s;
                }
                .cf-submit:hover {
                    opacity: 0.9;
                }

                @media (max-width: 600px) {
                    .cf-grid { grid-template-columns: 1fr; }
                    .cf-wrapper { padding: 24px; }
                }
            `}</style>

            <div className="cf-wrapper">
                <h2 className="cf-title">Contact</h2>
                <div className="cf-subtitle">Let's build something extraordinary together.</div>

                <form onSubmit={handleSubmit}>
                    <div className="cf-grid">
                        <div className="cf-field-group">
                            <label className="cf-label">Full Name</label>
                            <input type="text" name="name" className="cf-input" placeholder="Name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="cf-field-group">
                            <label className="cf-label">Mobile</label>
                            <input type="tel" name="mobile" className="cf-input" placeholder="Phone" value={formData.mobile} onChange={handleChange} required />
                        </div>

                        <div className="cf-field-group">
                            <label className="cf-label">Email</label>
                            <input type="email" name="email" className="cf-input" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        </div>

                        <div className="cf-field-group" ref={dropdownRef}>
                            <label className="cf-label">Inquiry</label>
                            <div className={`cf-dropdown ${isOpen ? 'open' : ''}`}>
                                <div
                                    className={`cf-dropdown-header ${!selectedOption ? 'placeholder' : ''}`}
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {selectedOption || "Select Type"}
                                    <ChevronDown size={16} />
                                </div>
                                <div className="cf-dropdown-list">
                                    {INQUIRY_OPTIONS.map((option, idx) => (
                                        <div
                                            key={idx}
                                            className="cf-dropdown-item"
                                            onClick={() => handleOptionClick(option)}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="cf-field-group cf-full">
                            <label className="cf-label">Message</label>
                            <textarea name="message" className="cf-input" placeholder="Details..." value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                    </div>

                    <button type="submit" className="cf-submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}