"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ExternalLink, Calendar } from "lucide-react";

const faqs = [
   {
      question: "What is the core philosophy behind the VD Patil Education System (VDPES)?",
      answer: "VDPES is built on the foundation of 'Ethical Leadership & Scalable Excellence.' We provide a structured roadmap for individuals to transition from traditional mindsets to elite entrepreneurial thinking, focusing on financial literacy, team building, and personal mastery.",
      cta: { label: "Explore VDPES", link: "https://vdpes.com/" }
   },
   {
      question: "How do I apply for exclusive 1-on-1 business mentorship with VD Patil?",
      answer: "Direct mentorship is reserved for high-impact leaders ready for a radical shift. The process begins with a Discovery Session to audit your current business model and align your goals with VD Patil's proprietary growth frameworks.",
      cta: { label: "Book Discovery Session", link: "#contact", icon: "calendar" }
   },
   {
      question: "Are your coaching programs designed for individuals or established entrepreneurs?",
      answer: "We offer tailored pathways for both. For individuals, we focus on skill acquisition and mindset; for established entrepreneurs, we focus on system automation, leadership delegation, and exponential scaling.",
   },
   {
      question: "What is the difference between your life coaching and business leadership programs?",
      answer: "Life coaching at our firm isn't just about 'feeling good'—it's about Peak Performance. Business leadership focuses on market dominance and ROI. We believe you cannot have a world-class business with a second-class lifestyle.",
   },
   {
      question: "Is VD Patil available for keynote speaking engagements or live seminars?",
      answer: "Yes, VD Patil frequently delivers high-energy keynotes on leadership, financial psychology, and organizational culture. You can request a media kit or check availability via the inquiry form.",
      cta: { label: "Inquire for Events", link: "#contact" }
   },
   {
      question: "What kind of transformation can I expect after joining your education system?",
      answer: "Our participants report a 40% increase in productivity within the first 90 days and a profound shift in how they manage professional relationships and wealth creation strategies.",
   }
];

export default function ContactFaq() {
   const [selectedFaq, setSelectedFaq] = useState(null);

   return (
      <>
         <style>{`
        
        .faq-section {
          background: #000;
          padding: 80px 48px 96px;
          box-sizing: border-box;
          font-family: var(--font-mont), sans-serif;
          position: relative;
        }

        .faq-heading {
          font-family: var(--font-bebas), sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3.2rem);
          letter-spacing: 0.02em;
          line-height: 1.1;
          text-align: center;
          color: #fff;
          margin: 0 0 56px 0;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .faq-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 16px 20px 32px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.13);
          background: #0d0d0d;
          cursor: pointer;
          gap: 16px;
          min-height: 72px;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(255,255,255,0.4);
          background: #151515;
          transform: translateY(-2px);
        }

        .faq-question {
          font-weight: 500;
          font-size: 15px;
          color: rgba(255,255,255,0.9);
          line-height: 1.4;
          flex: 1;
        }

        .faq-arrow-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #2a2a2a;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }

        /* ── FULL PAGE MODAL ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: #000;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .modal-close {
          position: fixed;
          top: 28px;
          right: 32px;
          z-index: 1010;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .modal-close:hover {
          background: rgba(255,255,255,0.12);
          color: #fff;
        }

        .modal-content {
          flex: 1;
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          padding: 100px 48px 80px;
          box-sizing: border-box;
        }

        .modal-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: rgba(255,255,255,0.3);
          margin-bottom: 28px;
        }

        .modal-q {
          font-family: var(--font-syne), sans-serif;
          font-size: clamp(1.1rem, 2.5vw, 1.9rem);
          font-weight: 400;
          color: #fff;
          line-height: 1.3;
          letter-spacing: -0.01em;
          margin-bottom: 36px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 32px;
        }

        .modal-img {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 48px;
          border: 1px solid rgba(255,255,255,0.06);
          aspect-ratio: 16/7;
        }
        .modal-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(1.05) brightness(0.8);
          display: block;
        }

        .modal-a {
          font-size: clamp(1rem, 2vw, 1.2rem);
          line-height: 1.9;
          color: rgba(255,255,255,0.65);
          margin-bottom: 48px;
          max-width: 720px;
        }

        .modal-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          color: #000;
          padding: 16px 32px;
          border-radius: 100px;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
        }
        .modal-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(255,255,255,0.15); }

        /* TABLET ≤ 860px */
        @media (max-width: 860px) {
          .faq-section { padding: 60px 28px 72px; }
          .faq-heading { margin: 0 0 36px 0; }
          .faq-grid { grid-template-columns: 1fr; gap: 12px; }
          .faq-item {
            border-radius: 20px;
            padding: 18px 16px 18px 24px;
            align-items: flex-start;
            min-height: unset;
          }
          .faq-question { font-size: 14px; }
          .faq-arrow-circle {
            width: 40px;
            height: 40px;
            margin-top: 2px;
          }
          .modal-content { padding: 80px 32px 60px; }
        }

        /* MOBILE ≤ 480px */
        @media (max-width: 480px) {
          .faq-section { padding: 48px 16px 60px; }
          .faq-grid { gap: 10px; }
          .faq-item {
            border-radius: 16px;
            padding: 16px 14px 16px 20px;
          }
          .faq-question { font-size: 13px; }
          .faq-arrow-circle { width: 36px; height: 36px; }
          .modal-content { padding: 64px 20px 48px; }
          .modal-close { top: 16px; right: 16px; }
          .modal-q { font-size: 1rem; line-height: 1.4; margin-bottom: 24px; padding-bottom: 20px; }
          .modal-a { font-size: 0.9rem; line-height: 1.75; margin-bottom: 32px; }
          .modal-img { aspect-ratio: 4/3; margin-bottom: 28px; }
          .modal-eyebrow { margin-bottom: 16px; }
        }
      `}</style>

         <section className="faq-section">
            <h2 className="faq-heading">Frequently Asked Questions</h2>

            <div className="faq-grid">
               {faqs.map((faq, i) => (
                  <motion.div
                     key={i}
                     className="faq-item"
                     onClick={() => setSelectedFaq(faq)}
                     initial={{ opacity: 0, y: 12 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.06 }}
                  >
                     <span className="faq-question">{faq.question}</span>
                     <span className="faq-arrow-circle">
                        <ArrowRight style={{ width: '18px', height: '18px', color: 'rgba(255,255,255,0.8)' }} />
                     </span>
                  </motion.div>
               ))}
            </div>

            <AnimatePresence>
               {selectedFaq && (
                  <motion.div
                     className="modal-overlay"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3 }}
                  >
                     {/* Close Button */}
                     <div className="modal-close" onClick={() => setSelectedFaq(null)}>
                        <X size={18} />
                     </div>

                     <motion.div
                        className="modal-content"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                     >
                        <div className="modal-eyebrow">FAQ — VD Patil</div>

                        <h2 className="modal-q">{selectedFaq.question}</h2>

                        {/* Contextual Image */}
                        <div className="modal-img">
                           <img
                              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&auto=format&fit=crop"
                              alt="VD Patil Coaching"
                              width={1200}
                              height={600}
                           />
                        </div>

                        <p className="modal-a">{selectedFaq.answer}</p>

                        {selectedFaq.cta && (
                           <a href={selectedFaq.cta.link} className="modal-cta">
                              {selectedFaq.cta.label}
                              {selectedFaq.cta.icon === "calendar" ? <Calendar size={16} /> : <ExternalLink size={16} />}
                           </a>
                        )}
                     </motion.div>
                  </motion.div>
               )}
            </AnimatePresence>
         </section>
      </>
   );
}