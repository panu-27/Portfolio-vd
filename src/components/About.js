"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { name: "Instagram", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>, link: "#" },
  { name: "YouTube", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 5.8 3.5 4.8 4.8 4.8h14.4c1.3 0 2.3 1 2.3 2.3v9.8c0 1.3-1 2.3-2.3 2.3H4.8c-1.3 0-2.3-1-2.3-2.3V7.1z" /><path d="m9.5 15.5 6-3.5-6-3.5v7z" /></svg>, link: "#" },
  { name: "X", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, link: "#" },
];

export default function About() {
  return (
    <section className="about-section">
      <style>{`
                .about-section {
                    background: #000;
                    padding: 100px 24px;
                    display: flex;
                    justify-content: center;
                    font-family: 'Montserrat', system-ui, sans-serif;
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
                    font-family: 'Syne', sans-serif;
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
                }
                .about-desc-mobile {
                    display: none;
                    color: rgba(255,255,255,0.7);
                    font-size: 1.1rem;
                    line-height: 1.8;
                    margin: 0 0 40px 0;
                    max-width: 95%;
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
                    transform: scale(1.03);
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

          {/* Desktop & Tablet paragraph */}
          <p className="about-desc">
            Meet VD Patil—a visionary dedicated to the art of high-performance. He doesn't
            just coach; he <strong>re-engineers</strong> the architecture of success for
            entrepreneurs and visionaries who refuse to settle for the status quo. Over the
            last decade, his philosophy has merged strategic business acumen with profound
            life-clarity, creating an elite standard of excellence that is both
            unapologetic and measurable. By dismantling internal bottlenecks and installing
            high-leverage mental frameworks, he empowers leaders to transcend traditional
            growth curves. His mission is to turn raw potential into market dominion,
            ensuring that every decision made is a calculated step toward global impact and
            long-term legacy.
          </p>

          {/* Mobile-only shorter paragraph */}
          <p className="about-desc-mobile">
            Meet VD Patil—a visionary dedicated to the art of high-performance. He doesn't
            just coach; he <strong>re-engineers</strong> the architecture of success for
            entrepreneurs who refuse to settle. His philosophy merges strategic business
            acumen with profound life-clarity, empowering leaders to turn raw potential
            into market dominion and long-term legacy.
          </p>

          <div className="social-grid">
            {socials.map((s, i) => (
              <a key={i} href={s.link} className="social-pill">
                {s.icon} {s.name}
              </a>
            ))}
          </div>
        </div>

        <div className="about-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
            alt="VD Patil"
            className="about-image"
          />
          <div className="about-image-overlay"></div>
          <div className="absolute bottom-6 right-6">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-lg transition-transform hover:scale-110">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}