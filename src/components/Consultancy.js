'use client';
import { ArrowRight } from 'lucide-react';

const EXPERTISE_PILLS = [
    "Executive Leadership",
    "Sales Optimization",
    "Rapid Scaling",
    "Systems Architecture",
    "Market Dominion",
    "High-Ticket Closing"
];

export default function Consultancy() {
    const handleScrollToContact = (e) => {
        e.preventDefault();
        const element = document.getElementById('contact-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="cons-section">
            <style>{`
                .cons-section {
                    background: #000;
                    padding: 100px 24px;
                    display: flex;
                    justify-content: center;
                    font-family: 'Montserrat', system-ui, sans-serif;
                    position: relative;
                }
                .cons-wrapper {
                    max-width: 1200px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 4fr 6fr;
                    gap: 60px;
                    align-items: center;
                }
                
                /* Left Side - Image */
                .cons-image-wrapper {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 4/5;
                    border-radius: 20px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.08);
                    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                }
                .cons-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(100%) contrast(1.1);
                    transition: filter 0.4s ease, transform 0.6s ease;
                }
                .cons-image-wrapper:hover .cons-image {
                    filter: grayscale(0%) contrast(1.1);
                    transform: scale(1.03);
                }
                .cons-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
                }
                
                /* Right Side - Content */
                .cons-content {
                    display: flex;
                    flex-direction: column;
                }
                .cons-title {
                    font-family: 'Syne', sans-serif;
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 400;
                    color: #fff;
                    margin: 0 0 24px 0;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                }
                .cons-desc {
                    color: rgba(255,255,255,0.7);
                    font-size: 1.1rem;
                    line-height: 1.8;
                    margin: 0 0 40px 0;
                    max-width: 90%;
                }
                
                /* Pills Area */
                .cons-pills-label {
                    color: rgba(255,255,255,0.4);
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 16px;
                }
                .cons-pills-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    margin-bottom: 48px;
                }
                .cons-pill {
                    padding: 10px 20px;
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 100px;
                    color: rgba(255,255,255,0.85);
                    font-size: 0.9rem;
                    font-weight: 500;
                    background: rgba(255,255,255,0.03);
                    cursor: default;
                    transition: all 0.3s ease;
                }
                .cons-pill:hover {
                    border-color: rgba(255,255,255,0.4);
                    background: rgba(255,255,255,0.08);
                    color: #fff;
                }
                
                /* CTA Button */
                .cons-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    background: #fff;
                    color: #000;
                    padding: 18px 36px;
                    border-radius: 100px;
                    font-weight: 600;
                    font-size: 1.05rem;
                    border: none;
                    cursor: pointer;
                    align-self: flex-start;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    text-decoration: none;
                }
                .cons-btn:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 25px rgba(255,255,255,0.2);
                }
                
                @media (max-width: 968px) {
                    .cons-wrapper {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .cons-image-wrapper {
                        max-width: 500px;
                        margin: 0 auto;
                        aspect-ratio: 1/1;
                    }
                    .cons-content {
                        align-items: center;
                        text-align: center;
                    }
                    .cons-desc {
                        max-width: 100%;
                    }
                    .cons-pills-grid {
                        justify-content: center;
                    }
                    .cons-btn {
                        align-self: center;
                    }
                }
            `}</style>

            <div className="cons-wrapper">
                {/* Left Side: Photo */}
                <div className="cons-image-wrapper">
                    <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                        alt="VD Patil Consulting" 
                        className="cons-image" 
                    />
                    <div className="cons-image-overlay"></div>
                </div>

                {/* Right Side: Content */}
                <div className="cons-content">
                    <h2 className="cons-title">Consultancy</h2>
                    <p className="cons-desc">
                        My consultancy is not about incremental growth; it's about exponential transformation. I partner with founders and executives to dismantle operational bottlenecks, engineer aggressive sales frameworks, and install elite leadership paradigms that scale rapidly and sustainably.
                    </p>
                    
                    <div>
                        <div className="cons-pills-label">Core Domains</div>
                        <div className="cons-pills-grid">
                            {EXPERTISE_PILLS.map((area, idx) => (
                                <div key={idx} className="cons-pill">{area}</div>
                            ))}
                        </div>
                    </div>

                    <a href="#contact-form" onClick={handleScrollToContact} className="cons-btn">
                        Book a Consultancy <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}
