"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const socials = [
    { name: "Instagram", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>, link: "https://www.instagram.com/vdpes.official/" },
    { name: "YouTube", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 5.8 3.5 4.8 4.8 4.8h14.4c1.3 0 2.3 1 2.3 2.3v9.8c0 1.3-1 2.3-2.3 2.3H4.8c-1.3 0-2.3-1-2.3-2.3V7.1z" /><path d="m9.5 15.5 6-3.5-6-3.5v7z" /></svg>, link: "https://www.youtube.com/@vdpes_official" },
    {
        name: "Facebook", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>, link: "https://www.facebook.com/profile.php?id=61575354415543"
    },
];

export default function About() {
    return (
        <section id="about" className="about-section">
            <style>{`
                .about-section {
                    background: #000;
                    padding: 100px 24px;
                    display: flex;
                    justify-content: center;
                    font-family: var(--font-mont), system-ui, sans-serif;
                    position: relative;
                }
                .about-wrapper {
                    max-width: 1200px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 6fr 4fr;
                    gap: 60px;
                    align-items: center;
                }
                .about-content {
                    display: flex;
                    flex-direction: column;
                }
                .about-label {
                    color: rgba(255,255,255,0.4);
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 12px;
                }
                .about-title {
                    font-family: var(--font-syne), sans-serif;
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 400;
                    color: #fff;
                    margin: 0 0 24px 0;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                }
                .about-desc {
                    color: rgba(255,255,255,0.7);
                    font-size: 1.1rem;
                    line-height: 1.8;
                    margin: 0 0 40px 0;
                    max-width: 95%;
                    text-align: justify;
    hyphens: auto;
                }
                .about-desc-mobile {
                    display: none;
                    color: rgba(255,255,255,0.7);
                    font-size: 1.1rem;
                    line-height: 1.8;
                    margin: 0 0 40px 0;
                    max-width: 95%;
                    text-align: justify;
    hyphens: auto;
                }
                .social-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    margin-bottom: 24px;
                }
                .social-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 100px;
                    color: rgba(255,255,255,0.85);
                    font-size: 0.9rem;
                    font-weight: 500;
                    background: rgba(255,255,255,0.03);
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .social-pill:hover {
                    border-color: rgba(255,255,255,0.4);
                    background: rgba(255,255,255,0.08);
                    color: #fff;
                    transform: translateY(-2px);
                }
                .about-image-wrapper {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 4/5;
                    border-radius: 20px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.08);
                    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                }
                .about-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(100%) contrast(1.1);
                    transition: filter 0.4s ease, transform 0.6s ease;
                }
                .about-image-wrapper:hover .about-image {
                    filter: grayscale(0%) contrast(1.1);
                }
                .about-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
                }

                /* Tablet — hide image, single column */
                @media (max-width: 968px) {
                    .about-wrapper {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .about-image-wrapper {
                        display: none;
                    }
                    .about-content {
                        align-items: center;
                        text-align: center;
                    }
                    .about-desc {
                        max-width: 100%;
                    }
                    .social-grid {
                        justify-content: center;
                    }
                }

                /* Mobile — swap to shorter paragraph */
                @media (max-width: 768px) {
                    .about-desc {
                        display: none;
                    }
                    .about-desc-mobile {
                        display: block;
                    }
                }
            `}</style>

            <div className="about-wrapper">
                <div className="about-content">
                    <h2 className="about-title">About</h2>
                    <p className="about-desc">
                        {/* Desktop & Tablet paragraph */}
                        Meet <strong>VD Patil</strong> founder and CEO of <strong>VDPES</strong>, a visionary dedicated to <strong>business growth</strong> and professional success. He doesn't just coach; he <strong>guides</strong> entrepreneurs and leaders who refuse to stay average. Over the last decade, his philosophy has joined <strong>smart business strategy</strong> with clear life goals, creating a trusted standard of excellence that is both practical and measurable. By removing <strong>internal bottlenecks</strong> and building strong mental frameworks, he empowers leaders to cross traditional growth limits. His mission is <strong>Health, Wealth and Happiness</strong>, ensuring that every decision made is a calculated step toward <strong>global impact</strong> and long-term legacy.
                    </p>

                    {/* Mobile-only shorter paragraph */}
                    <p className="about-desc-mobile">
                        Meet <strong>VD Patil</strong> founder and CEO of <strong>VDPES</strong>, dedicated to <strong>business growth</strong> and success. He doesn't just coach; he <strong>guides</strong> entrepreneurs who refuse to settle. His philosophy joins <strong>smart business strategy</strong> with clear life goals, empowering leaders toward <strong>Health, Wealth and Happiness</strong> with lasting legacy.
                    </p>

                    <div className="social-grid">
                        {socials.map((s, i) => (
                            <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className="social-pill">
                                {s.icon} {s.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="about-image-wrapper">
                    <Image
                        src="/coach-hero.png"
                        alt="VD Patil"
                        className="about-image"
                        width={800}
                        height={1000}
                        priority
                    />
                    <div className="about-image-overlay"></div>
                    <div className="absolute bottom-6 right-6">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-lg transition-transform hover:scale-110">
                            <ArrowUpRight size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}