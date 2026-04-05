'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const INQUIRY_OPTIONS = [
    "General Inquiry",
    "Speaking Engagements",
    "Business Consulting",
    "Mentorship"
];

const CONTACT_DETAILS = [
    {
        icon: <MapPin size={18} />,
        label: "Office Address",
        value: "VD Patil Education System,\nPune, Maharashtra, India",
        link: "https://maps.google.com/?q=Pune,Maharashtra,India",
        linkLabel: "Get Directions"
    },
    {
        icon: <Mail size={18} />,
        label: "Email",
        value: "contact@vdpatil.com",
        link: "mailto:contact@vdpatil.com",
        linkLabel: "Send Email"
    }
];

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [formData, setFormData] = useState({ name: "", mobile: "", email: "", message: "" });
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleOptionClick = (option) => { setSelectedOption(option); setIsOpen(false); };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been sent successfully.");
    };

    return (
        <section id="contact-form" className="cf-container">
            <style>{`
                .cf-container {
                    background: #000;
                    padding: 80px 24px;
                    display: flex;
                    justify-content: center;
                    font-family: 'Montserrat', system-ui, sans-serif;
                    border-top: 1px solid rgba(255,255,255,0.05);
                }

                /* ── OUTER WRAPPER ── */
                .cf-outer {
                    max-width: 1200px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 5fr 6fr;
                    gap: 48px;
                    align-items: start;
                }

                /* ── LEFT: CONTACT INFO ── */
                .cf-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .cf-info-eyebrow {
                    font-size: 0.72rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255,255,255,0.35);
                    margin-bottom: 16px;
                }

                .cf-info-title {
                    font-family: 'Syne', sans-serif;
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 400;
                    color: #fff;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                    margin-bottom: 12px;
                }

                .cf-info-desc {
                    color: rgba(255,255,255,0.45);
                    font-size: 0.95rem;
                    line-height: 1.7;
                    margin-bottom: 48px;
                }

                .cf-detail-card {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }

                .cf-detail-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                    padding: 24px 0;
                    border-bottom: 1px solid rgba(255,255,255,0.06);
                    transition: background 0.2s;
                }

                .cf-detail-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: rgba(255,255,255,0.5);
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .cf-detail-body {
                    flex: 1;
                }

                .cf-detail-label {
                    font-size: 0.68rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: rgba(255,255,255,0.3);
                    margin-bottom: 4px;
                }

                .cf-detail-value {
                    color: rgba(255,255,255,0.85);
                    font-size: 0.95rem;
                    font-weight: 500;
                    line-height: 1.5;
                    white-space: pre-line;
                    margin-bottom: 8px;
                }

                .cf-detail-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    color: rgba(255,255,255,0.35);
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .cf-detail-link:hover { color: #fff; }

                /* Embedded Map */
                .cf-map {
                    margin-top: 32px;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.06);
                    height: 200px;
                    position: relative;
                    background: #0a0a0a;
                }

                .cf-map iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                    filter: grayscale(100%) invert(90%) contrast(0.85);
                    opacity: 0.8;
                }

                /* ── RIGHT: FORM ── */
                .cf-wrapper {
                    background: #050505;
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 20px;
                    padding: 36px;
                    box-shadow: 0 16px 40px rgba(0,0,0,0.4);
                }

                .cf-title {
                    font-family: 'Syne', sans-serif;
                    font-size: 1.6rem;
                    font-weight: 400;
                    color: #fff;
                    margin: 0 0 6px 0;
                    letter-spacing: -0.02em;
                }

                .cf-subtitle {
                    color: rgba(255,255,255,0.35);
                    font-size: 0.85rem;
                    margin-bottom: 28px;
                }

                .cf-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 14px;
                    margin-bottom: 14px;
                }

                .cf-field-group { display: flex; flex-direction: column; gap: 6px; }
                .cf-full { grid-column: 1 / -1; }

                .cf-label {
                    color: rgba(255,255,255,0.4);
                    font-size: 0.7rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }

                .cf-input {
                    background: #0a0a0a;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 10px;
                    padding: 12px 14px;
                    color: #fff;
                    font-size: 0.9rem;
                    font-family: inherit;
                    width: 100%;
                    box-sizing: border-box;
                    transition: border-color 0.2s;
                }
                .cf-input:focus { outline: none; border-color: rgba(255,255,255,0.25); }
                textarea.cf-input { resize: none; height: 100px; min-height: 100px; max-height: 100px; }

                .cf-dropdown { position: relative; width: 100%; }
                .cf-dropdown-header {
                    background: #0a0a0a;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 10px;
                    padding: 12px 14px;
                    color: #fff;
                    font-size: 0.9rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    transition: border-color 0.2s;
                }
                .cf-dropdown-header:hover { border-color: rgba(255,255,255,0.25); }
                .cf-dropdown-header.placeholder { color: rgba(255,255,255,0.2); }
                .cf-dropdown-list {
                    position: absolute;
                    top: calc(100% + 4px);
                    left: 0; right: 0;
                    background: #111;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 10px;
                    overflow: hidden;
                    z-index: 10;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.8);
                    opacity: 0; visibility: hidden; transform: translateY(-5px);
                    transition: all 0.2s ease;
                }
                .cf-dropdown.open .cf-dropdown-list { opacity: 1; visibility: visible; transform: translateY(0); }
                .cf-dropdown-item {
                    padding: 11px 14px;
                    color: rgba(255,255,255,0.65);
                    cursor: pointer;
                    font-size: 0.88rem;
                    transition: background 0.2s;
                }
                .cf-dropdown-item:hover { background: #1a1a1a; color: #fff; }

                .cf-submit {
                    background: #fff;
                    color: #000;
                    width: 100%;
                    padding: 14px;
                    border-radius: 10px;
                    border: none;
                    font-weight: 700;
                    font-size: 0.95rem;
                    font-family: inherit;
                    cursor: pointer;
                    margin-top: 6px;
                    transition: opacity 0.2s, transform 0.2s;
                }
                .cf-submit:hover { opacity: 0.88; transform: translateY(-1px); }

                /* ── RESPONSIVE ── */
                @media (max-width: 960px) {
                    .cf-outer { grid-template-columns: 1fr; gap: 48px; }
                    .cf-info-title { font-size: 2rem; }
                    .cf-map { height: 180px; }
                }

                @media (max-width: 600px) {
                    .cf-container { padding: 60px 16px; }
                    .cf-grid { grid-template-columns: 1fr; }
                    .cf-wrapper { padding: 24px; }
                    .cf-map { height: 160px; }
                }
            `}</style>

            <div className="cf-outer">

                {/* ── LEFT: Info ── */}
                <div className="cf-info">
                    <div className="cf-info-eyebrow">Get in Touch</div>
                    <h2 className="cf-info-title">Let's Start a<br />Conversation</h2>
                    <p className="cf-info-desc">
                        Reach out for speaking engagements, business consulting, mentorship, or any general inquiry. We respond within 24 hours.
                    </p>

                    <div className="cf-detail-card">
                        {CONTACT_DETAILS.map((item, i) => (
                            <div key={i} className="cf-detail-item">
                                <div className="cf-detail-icon">{item.icon}</div>
                                <div className="cf-detail-body">
                                    <div className="cf-detail-label">{item.label}</div>
                                    <div className="cf-detail-value">{item.value}</div>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="cf-detail-link">
                                        {item.linkLabel} <ArrowUpRight size={11} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>

                {/* ── RIGHT: Form ── */}
                <div className="cf-wrapper">
                    <h3 className="cf-title">Send a Message</h3>
                    <div className="cf-subtitle">Fill in the details and we'll get back to you.</div>

                    <form onSubmit={handleSubmit}>
                        <div className="cf-grid">
                            <div className="cf-field-group">
                                <label className="cf-label">Full Name</label>
                                <input type="text" name="name" className="cf-input" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="cf-field-group">
                                <label className="cf-label">Mobile</label>
                                <input type="tel" name="mobile" className="cf-input" placeholder="+91 00000 00000" value={formData.mobile} onChange={handleChange} required />
                            </div>
                            <div className="cf-field-group">
                                <label className="cf-label">Email</label>
                                <input type="email" name="email" className="cf-input" placeholder="you@email.com" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="cf-field-group" ref={dropdownRef}>
                                <label className="cf-label">Inquiry Type</label>
                                <div className={`cf-dropdown ${isOpen ? 'open' : ''}`}>
                                    <div className={`cf-dropdown-header ${!selectedOption ? 'placeholder' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                                        {selectedOption || "Select Type"}
                                        <ChevronDown size={15} />
                                    </div>
                                    <div className="cf-dropdown-list">
                                        {INQUIRY_OPTIONS.map((option, idx) => (
                                            <div key={idx} className="cf-dropdown-item" onClick={() => handleOptionClick(option)}>{option}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="cf-field-group cf-full">
                                <label className="cf-label">Message</label>
                                <textarea name="message" className="cf-input" placeholder="How can we help you?" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                        </div>
                        <button type="submit" className="cf-submit">Send Message</button>
                    </form>
                </div>

            </div>
        </section>
    );
}