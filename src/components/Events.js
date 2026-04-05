'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const events = [
    { title: "10X Leadership Summit 2026", date: "August 15, 2026", location: "New York, USA", description: "A 3-day immersive experience designed to rewire your leadership psychology and scale your impact." },
    { title: "Wealth Psychology Masterclass", date: "September 10, 2026", location: "London, UK", description: "Break through your financial glass ceiling by understanding the core psychological frameworks of the ultra-wealthy." },
    { title: "Peak Performance Retreat", date: "October 05, 2026", location: "Bali, Indonesia", description: "Optimize your biology, focus, and energy in this exclusive 5-day tropical retreat for high-achievers." },
    { title: "Global Sales Domination", date: "November 12, 2026", location: "Dubai, UAE", description: "Learn the art of ethical persuasion and high-ticket closing in the most competitive markets in the world." },
    { title: "Systems & Scaling Workshop", date: "December 01, 2026", location: "Singapore", description: "Stop working IN your business. Learn how to build automated systems and delegate ruthelessly." },
    { title: "The 1% Mindset Seminar", date: "January 20, 2027", location: "Mumbai, India", description: "An intensive single-day seminar focused on adopting the mental models of the top 1% of entrepreneurs." },
];

const masonryPhotos = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=400&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1475721025505-c310742fef06?w=600&h=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515187029560-1d894b9aa082?w=400&h=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&auto=format&fit=crop",
];

function getIPP() {
    if (typeof window === 'undefined') return 4;
    const w = window.innerWidth;
    if (w < 520) return 1;
    if (w < 768) return 2;
    if (w < 1100) return 3;
    return 4;
}

