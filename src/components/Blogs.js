'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const blogs = [
    { title: "The Anatomy of 10X Leadership", description: "Discover the critical traits that separate average managers from visionary leaders who multiply their team's output tenfold." },
    { title: "Why Traditional Goal Setting is Failing You", description: "Most entrepreneurs set goals that silently limit their potential. Learn the alternative framework built for exponential growth." },
    { title: "Mastering the Psychology of Wealth", description: "Wealth is not just about financial systems — it's about the psychological frameworks that attract and sustain it long-term." },
    { title: "Delegation: The Art of Scaling Operations", description: "You cannot scale if you are the bottleneck. A mastery guide on effective delegation without sacrificing quality or culture." },
    { title: "Unlocking Peak Performance in 90 Days", description: "A structured timeline for optimizing your energy, focus, and productivity to achieve world-class results fast." },
    { title: "Ethical Persuasion in Business", description: "How to command the room and close massive deals through authenticity, high-value signaling, and ethical persuasion." },
];

function getIPP() {
    if (typeof window === 'undefined') return 4;
    const w = window.innerWidth;
    if (w < 520) return 1;
    if (w < 768) return 2;
    if (w < 1100) return 3;
    return 4;
}

const Blogs = () => {
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
            if (dragDelta.current < -threshold && currentIndexRef.current < blogs.length - itemsPerPage)
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
    const nextDisabled = currentIndex >= blogs.length - itemsPerPage;

    const handleTouchStart = (e) => { startX.current = e.touches[0].clientX; dragDelta.current = 0; };
    const handleTouchEnd = () => {
        const threshold = overflowRef.current?.offsetWidth * 0.12 || 60;
        if (dragDelta.current < -threshold && currentIndex < blogs.length - itemsPerPage) setCurrentIndex(p => p + 1);
        else if (dragDelta.current > threshold && currentIndex > 0) setCurrentIndex(p => p - 1);
        dragDelta.current = 0;
    };
    const handleTouchMove = (e) => { dragDelta.current = e.touches[0].clientX - startX.current; };

    return (
        <>
            <style>{`
                .blg-section {
                    background: #000;
                    padding: 80px 48px 96px;
                    font-family: 'Montserrat', system-ui, sans-serif;
                    width: 100%;
                    position: relative;
                    box-sizing: border-box;
                }
                .blg-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 40px;
                    max-width: 1400px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .blg-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #fff;
                    margin: 0;
                }
                .blg-nav { display: flex; gap: 8px; align-items: center; }
                .blg-btn {
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
                .blg-btn:disabled { opacity: 0.5; cursor: not-allowed; }
                .blg-btn:not(:disabled):hover { background: rgba(255,255,255,0.08); }
                .blg-overflow {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                    cursor: grab;
                    user-select: none;
                }
                .blg-overflow.dragging { cursor: grabbing; }
                .blg-track {
                    display: flex;
                    width: 100%;
                    margin-top: 20px;
                    will-change: transform;
                }
                .blg-card-wrap {
                    flex-shrink: 0;
                    padding: 0 12px;
                    box-sizing: border-box;
                }
                .blg-card {
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
                .blg-card:hover {
                    border-color: rgba(255,255,255,0.25);
                    background: #111;
                    transform: translateY(-4px);
                }
                .blg-card-title {
                    font-weight: 700;
                    font-size: 1.05rem;
                    margin: 0 0 12px 0;
                    line-height: 1.35;
                    min-height: 72px;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    color: #fff;
                }
                .blg-hr {
                    border: none;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    margin: 12px 0;
                }
                .blg-card-desc {
                    color: rgba(255,255,255,0.55);
                    font-size: 0.82rem;
                    line-height: 1.6;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    margin: 0;
                    flex: 1;
                }
                @media (max-width: 768px) { .blg-section { padding: 60px 28px 72px; } }
                @media (max-width: 520px) { .blg-section { padding: 48px 20px 60px; } }
            `}</style>

            <div className="blg-section">
                <div className="blg-header">
                    <h2 className="blg-title">Read Blogs</h2>
                    <div className="blg-nav">
                        <button className="blg-btn" onClick={() => !prevDisabled && setCurrentIndex(p => p - 1)} disabled={prevDisabled}>{'<'}</button>
                        <button className="blg-btn" onClick={() => !nextDisabled && setCurrentIndex(p => p + 1)} disabled={nextDisabled}>{'>'}</button>
                    </div>
                </div>

                <div
                    className={`blg-overflow ${isDragging ? ' dragging' : ''}`}
                    ref={overflowRef}
                    onMouseDown={(e) => { setIsDragging(true); setAnimated(false); startX.current = e.clientX; dragDelta.current = 0; }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="blg-track"
                        style={{
                            transform: `translateX(${translateX}%)`,
                            transition: animated ? 'transform 0.5s ease-in-out' : 'none',
                        }}
                    >
                        {blogs.map((blog, i) => (
                            <div key={i} className="blg-card-wrap" style={{ width: `${100 / itemsPerPage}%` }}>
                                <Link href={`/blog/${i + 1}`} style={{ textDecoration: 'none', display: 'block', height: '100%', outline: 'none' }}>
                                    <div className="blg-card">
                                        <h3 className="blg-card-title">{blog.title}</h3>
                                        <hr className="blg-hr" />
                                        <p className="blg-card-desc">{blog.description}</p>
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

export default Blogs;