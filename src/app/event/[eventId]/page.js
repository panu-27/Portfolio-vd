"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Share2, MapPin, Calendar, Users, ChevronRight, Building } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── EVENT DATA ──────────────────────────────────────────────────────────
const EVENT_DATA = {
    1: {
        id: 1,
        title: "10X Leadership Summit 2026",
        category: "Seminar",
        date: "August 15, 2026",
        location: "New York, USA",
        attendees: "500+ Leaders",
        organizer: "VD Patil Education System",
        heroAccent: '#0034FE',
        gallery: [
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1475721025505-c310742fef06?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1515187029560-1d894b9aa082?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop&q=80"
        ],
        content: [
            { type: 'intro', text: "The 10X Leadership Summit is our flagship event designed to radically transform the way you approach business, team management, and scale." },
            { type: 'paragraph', text: "Over three intensive days, we decode the blueprints of the world's most successful organizations. We don't teach theory; we install operational frameworks that have generated hundreds of millions of dollars in collective revenue for our alumni." },
            { type: 'heading', text: "What You Will Experience" },
            { type: 'bullets', items: [
                "Day 1: The Psychology of the 10X Founder - Dismantling limiting beliefs and architecting your new reality.",
                "Day 2: System Architecture - Building operations and hiring protocols that don't rely on your constant input.",
                "Day 3: Scale & Dominion - Mastering ethical persuasion, market penetration, and massive sales strategies."
            ]},
            { type: 'paragraph', text: "Join hundreds of driven entrepreneurs and executives for an experience that guarantees to elevate your standards and your bottom line. Networking opportunities are built directly into the schedule." }
        ]
    },
    2: {
        id: 2,
        title: "Wealth Psychology Masterclass",
        category: "Masterclass",
        date: "September 10, 2026",
        location: "London, UK",
        attendees: "200+ Executives",
        organizer: "VD Patil",
        heroAccent: '#aaaaaa',
        gallery: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop&q=80"
        ],
        content: [
            { type: 'intro', text: "Break through your financial glass ceiling by understanding the core psychological frameworks of the ultra-wealthy." },
            { type: 'paragraph', text: "This intensive single-day masterclass focuses entirely on the neural patterning that prevents driven individuals from achieving true elite wealth. Money is attracted to systems, but systems are built by the mind." }
        ]
    },
    3: {
        id: 3,
        title: "Peak Performance Retreat",
        category: "Retreat",
        date: "October 05, 2026",
        location: "Bali, Indonesia",
        attendees: "50 Exclusive Seats",
        organizer: "VD Patil Elite",
        heroAccent: '#cccccc',
        gallery: [
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1475721025505-c310742fef06?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1515187029560-1d894b9aa082?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop&q=80"
        ],
        content: [
            { type: 'intro', text: "Optimize your biology, focus, and energy in this exclusive 5-day tropical retreat for high-achievers." },
            { type: 'paragraph', text: "If you want to perform like the top 0.1%, you must recover and operate like them. We disconnect from the noise to reconstruct your daily operating systems." }
        ]
    },
    4: {
        id: 4,
        title: "Global Sales Domination",
        category: "Seminar",
        date: "November 12, 2026",
        location: "Dubai, UAE",
        attendees: "800+ Sales Professionals",
        organizer: "VD Patil Education System",
        heroAccent: '#333333',
        gallery: [
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1475721025505-c310742fef06?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1515187029560-1d894b9aa082?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop&q=80"
        ],
        content: [
            { type: 'intro', text: "Learn the art of ethical persuasion and high-ticket closing in the most competitive markets in the world." },
            { type: 'paragraph', text: "This is not about sleazy tactics. This is about commanding respect, framing conversations, and delivering undeniable value to close deals effortlessly." }
        ]
    },
    5: {
        id: 5,
        title: "Systems & Scaling Workshop",
        category: "Workshop",
        date: "December 01, 2026",
        location: "Singapore",
        attendees: "150 Founders",
        organizer: "VD Patil",
        heroAccent: '#555555',
        gallery: [
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1475721025505-c310742fef06?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1515187029560-1d894b9aa082?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop&q=80"
        ],
        content: [
            { type: 'intro', text: "Stop working IN your business. Learn how to build automated systems and delegate ruthlessly." },
            { type: 'paragraph', text: "A hands-on, laptop-open workshop where you will literally build SOPs, hiring funnels, and KPI dashboards live in the room with our experts." }
        ]
    },
    6: {
        id: 6,
        title: "The 1% Mindset Seminar",
        category: "Seminar",
        date: "January 20, 2027",
        location: "Mumbai, India",
        attendees: "2000+ Attendees",
        organizer: "VD Patil Events",
        heroAccent: '#777777',
        gallery: [
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1475721025505-c310742fef06?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1515187029560-1d894b9aa082?w=600&h=450&fit=crop&q=80",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop&q=80"
        ],
        content: [
            { type: 'intro', text: "An intensive single-day seminar focused on adopting the mental models of the top 1% of entrepreneurs." },
            { type: 'paragraph', text: "We break down the cognitive shifts required to see opportunities where others see barriers, handle immense pressure gracefully, and execute with precision." }
        ]
    }
};

