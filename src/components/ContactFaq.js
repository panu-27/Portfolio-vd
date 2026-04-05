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
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;700;800&display=swap');

        .faq-section {
          background: #000;
          padding: 80px 48px 96px;
          box-sizing: border-box;
          font-family: 'Montserrat', sans-serif;
          position: relative;
        }

        .faq-heading {
          font-family: 'Bebas Neue', sans-serif;
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

        /* ── MODAL UI ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-content {
          background: linear-gradient(145deg, #111, #050505);
          border: 1px solid rgba(255,255,255,0.15);
          width: 100%;
          max-width: 600px;
          border-radius: 32px;
          padding: 48px;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
        }

        .modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: color 0.2s;
        }
        .modal-close:hover { color: #fff; }

        .modal-q {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: #fff;
          margin-bottom: 20px;
          line-height: 1.1;
          letter-spacing: 0.03em;
        }

        .modal-a {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255,255,255,0.7);
          margin-bottom: 32px;
        }

        .modal-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          color: #000;
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          font-size: 14px;
          text-transform: uppercase;
          transition: transform 0.2s;
        }
        .modal-cta:hover { transform: scale(1.05); }

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
          .modal-content { padding: 32px; }
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
          .modal-content { padding: 24px; border-radius: 24px; }
          .modal-q { font-size: 1.6rem; }
          .modal-a { font-size: 14px; }
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
                     onClick={() => setSelectedFaq(null)}
                  >
                     <motion.div
                        className="modal-content"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                     >
                        <div className="modal-close" onClick={() => setSelectedFaq(null)}>
                           <X size={24} />
                        </div>
                        <h3 className="modal-q">{selectedFaq.question}</h3>
                        <p className="modal-a">{selectedFaq.answer}</p>
                        {selectedFaq.cta && (
                           <a href={selectedFaq.cta.link} className="modal-cta">
                              {selectedFaq.cta.label}
                              {selectedFaq.cta.icon === "calendar" ? <Calendar size={18} /> : <ExternalLink size={18} />}
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