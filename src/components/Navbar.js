"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Consultancy", href: "#consultancy" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        .nb-shell {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          z-index: 100;
          box-sizing: border-box;
          padding: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .nb-bar {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #1a1a1a;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 0 20px;
          height: 72px; 
          box-sizing: border-box;
          transition: background 0.4s;
        }
        .nb-bar.scrolled {
          background: rgba(10,10,10,0.97);
          backdrop-filter: blur(20px);
        }
        .nb-bar.menu-open {
          background: #000;
        }

        .nb-brand {
          display: flex;
          align-items: center;
          gap: 16px; 
          text-decoration: none;
          flex-shrink: 0;
          transition: opacity 0.2s;
        }
        
        @media (min-width: 1024px) {
          .nb-brand { padding-left: 24px; }
        }

        .nb-brand:hover { opacity: 0.75; }

        .nb-logo-img {
          height: 42px;
          width: auto;
          object-fit: contain;
          border-radius: 4px;
        }

        .nb-brand-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .nb-logo-title {
          font-weight: 900;
          font-size: 2.2rem;
          letter-spacing: 0.04em;
          color: #fff;
          line-height: 0.9;
        }

        .nb-tagline {
          font-size: 0.75rem;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          margin-top: 4px;
          letter-spacing: 0.02em;
        }

        .nb-right {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        .nb-nav-pill {
          display: flex;
          align-items: center;
          gap: 4px;
          background: #0a0a0a; 
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 6px 8px;
        }

        .nb-link {
          position: relative;
          padding: 8px 20px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          border-radius: 999px;
          border: 1px solid transparent;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nb-link:hover { color: #fff; }
        .nb-link.active {
          color: #fff;
          border-color: rgba(255,255,255,0.35);
        }

        .nb-link-bg {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          z-index: -1;
        }

        .nb-action-pill {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #0a0a0a; 
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 6px 6px 6px 20px;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .nb-action-pill:hover {
          border-color: rgba(255,255,255,0.2);
          background: #111;
        }

        .nb-shop {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #fff;
          white-space: nowrap;
        }

        .nb-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #222;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .nb-icon-btn:hover { background: #333; }

        .nb-icon-btn-show { display: flex; }
        @media (max-width: 900px) {
          .nb-icon-btn-show { display: none; }
        }

        .nb-icon-btn-hide { display: none; }
        @media (max-width: 900px) {
          .nb-icon-btn-hide { display: flex; }
        }

        /* ── FULL PAGE DROPDOWN ── */
        .nb-mobile-overlay {
          position: fixed;
          top: 72px;
          left: 0; right: 0;
          bottom: 0;
          height: calc(100vh - 72px);
          background: #000;
          z-index: 99;
          padding: 32px 28px 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow-y: auto;
        }

        .nb-mobile-link {
          display: block;
          font-size: 1.25rem;
          font-weight: 500;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: color 0.2s;
        }
        .nb-mobile-link.active { color: #fff; }
        .nb-mobile-link:hover  { color: rgba(255,255,255,0.8); }

        .nb-mobile-cta {
          margin-top: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          color: #000;
          border-radius: 999px;
          padding: 14px 14px 14px 28px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          transition: opacity 0.2s;
        }
        .nb-mobile-cta:hover { opacity: 0.85; }

        .nb-mobile-cta-icon {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: #000;
          border: 1px solid rgba(0,0,0,0.15);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .nb-nav-pill   { display: none; }
          .nb-action-pill { display: none; }
        }
      `}</style>

      <div className="nb-shell">
        <nav className={`nb-bar${scrolled ? " scrolled" : ""}${isOpen ? " menu-open" : ""}`}>

          <Link href="#home" className="nb-brand">
            {/* <img src="/logo.png" alt="VD Patil Logo" className="nb-logo-img" />
            <div className="nb-brand-text">
              <span className="nb-logo-title">VD PATIL</span>
            </div> */}
          </Link>

          <div className="nb-right">

            <div className="nb-nav-pill">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nb-link${active === item.name ? " active" : ""}`}
                  onClick={() => setActive(item.name)}
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {active === item.name && (
                    <motion.div
                      layoutId="nb-active-pill"
                      className="nb-link-bg"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {hovered === item.name && active !== item.name && (
                    <motion.div
                      className="nb-link-bg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    />
                  )}
                  {item.name}
                </Link>
              ))}
            </div>

            <Link href="https://vdpes.com/" target="_blank" className="nb-action-pill">
              <span className="nb-shop">VD PATIL EDUCATION SYSTEM</span>
              <div className="nb-icon-btn">
                <ArrowUpRight size={16} color="#fff" strokeWidth={2.5} style={{ marginLeft: 1, marginBottom: 1 }} />
              </div>
            </Link>

            <button className="nb-icon-btn-show nb-icon-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={16} color="#fff" strokeWidth={2.5} /> : <Menu size={16} color="#fff" strokeWidth={2.5} />}
            </button>
            <button className="nb-icon-btn-hide nb-icon-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={16} color="#fff" strokeWidth={2.5} /> : <Menu size={16} color="#fff" strokeWidth={2.5} />}
            </button>

          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="nb-mobile-overlay"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              {[...navItems].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`nb-mobile-link${active === item.name ? " active" : ""}`}
                    onClick={() => { setActive(item.name); setIsOpen(false); }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
              >
                <Link href="https://vdpes.com/" target="_blank" className="nb-mobile-cta" onClick={() => setIsOpen(false)}>
                  <span>Visit VD PATIL Education System</span>
                  <span className="nb-mobile-cta-icon">
                    <ArrowUpRight size={16} color="#fff" strokeWidth={2.5} style={{ marginLeft: 1, marginBottom: 1 }} />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}