const ALL_EVENTS_BRIEF = [
    { id: 1, title: '10X Leadership Summit 2026', category: 'Seminar', date: 'August 15, 2026' },
    { id: 2, title: 'Wealth Psychology Masterclass', category: 'Masterclass', date: 'September 10, 2026' },
    { id: 3, title: 'Peak Performance Retreat', category: 'Retreat', date: 'October 05, 2026' },
    { id: 4, title: 'Global Sales Domination', category: 'Seminar', date: 'November 12, 2026' },
    { id: 5, title: 'Systems & Scaling Workshop', category: 'Workshop', date: 'December 01, 2026' },
    { id: 6, title: 'The 1% Mindset Seminar', category: 'Seminar', date: 'January 20, 2027' },
];

function ContentBlock({ block }) {
    const textStyle = { color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontWeight: 400 };

    switch (block.type) {
        case 'intro':
            return <p style={{ ...textStyle, fontSize: '1.25rem', color: '#fff', marginBottom: 32 }}>{block.text}</p>;
        case 'paragraph':
            return <p style={{ ...textStyle, fontSize: '1.1rem', marginBottom: 28 }}>{block.text}</p>;
        case 'heading':
            return <h2 style={{ fontSize: '1.8rem', fontWeight: 400, color: '#fff', marginTop: 56, marginBottom: 24, fontFamily: "'Syne', sans-serif" }}>{block.text}</h2>;
        case 'bullets':
            return (
                <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
                    {block.items.map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: 14, fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#fff', flexShrink: 0, marginTop: 10, opacity: 0.5 }} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            );
        default: return null;
    }
}

export default function EventPost() {
    const { eventId } = useParams();
    const [copied, setCopied] = useState(false);
    const event = EVENT_DATA[Number(eventId) || 1];

    useEffect(() => { window.scrollTo(0, 0); }, [eventId]);

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    if (!event) return <div style={{ color: '#fff', textAlign: 'center', padding: '100px' }}>Event not found</div>;

    const relatedEvents = ALL_EVENTS_BRIEF.filter(e => String(e.id) !== String(eventId)).slice(0, 3);

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: "'Montserrat', sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700&family=Montserrat:wght@400;500;600&display=swap');
                
                .share-btn {
                    display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px;
                    border-radius: 100px; border: 1px solid rgba(255,255,255,0.1); background: #0a0a0a;
                    color: #fff; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.2s;
                }
                .share-btn:hover { background: #111; border-color: rgba(255,255,255,0.3); }
                
                .gallery-container {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                
                .gallery-hero {
                    width: 100%;
                    aspect-ratio: 21/9;
                    border-radius: 20px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                
                .gallery-hero img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                }
                
                .gallery-grid-item {
                    aspect-ratio: 4/3;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                
                .gallery-grid-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }
                
                .gallery-grid-item:hover img {
                    transform: scale(1.05);
                }
                
                .related-card {
                    padding: 24px; border: 1px solid rgba(255,255,255,0.05); border-radius: 20px;
                    background: #050505; text-decoration: none; display: block; transition: all 0.3s;
                }
                .related-card:hover { border-color: rgba(255,255,255,0.2); transform: translateY(-2px); }

                @media (max-width: 768px) {
                    .gallery-hero { aspect-ratio: 16/9; }
                    .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
                }
            `}</style>

            <Navbar />
            <div style={{ height: 72 }} />

            {/* Header Content */}
            <header style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                        <ArrowLeft size={15} /> All events
                    </Link>
                    <button className="share-btn" onClick={handleShare}>
                        <Share2 size={14} /> {copied ? 'Copied!' : 'Share'}
                    </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', marginBottom: 16 }}>
                    <span style={{ color: '#fff', opacity: 0.6, fontWeight: 600 }}>{event.category}</span>
                    <span style={{ opacity: 0.2 }}>·</span>
                    <span style={{ color: '#fff', opacity: 0.8, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Calendar size={14} /> {event.date}
                    </span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                    fontWeight: 400, color: '#fff',
                    lineHeight: 1.1, marginBottom: 32,
                    fontFamily: "'Syne', sans-serif",
                    letterSpacing: '-0.02em'
                }}>
                    {event.title}
                </h1>

                {/* Event Metadata */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <MapPin size={18} color="rgba(255,255,255,0.8)" />
                        </div>
                        <div>
                            <div style={{ fontSize: '11px', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>Location</div>
                            <div style={{ fontSize: '14px', fontWeight: 600 }}>{event.location}</div>
                        </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Users size={18} color="rgba(255,255,255,0.8)" />
                        </div>
                        <div>
                            <div style={{ fontSize: '11px', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>Capacity</div>
                            <div style={{ fontSize: '14px', fontWeight: 600 }}>{event.attendees}</div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Building size={18} color="rgba(255,255,255,0.8)" />
                        </div>
                        <div>
                            <div style={{ fontSize: '11px', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>Organizer</div>
                            <div style={{ fontSize: '14px', fontWeight: 600 }}>{event.organizer}</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Photo Gallery */}
            <div style={{ maxWidth: 1100, margin: '48px auto', padding: '0 24px' }}>
                <div className="gallery-container">
                    {event.gallery && event.gallery.length > 0 && (
                        <>
                            <div className="gallery-hero">
                                <img src={event.gallery[0]} alt="Event hero" />
                            </div>
                            
                            {event.gallery.length > 1 && (
                                <div className="gallery-grid">
                                    {event.gallery.slice(1, 5).map((img, idx) => (
                                        <div key={idx} className="gallery-grid-item">
                                            <img src={img} alt={`Event photo ${idx + 2}`} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Article Content */}
            <article style={{ maxWidth: 850, margin: '0 auto', padding: '0 24px 100px' }}>
                {event.content.map((block, i) => (
                    <ContentBlock key={i} block={block} />
                ))}

                <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontSize: '12px', opacity: 0.4, marginBottom: 4 }}>Hosted by</div>
                        <div style={{ fontSize: '16px', fontWeight: 500 }}>{event.organizer}</div>
                    </div>
                    <button className="share-btn" onClick={handleShare}>
                        <Share2 size={14} /> Share event
                    </button>
                </div>
            </article>

            {/* More Posts Section */}
            <section style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '80px 24px' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: 40, fontFamily: "'Syne', sans-serif" }}>Upcoming <span style={{ opacity: 0.3 }}>Events</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
                        {relatedEvents.map(re => (
                            <Link key={re.id} href={`/event/${re.id}`} className="related-card">
                                <div style={{ fontSize: '11px', fontWeight: 600, opacity: 0.4, marginBottom: 12, textTransform: 'uppercase' }}>{re.category}</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#fff', marginBottom: 24, lineHeight: 1.3 }}>{re.title}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: 0.3, fontSize: '12px' }}>
                                    <span>{re.date}</span>
                                    <ChevronRight size={16} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
