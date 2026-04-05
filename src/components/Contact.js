// contact.js
"use client";
import React from "react";
import Footer from "./Footer";

export default function Contact() {
   return (
      <div
         className="bg-black text-white selection:bg-white selection:text-black"
         style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
         {/* ── Font Import ── */}
         <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;700;800;900&display=swap');
        .faq-item:hover .faq-arrow-circle {
          background: #fff !important;
          border-color: #fff !important;
        }
        .faq-item:hover .faq-arrow-circle svg {
          color: #000 !important;
        }
        .faq-item:hover {
          background: #111 !important;
          border-color: rgba(255,255,255,0.25) !important;
        }
        .nav-link:hover { color: #fff !important; }
      `}</style>

         <div id="contact">

         {/* ══════════════════════════════════════
          FOOTER SECTION
      ══════════════════════════════════════ */}
         <Footer />
         </div>
      </div>
   );
}