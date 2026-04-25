"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CookiesPolicy() {
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
                <h1 className="legal-title">Cookies Policy</h1>
                <div className="legal-date">Last Updated: April 25, 2026</div>
            </div>

            <div className="legal-container">
                <div className="legal-content">
                    <h2>1. What Are Cookies</h2>
                    <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>

                    <h2>2. How We Use Cookies</h2>
                    <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

                    <h2>3. Disabling Cookies</h2>
                    <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p>

                    <h2>4. The Cookies We Set</h2>
                    <ul>
                        <li><strong>Forms related cookies:</strong> When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</li>
                        <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</li>
                    </ul>

                    <h2>5. Third Party Cookies</h2>
                    <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
                    <ul>
                        <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</li>
                        <li>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</li>
                    </ul>

                    <h2>6. More Information</h2>
                    <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
