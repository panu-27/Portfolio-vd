"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
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
                <h1 className="legal-title">Privacy Policy</h1>
                <div className="legal-date">Last Updated: April 25, 2026</div>
            </div>

            <div className="legal-container">
                <div className="legal-content">
                    <h2>1. Introduction</h2>
                    <p>Welcome to VD PATIL and VDPES (VD PATIL Education System). We respect your privacy and are deeply committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

                    <h2>2. The Data We Collect About You</h2>
                    <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul>
                        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title.</li>
                        <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions.</li>
                        <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                        <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                    </ul>

                    <h2>3. How We Use Your Personal Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul>
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                    </ul>

                    <h2>4. Data Security</h2>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

                    <h2>5. Your Legal Rights</h2>
                    <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>

                    <h2>6. Contact Details</h2>
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact us using our Contact Form on the main page.</p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
