import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <>
            <style>{`
                

                .footer-root {
                    background-color: #000;
                    padding-top: 100px;
                    padding-right: 48px;
                    padding-bottom: 18px;
                    padding-left: 18px;
                    position: relative;
                    overflow: hidden;
                    font-family: var(--font-barlow), 'Arial Black', sans-serif;
                    color: #fff;
                    box-sizing: border-box;
                }

                .footer-arc {
                    position: absolute;
                    border-radius: 50%;
                    border: 1px solid rgba(255,255,255,0.07);
                    pointer-events: none;
                    z-index: 0;
                    transform: translateX(-50%);
                }

                .footer-inner {
                    max-width: 1400px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 10;
                }

                .footer-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 40px;
                    flex-wrap: nowrap;
                }

                .footer-left {
                    flex: 1 1 auto;
                    display: flex;
                    flex-direction: column;
                    min-width: 0;
                }

                .footer-tagline {
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.85);
                    margin: 0 0 14px 0;
                }

                .footer-headline {
                    font-family: var(--font-bebas), var(--font-barlow-cond), 'Arial Black', sans-serif;
                    font-size: clamp(4.5rem, 9vw, 8rem);
                    font-weight: 900;
                    margin: 0 0 32px 0;
                    line-height: 0.9;
                    text-transform: uppercase;
                    letter-spacing: -0.01em;
                    white-space: nowrap;
                }

                .footer-btn {
                    display: inline-flex;
                    align-items: center;
                    background: #fff;
                    border: none;
                    border-radius: 50px;
                    padding: 5px 5px 5px 24px;
                    cursor: pointer;
                    gap: 16px;
                    transition: opacity 0.2s, transform 0.2s;
                    align-self: flex-start;
                    margin-left: clamp(60px, 16vw, 150px);
                }
                .footer-btn:hover { opacity: 0.85; transform: scale(1.02); }

                .footer-btn-label {
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    color: #000;
                    white-space: nowrap;
                }

                .footer-btn-icon {
                    background: #000;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .footer-right {
                    display: flex;
                    gap: 60px;
                    margin-top: 8px;
                    flex-shrink: 0;
                }

                .footer-col-header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 20px;
                }

                .footer-col-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    border: 2px solid rgba(255,255,255,0.8);
                    background: #000;
                    flex-shrink: 0;
                }

                .footer-col-title {
                    margin: 0;
                    font-size: 14px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.07em;
                }

                .footer-col-list-wrap {
                    position: relative;
                    padding-left: 16px;
                }

                .footer-col-line {
                    position: absolute;
                    left: 3px;
                    top: -20px;
                    bottom: 0;
                    border-left: 1.5px dotted rgba(255,255,255,0.35);
                    z-index: 1;
                }

                .footer-col-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .footer-col-item {
                    font-size: 10px;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.72);
                    cursor: pointer;
                    letter-spacing: 0.06em;
                    transition: color 0.15s;
                }
                .footer-col-item:hover { color: #fff; }

                .footer-bottom {
                    margin-top: 56px;
                    padding-top: 18px;
                    border-top: 1px solid rgba(255,255,255,0.25);
                    text-align: center;
                }

                .footer-copy {
                    margin: 0;
                    font-size: 9px;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.75);
                    letter-spacing: 0.12em;
                }

                /* TABLET ≤ 900px — side by side, font small enough to stay on one line */
                @media (max-width: 900px) {
                    .footer-root { padding: 40px 28px 16px; }
                    .footer-top { gap: 20px; }
                    .footer-headline {
                        font-size: 2.6rem;
                        white-space: nowrap;
                        line-height: 0.9;
                    }
                    .footer-btn { margin-left: 0; }
                    .footer-right { gap: 28px; }
                    .footer-col-title { font-size: 11px; }
                    .footer-col-item  { font-size: 8px; }
                }

                /* MOBILE ≤ 600px — stacked, 2-line headline, small font */
                @media (max-width: 600px) {
                    .footer-root { padding: 36px 22px 16px; }
                    .footer-top {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 32px;
                        flex-wrap: wrap;
                    }
                    .footer-left { width: 100%; }
                    .footer-headline {
                        font-size: 2.8rem;
                        white-space: normal;
                        line-height: 1;
                    }
                    .footer-btn { margin-left: 0; }
                    .footer-right { width: 100%; gap: 40px; margin-top: 0; }
                    .footer-col-title { font-size: 13px; }
                    .footer-col-item  { font-size: 10px; }
                    .footer-bottom { margin-top: 36px; }
                }
            `}</style>

            <footer className="footer-root">
                {[700, 1100, 1500].map((size, i) => (
                    <div
                        key={i}
                        className="footer-arc"
                        style={{
                            left: '30%',
                            bottom: `-${size * 0.45}px`,
                            width: `${size}px`,
                            height: `${size}px`,
                        }}
                    />
                ))}

                <div className="footer-inner">
                    <div className="footer-top">

                        <div className="footer-left">
                            <p className="footer-tagline">Ready to unlock your full potential?</p>
                            <h2 className="footer-headline">Let's Grow Together</h2>
                            <button className="footer-btn">
                                <span className="footer-btn-label">Book a Discovery Call</span>
                                <div className="footer-btn-icon">
                                    <ArrowUpRight size={18} color="#fff" strokeWidth={2.5} />
                                </div>
                            </button>
                        </div>

                        <div className="footer-right">
                            <div>
                                <div className="footer-col-header">
                                    <div className="footer-col-dot" />
                                    <h2 className="footer-col-title">Navigation</h2>
                                </div>
                                <div className="footer-col-list-wrap">
                                    <div className="footer-col-line" />
                                    <ul className="footer-col-list">
                                        {['Home', 'About Us', 'Events', 'Blogs', 'VDPES'].map(item => (
                                            <li key={item} className="footer-col-item">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="footer-col-header">
                                    <div className="footer-col-dot" />
                                    <h2 className="footer-col-title">Help</h2>
                                </div>
                                <div className="footer-col-list-wrap">
                                    <div className="footer-col-line" />
                                    <ul className="footer-col-list">
                                        {['Privacy Policy', 'Term & Condition', 'FAQ', 'Contact Us', 'Cookies Policy'].map(item => (
                                            <li key={item} className="footer-col-item">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="footer-copy">@2015-2026 Copyright By VD PATIL EDUCATION SYSTEM All Right Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
}