'use client';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export default function JoinCommunity() {
    return (
        <section className="jc-section">
            <style>{`
                .jc-section {
                    background: #000;
                    padding: 100px 24px;
                    display: flex;
                    justify-content: center;
                    font-family: var(--font-mont), system-ui, sans-serif;
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
                    font-family: var(--font-syne), sans-serif;
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

                .jc-cta-wrapper {
                    display: flex;
                    width: 100%;
                    max-width: 400px;
                    justify-content: center;
                }

                .jc-whatsapp-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    background: #fff;
                    color: #000;
                    text-decoration: none;
                    border-radius: 100px;
                    padding: 18px 36px;
                    font-size: 1rem;
                    font-weight: 700;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    width: 100%;
                    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.05);
                }

                .jc-whatsapp-btn:hover {
                    background: #e8e8e8;
                    transform: translateY(-4px);
                    box-shadow: 0 15px 40px rgba(255, 255, 255, 0.15);
                }

                .jc-whatsapp-btn svg:first-child {
                    color: #25D366; /* WhatsApp Green */
                }

                .jc-badges {
                    display: flex;
                    gap: 20px;
                    margin-top: 48px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .jc-badge {
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.3);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .jc-badge span {
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.2);
                }

                @media (max-width: 520px) {
                    .jc-whatsapp-btn {
                        padding: 16px 24px;
                        font-size: 0.9rem;
                    }
                }
            `}</style>

            <div className="jc-wrapper">

                <h2 className="jc-title">
                    Join the <span>Community</span>
                </h2>

                <p className="jc-desc">
                    Join VD Patil’s private community for business tips,
                    life advice, and team updates. No spam, just value.
                </p>

                <div className="jc-cta-wrapper">
                    <a
                        href="https://wa.me/your_number_here"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="jc-whatsapp-btn"
                    >
                        <MessageCircle size={20} fill="currentColor" />
                        Join WhatsApp Community
                        <ArrowUpRight size={18} style={{ opacity: 0.5 }} />
                    </a>
                </div>

                <div className="jc-badges">
                    <span className="jc-badge"><span />Real-time updates</span>
                    <span className="jc-badge"><span />Exclusive networking</span>
                    <span className="jc-badge"><span />Direct access</span>
                </div>
            </div>
        </section>
    );
}