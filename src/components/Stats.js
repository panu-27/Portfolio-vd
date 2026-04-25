'use client';
import { useEffect, useRef, useState } from 'react';

const STATS = [
    { end: 200, suffix: '+', label: 'Individuals Coached' },
    { end: 45, suffix: '+', label: 'Workshops Held' },
    { end: 1000, suffix: '+', label: 'Breakthroughs' },
    { end: 60, suffix: '%', label: 'Average Business Growth' },
];

function Counter({ end, suffix, duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const startTime = performance.now();
                    const step = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * end));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
    return (
        <section className="stats-section">
            <style>{`
                .stats-section {
                    background: #000;
                    padding: 80px 24px;
                    display: flex;
                    justify-content: center;
                    font-family: var(--font-mont), system-ui, sans-serif;
                    border-top: 1px solid rgba(255,255,255,0.05);
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                }
                .stats-grid {
                    max-width: 1200px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2px;
                }
                .stat-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 48px 24px;
                    border-right: 1px solid rgba(255,255,255,0.06);
                    text-align: center;
                    transition: background 0.3s ease;
                }
                .stat-item:last-child {
                    border-right: none;
                }
                .stat-item:hover {
                    background: rgba(255,255,255,0.02);
                }
                .stat-number {
                    font-family: var(--font-syne), sans-serif;
                    font-size: clamp(2.8rem, 5vw, 4.5rem);
                    font-weight: 400;
                    color: #fff;
                    line-height: 1;
                    margin-bottom: 16px;
                    letter-spacing: -0.03em;
                }
                .stat-label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.7);
                }

                @media (max-width: 768px) {
                    .stats-section { padding: 60px 24px; }
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0;
                    }
                    .stat-item {
                        border-right: 1px solid rgba(255,255,255,0.06);
                        border-bottom: 1px solid rgba(255,255,255,0.06);
                        padding: 40px 16px;
                    }
                    .stat-item:nth-child(2) { border-right: none; }
                    .stat-item:nth-child(3) { border-bottom: none; }
                    .stat-item:nth-child(4) { border-right: none; border-bottom: none; }
                }
            `}</style>

            <div className="stats-grid">
                {STATS.map((stat, i) => (
                    <div key={i} className="stat-item">
                        <div className="stat-number">
                            <Counter end={stat.end} suffix={stat.suffix} />
                        </div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
