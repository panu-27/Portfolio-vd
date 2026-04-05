'use client';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function JoinCommunity() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section className="jc-section">
            <style>{`
                .jc-section {
                    background: #000;
                    padding: 100px 24px;
                    display: flex;
                    justify-content: center;
                    font-family: 'Montserrat', system-ui, sans-serif;
                    border-top: 1px solid rgba(255,255,255,0.05);
                    position: relative;
                    overflow: hidden;
                }

                /* Subtle radial glow */
                .jc-section::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 600px;
                    height: 300px;
                    background: radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%);
                    pointer-events: none;
                }

                .jc-wrapper {
                    max-width: 700px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    position: relative;
                    z-index: 1;
                }

                .jc-eyebrow {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255,255,255,0.35);
                    margin-bottom: 20px;
                }

                .jc-title {
                    font-family: 'Syne', sans-serif;
                    font-size: clamp(2rem, 5vw, 3.5rem);
                    font-weight: 400;
                    color: #fff;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                    margin-bottom: 20px;
                }

                .jc-title span {
                    opacity: 0.3;
                }

                .jc-desc {
                    color: rgba(255,255,255,0.5);
                    font-size: 1rem;
                    line-height: 1.7;
                    margin-bottom: 48px;
                    max-width: 500px;
                }

                .jc-form {
                    display: flex;
                    width: 100%;
                    max-width: 520px;
                    gap: 0;
                    background: #0a0a0a;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 100px;
                    padding: 6px;
                    transition: border-color 0.3s ease;
                }

                .jc-form:focus-within {
                    border-color: rgba(255,255,255,0.3);
                }

                .jc-input {
                    flex: 1;
                    background: transparent;
                    border: none;
                    outline: none;
                    color: #fff;
                    font-size: 0.9rem;
                    font-family: inherit;
                    padding: 12px 20px;
                }

                .jc-input::placeholder {
                    color: rgba(255,255,255,0.2);
                }

                .jc-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #fff;
                    color: #000;
                    border: none;
                    border-radius: 100px;
                    padding: 12px 24px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    font-family: inherit;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }

                .jc-btn:hover {
                    background: #e8e8e8;
                    transform: scale(1.02);
                }

                .jc-success {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    padding: 24px;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 20px;
                    background: rgba(255,255,255,0.03);
                }

                .jc-success-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                }

                .jc-success-text {
                    color: #fff;
                    font-size: 1rem;
                    font-weight: 600;
                }

                .jc-success-sub {
                    color: rgba(255,255,255,0.4);
                    font-size: 0.85rem;
                }

                .jc-badges {
                    display: flex;
                    gap: 16px;
                    margin-top: 32px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .jc-badge {
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.3);
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .jc-badge::before {
                    content: '✓';
                    color: rgba(255,255,255,0.4);
                    font-size: 0.7rem;
                }

                @media (max-width: 520px) {
                    .jc-form {
                        flex-direction: column;
                        border-radius: 16px;
                        padding: 12px;
                        gap: 8px;
                    }
                    .jc-btn {
                        justify-content: center;
                        border-radius: 12px;
                        padding: 14px;
                    }
                    .jc-input {
                        padding: 10px 12px;
                    }
                }
            `}</style>

            <div className="jc-wrapper">
                <div className="jc-eyebrow">Community</div>

                <h2 className="jc-title">
                    Join the <span>Inner Circle</span>
                </h2>

                <p className="jc-desc">
                    Be the first to know about upcoming events, masterclasses, and exclusive seminars hosted by VD Patil. No noise — only high-signal updates.
                </p>

                {!submitted ? (
                    <form className="jc-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            className="jc-input"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="jc-btn">
                            Notify Me <ArrowRight size={14} />
                        </button>
                    </form>
                ) : (
                    <div className="jc-success">
                        <div className="jc-success-icon">✦</div>
                        <div className="jc-success-text">You're in.</div>
                        <div className="jc-success-sub">We'll notify you about upcoming events from VD Patil.</div>
                    </div>
                )}

                <div className="jc-badges">
                    <span className="jc-badge">No spam, ever</span>
                    <span className="jc-badge">Unsubscribe anytime</span>
                    <span className="jc-badge">Event-only updates</span>
                </div>
            </div>
        </section>
    );
}