const Events = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [isDragging, setIsDragging] = useState(false);
    const [animated, setAnimated] = useState(true);
    const overflowRef = useRef(null);
    const startX = useRef(0);
    const dragDelta = useRef(0);
    const currentIndexRef = useRef(0);

    useEffect(() => { currentIndexRef.current = currentIndex; }, [currentIndex]);

    useEffect(() => {
        const handleResize = () => { setItemsPerPage(getIPP()); setCurrentIndex(0); };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // mouse drag
    useEffect(() => {
        const el = overflowRef.current;
        if (!el) return;

        const onMouseMove = (e) => {
            if (!isDragging) return;
            dragDelta.current = e.clientX - startX.current;
        };
        const onMouseUp = () => {
            if (!isDragging) return;
            setIsDragging(false);
            setAnimated(true);
            const threshold = el.offsetWidth * 0.12;
            if (dragDelta.current < -threshold && currentIndexRef.current < events.length - itemsPerPage)
                setCurrentIndex(p => p + 1);
            else if (dragDelta.current > threshold && currentIndexRef.current > 0)
                setCurrentIndex(p => p - 1);
            dragDelta.current = 0;
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        return () => { window.removeEventListener('mousemove', onMouseMove); window.removeEventListener('mouseup', onMouseUp); };
    }, [isDragging, itemsPerPage]);

    const translateX = -currentIndex * (100 / itemsPerPage);
    const prevDisabled = currentIndex === 0;
    const nextDisabled = currentIndex >= events.length - itemsPerPage;

    const handleTouchStart = (e) => { startX.current = e.touches[0].clientX; dragDelta.current = 0; };
    const handleTouchEnd = () => {
        const threshold = overflowRef.current?.offsetWidth * 0.12 || 60;
        if (dragDelta.current < -threshold && currentIndex < events.length - itemsPerPage) setCurrentIndex(p => p + 1);
        else if (dragDelta.current > threshold && currentIndex > 0) setCurrentIndex(p => p - 1);
        dragDelta.current = 0;
    };
    const handleTouchMove = (e) => { dragDelta.current = e.touches[0].clientX - startX.current; };

    return (
        <>
            <style>{`
                .evt-section {
                    background: #000;
                    padding: 40px 48px 40px; /* Reduced padding to fit well above blogs */
                    font-family: 'Montserrat', system-ui, sans-serif;
                    width: 100%;
                    position: relative;
                    box-sizing: border-box;
                }
                .evt-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 40px;
                    max-width: 1400px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .evt-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #fff;
                    margin: 0;
                }
                .evt-nav { display: flex; gap: 8px; align-items: center; }
                .evt-btn {
                    width: 36px; height: 36px;
                    border-radius: 8px;
                    border: 0.5px solid rgba(255,255,255,0.2);
                    background: #0d0d0d;
                    color: #fff;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer;
                    font-size: 15px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
                    transition: background 0.2s;
                    user-select: none;
                }
                .evt-btn:disabled { opacity: 0.5; cursor: not-allowed; }
                .evt-btn:not(:disabled):hover { background: rgba(255,255,255,0.08); }
                .evt-overflow {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                    cursor: grab;
                    user-select: none;
                }
                .evt-overflow.dragging { cursor: grabbing; }
                .evt-track {
                    display: flex;
                    width: 100%;
                    margin-top: 20px;
                    will-change: transform;
                }
                .evt-card-wrap {
                    flex-shrink: 0;
                    padding: 0 12px;
                    box-sizing: border-box;
                }
                .evt-card {
                    background: #0d0d0d;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 20px;
                    padding: 28px 24px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 2px 16px rgba(0,0,0,0.5);
                    transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
                    cursor: pointer;
                }
                .evt-card:hover {
                    border-color: rgba(255,255,255,0.25);
                    background: #111;
                    transform: translateY(-4px);
                }
                .evt-card-title {
                    font-weight: 700;
                    font-size: 1.05rem;
                    margin: 0 0 12px 0;
                    line-height: 1.35;
                    min-height: 50px;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    color: #fff;
                }
                .evt-card-meta {
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.4);
                    margin-bottom: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .evt-hr {
                    border: none;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    margin: 12px 0;
                }
                .evt-card-desc {
                    color: rgba(255,255,255,0.55);
                    font-size: 0.82rem;
                    line-height: 1.6;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    margin: 0;
                    flex: 1;
                }
                .masonry-gallery {
                    column-count: 3;
                    column-gap: 16px;
                    margin-bottom: 80px;
                    max-width: 1400px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .masonry-item {
                    break-inside: avoid;
                    margin-bottom: 16px;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.05);
                    transform: translateZ(0); 
                    transition: transform 0.3s ease;
                }
                .masonry-item:hover {
                    transform: translateY(-4px);
                }
                .masonry-item img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                @media (max-width: 1024px) { 
                    .masonry-gallery { column-count: 2; margin-bottom: 60px; } 
                }
                @media (max-width: 640px) { 
                    .masonry-gallery { column-count: 1; margin-bottom: 40px; } 
                }

                @media (max-width: 768px) { .evt-section { padding: 40px 28px 40px; } }
                @media (max-width: 520px) { .evt-section { padding: 30px 20px 30px; } }
            `}</style>

            <div className="evt-section">
                <div className="masonry-gallery">
                    {masonryPhotos.map((photoUrl, i) => (
                        <div key={i} className="masonry-item">
                            <img src={photoUrl} alt={`Atmosphere ${i + 1}`} loading="lazy" />
                        </div>
                    ))}
                </div>

                <div className="evt-header">
                    <h2 className="evt-title">Past Events</h2>
                    <div className="evt-nav">
                        <button className="evt-btn" onClick={() => !prevDisabled && setCurrentIndex(p => p - 1)} disabled={prevDisabled}>{'<'}</button>
                        <button className="evt-btn" onClick={() => !nextDisabled && setCurrentIndex(p => p + 1)} disabled={nextDisabled}>{'>'}</button>
                    </div>
                </div>

                <div
                    className={`evt-overflow ${isDragging ? ' dragging' : ''}`}
                    ref={overflowRef}
                    onMouseDown={(e) => { setIsDragging(true); setAnimated(false); startX.current = e.clientX; dragDelta.current = 0; }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="evt-track"
                        style={{
                            transform: `translateX(${translateX}%)`,
                            transition: animated ? 'transform 0.5s ease-in-out' : 'none',
                        }}
                    >
                        {events.map((evt, i) => (
                            <div key={i} className="evt-card-wrap" style={{ width: `${100 / itemsPerPage}%` }}>
                                <Link href={`/event/${i + 1}`} style={{ textDecoration: 'none', display: 'block', height: '100%', outline: 'none' }}>
                                    <div className="evt-card">
                                        <div className="evt-card-meta">{evt.date} • {evt.location}</div>
                                        <h3 className="evt-card-title">{evt.title}</h3>
                                        <hr className="evt-hr" />
                                        <p className="evt-card-desc">{evt.description}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
