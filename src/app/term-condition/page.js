"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsAndConditions() {
    return (
        <main className="legal-page">
            <style>{`
                .legal-page {
                    background: #000;
                    color: #fff;
                    min-height: 100vh;
                    font-family: var(--font-mont), system-ui, sans-serif;
                }
                .legal-header {
                    padding: 160px 24px 60px;
                    text-align: center;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }
                .legal-title {
                    font-family: var(--font-syne), sans-serif;
                    font-size: clamp(2rem, 3.5vw, 3rem);
                    font-weight: 700;
                    margin: 0 0 16px;
                }
                .legal-date {
                    color: rgba(255,255,255,0.5);
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }
                .legal-container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 80px 24px;
                }
                .legal-content h2 {
                    font-family: var(--font-syne), sans-serif;
                    font-size: 1.8rem;
                    margin: 48px 0 24px;
                    color: #fff;
                }
                .legal-content p {
                    color: rgba(255,255,255,0.7);
                    line-height: 1.8;
                    margin-bottom: 20px;
                    font-size: 1.05rem;
                }
                .legal-content ul {
                    color: rgba(255,255,255,0.7);
                    line-height: 1.8;
                    margin-bottom: 32px;
                    padding-left: 24px;
                    font-size: 1.05rem;
                }
                .legal-content li {
                    margin-bottom: 8px;
                }
            `}</style>

            <Navbar />

            <div className="legal-header">
                <h1 className="legal-title">Terms & Conditions</h1>
                <div className="legal-date">Last Updated: April 25, 2026</div>
            </div>

            <div className="legal-container">
                <div className="legal-content">
                    <h2>1. Terms</h2>
                    <p>By accessing this Website, accessible from vdpatil.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

                    <h2>2. Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials on VD PATIL's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                    <ul>
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose or for any public display;</li>
                        <li>attempt to reverse engineer any software contained on VD PATIL's Website;</li>
                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>
                    <p>This will let VD PATIL to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</p>

                    <h2>3. Disclaimer</h2>
                    <p>All the materials on VD PATIL's Website are provided "as is". VD PATIL makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, VD PATIL does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

                    <h2>4. Limitations</h2>
                    <p>VD PATIL or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on VD PATIL's Website, even if VD PATIL or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>

                    <h2>5. Revisions and Errata</h2>
                    <p>The materials appearing on VD PATIL's Website may include technical, typographical, or photographic errors. VD PATIL will not promise that any of the materials in this Website are accurate, complete, or current. VD PATIL may change the materials contained on its Website at any time without notice. VD PATIL does not make any commitment to update the materials.</p>

                    <h2>6. Site Terms of Use Modifications</h2>
                    <p>VD PATIL may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
