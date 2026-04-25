"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const imgRef = useRef(null);

  const HERO_IMG = "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&auto=format&fit=crop";
  const VIDEO_SRC = "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4";

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!imageLoaded) return;
    const timer = setTimeout(() => setShowVideo(true), 5000);
    return () => clearTimeout(timer);
  }, [imageLoaded]);

  return (
    <>
      <style>{`
        
        .hero-viewport {
          margin-top: 70px;
          height: 90vh;
          width: 100%;
          background: #000;
          position: relative;
          overflow: hidden;
          font-family: var(--font-mont), sans-serif;
        }

        .yt-loader {
          position: absolute;
          inset: 0;
          background: #0a0a0a;
          overflow: hidden;
        }
        .yt-loader::after {
          content: "";
          position: absolute;
          inset: 0;
          transform: translateX(-100%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent);
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          filter: grayscale(100%) contrast(1.1) brightness(0.6);
          transition: opacity 1.5s ease-in-out;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: opacity 1.5s ease-in-out;
        }

        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%),
                      linear-gradient(to bottom, transparent 60%, #000 100%);
          pointer-events: none;
        }

        /* ── DESKTOP / TABLET (default) ── */
        .bottom-left-ui {
          position: absolute;
          bottom: 70px;
          left: 40px;
          z-index: 50;
        }

        .social-icons {
          display: flex;
          gap: 24px;
          margin-top: 12px;
        }

        .social-icons a {
          color: rgba(255,255,255,0.4);
          transition: color 0.3s ease;
        }
        .social-icons a:hover { color: #fff; }
        .social-icons a svg {
          width: 22px;
          height: 22px;
        }

        .bottom-right-ui {
          position: absolute;
          bottom: 70px;
          right: 40px;
          z-index: 50;
        }

        .event-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 20px;
          border-radius: 12px;
          width: 360px;
          transition: border-color 0.3s ease;
        }
        .event-card:hover {
          border-color: rgba(255,255,255,0.2);
        }

        .ui-label {
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.3);
        }

        /* ── MOBILE FIXES (≤ 640px) ── */
        @media (max-width: 640px) {
          .bottom-left-ui {
            bottom: 16px;
            left: 16px;
          }

          .bottom-right-ui {
            left: 16px;
            right: 16px;
            bottom: 90px;
          }

          .event-card {
            width: 100%;
            box-sizing: border-box;
            padding: 14px 16px;
          }

          .social-icons {
            gap: 18px;
          }
        }
      `}</style>

      <section id="home" className="hero-viewport">
        {!imageLoaded && <div className="yt-loader" />}

        <img
          ref={imgRef}
          src={HERO_IMG}
          alt="Vinayak Dabhade"
          className="hero-image"
          width={600}
          height={400}
          fetchPriority="high"
          style={{ opacity: imageLoaded && !showVideo ? 1 : 0 }}
          onLoad={() => setImageLoaded(true)}
        />

        {showVideo && (
          <video
            className="hero-video"
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            style={{ opacity: showVideo ? 1 : 0 }}
          />
        )}

        <div className="vignette" />

        <div className="absolute top-10 left-10 z-50">
          <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, color: '#fff', fontSize: '1.2rem', letterSpacing: '-0.02em' }} />
        </div>

        {/* BOTTOM LEFT: SOCIALS */}
        <motion.div
          className="bottom-left-ui"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="ui-label">Be part of our journey</p>
          <div className="social-icons">
            {/* Instagram */}
            <a href="https://www.instagram.com/vdpes.official/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            {/* X (Twitter) */}
            <a href="https://www.facebook.com/profile.php?id=61575354415543" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/@vdpes_official" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29.1 29.1 0 0 0 1 12a29.1 29.1 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29.1 29.1 0 0 0 23 12a29.1 29.1 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
            </a>
          </div>
        </motion.div>

        {/* BOTTOM RIGHT: UPCOMING EVENT */}
        <motion.div
          className="bottom-right-ui"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="event-card group cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <p className="ui-label">Upcoming Event</p>
              <ArrowUpRight size={14} className="text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <h4 className="text-white font-semibold leading-tight mb-2" style={{ fontSize: '15px' }}>
              The 10X Visionary Summit
            </h4>
            <div className="flex items-center gap-2 text-white/40 text-[10px] font-medium">
              <Calendar size={12} /> 24th April, 2026
            </div>
          </div>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontSize: '12vw',
            fontWeight: 800,
            color: 'rgba(255,255,255,0.02)',
            textTransform: 'uppercase',
            letterSpacing: '-0.05em'
          }}>
            VD PATIL
          </h2>
        </div>
      </section>
    </>
  );
}