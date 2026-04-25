"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Share2, Clock, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── BLOG DATA ──────────────────────────────────────────────────────────
const BLOG_DATA = {
    1: {
        id: 1,
        title: 'The Anatomy of 10X Leadership',
        summary: 'Discover the critical traits that separate average managers from visionary leaders who multiply their team\'s output.',
        date: 'Apr 05, 2026',
        category: 'Leadership',
        author: 'VD PATIL',
        readTime: '6 min read',
        heroAccent: '#0034FE',
        content: [
            { type: 'intro', text: `Most organizations are over-managed and under-led. Management focuses on maintaining the status quo. Leadership—specifically 10X Leadership—is about dismantling it to construct a new reality.` },
            { type: 'heading', text: 'The 3 Pillars of 10X Leadership' },
            { type: 'paragraph', text: `In my years of consulting, the common denominator among stagnant companies is a leadership team operating from scarcity. Precision in communication is non-negotiable.` },
            {
                type: 'bullets', items: [
                    'Vision Clarity: Your team cannot execute on a fuzzy target.',
                    'Ruthless Delegation: 10X leaders do not solve small problems.',
                    'Emotional Resonance: Logic makes people think, but emotion makes them act.'
                ]
            },
        ]
    },
    2: {
        id: 2,
        title: 'Why Traditional Goal Setting is Failing You',
        summary: 'Most entrepreneurs set goals that limit their potential. Learn the alternative framework for exponential growth.',
        date: 'Mar 28, 2026',
        category: 'Mindset',
        author: 'VD PATIL',
        readTime: '5 min read',
        heroType: 'gradient',
        heroAccent: '#aaaaaa',
        content: [
            { type: 'intro', text: `We are taught to set SMART goals: Specific, Measurable, Achievable, Realistic, and Time-bound. But what if "Realistic" is the exact reason you are playing small?` },
            { type: 'heading', text: 'The Problem with "Realistic"' },
            { type: 'paragraph', text: `When you set a realistic goal, you base it on your current capabilities. You use historical data to project future performance. This ensures you only achieve incremental growth—a 10% or 20% improvement.` },
            { type: 'paragraph', text: `Exponential outcomes require unreasonable goals. When you aim for a 10X improvement, you are forced to abandon your current operating procedures. You cannot work 10 times harder. You must think 10 times bigger.` }
        ]
    },
    3: {
        id: 3,
        title: 'Mastering the Psychology of Wealth',
        summary: 'Wealth is not just about financial systems; it\'s about the psychological frameworks that attract and sustain it.',
        date: 'Mar 15, 2026',
        category: 'Wealth',
        author: 'VD PATIL',
        readTime: '8 min read',
        heroType: 'gradient',
        heroAccent: '#cccccc',
        content: [
            { type: 'intro', text: `Money is an amplifier of your internal psychology. If your internal operating system is built on scarcity, more money will only amplify your fear of losing it. If it is built on abundance, wealth flows seamlessly into your ecosystem.` },
            { type: 'paragraph', text: `The greatest investors and entrepreneurs don't just understand math; they understand human behavior, starting with their own.` }
        ]
    },
    4: {
        id: 4,
        title: 'Delegation: The Art of Scaling Operations',
        summary: 'You cannot scale if you are the bottleneck. A mastery guide on effective delegation without losing quality.',
        date: 'Feb 20, 2026',
        category: 'Systems',
        author: 'VD PATIL',
        readTime: '7 min read',
        heroType: 'gradient',
        heroAccent: '#333333',
        content: [
            { type: 'intro', text: `If your business cannot survive you taking a month off, you do not own a business—you own a high-stress job.` },
            { type: 'heading', text: 'Delegate Outcomes, Not Tasks' },
            { type: 'paragraph', text: `The biggest mistake leaders make is micro-managing the process. Hire A-players, define what success looks like, set the boundaries, and get out of their way.` }
        ]
    },
    5: {
        id: 5,
        title: 'Unlocking Peak Performance in 90 Days',
        summary: 'A structured timeline for optimizing your energy, focus, and productivity to achieve world-class results.',
        date: 'Jan 15, 2026',
        category: 'Performance',
        author: 'VD PATIL',
        readTime: '10 min read',
        heroType: 'gradient',
        heroAccent: '#555555',
        content: [
            { type: 'intro', text: `True performance has very little to do with time management and everything to do with energy management.` },
            { type: 'paragraph', text: `Over the next 90 days, you can radically alter your output by building systems around your neurobiology instead of fighting it.` }
        ]
    },
    6: {
        id: 6,
        title: 'Ethical Persuasion in Business',
        summary: 'How to command the room and close massive deals through authenticity, high-value signaling, and ethical persuasion.',
        date: 'Jan 05, 2026',
        category: 'Sales',
        author: 'VD PATIL',
        readTime: '8 min read',
        heroType: 'gradient',
        heroAccent: '#777777',
        content: [
            { type: 'intro', text: `Sales is the transfer of trust and conviction. If you treat it as a transaction, you will lose to those who treat it as a transformation.` },
            { type: 'paragraph', text: `The most elite closers in the world do not memorize scripts. They master human psychology and deploy ethical persuasion frameworks that align their prospects' deepest desires with their outcome.` }
        ]
    }
};

const ALL_POSTS_BRIEF = [
    { id: 1, title: 'The Anatomy of 10X Leadership', category: 'Leadership', date: 'Apr 05, 2026' },
    { id: 2, title: 'Why Traditional Goal Setting is Failing You', category: 'Mindset', date: 'Mar 28, 2026' },
    { id: 3, title: 'Mastering the Psychology of Wealth', category: 'Wealth', date: 'Mar 15, 2026' },
    { id: 4, title: 'Delegation: The Art of Scaling Operations', category: 'Systems', date: 'Feb 20, 2026' },
    { id: 5, title: 'Unlocking Peak Performance in 90 Days', category: 'Performance', date: 'Jan 15, 2026' },
    { id: 6, title: 'Ethical Persuasion in Business', category: 'Sales', date: 'Jan 05, 2026' },
];

// ─── HELPER COMPONENTS ──────────────────────────────────────────────────

function BlogHero({ post }) {
    return (
        <div style={{
            width: '100%',
            aspectRatio: '16/9',
            background: `linear-gradient(135deg, #0a0a0a 0%, ${post.heroAccent || '#333'}33 50%, #0a0a0a 100%)`,
            borderRadius: 24,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)`,
            }} />
            <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 400,
                color: '#ffffff',
                textAlign: 'center',
                lineHeight: 1.2,
                padding: '0 48px',
                position: 'relative',
                fontFamily: "var(--font-syne), sans-serif"
            }}>
                {post.title}
            </h2>
        </div>
    );
}

function ContentBlock({ block }) {
    const textStyle = { color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontWeight: 400 };

    switch (block.type) {
        case 'intro':
            return <p style={{ ...textStyle, fontSize: '1.25rem', color: '#fff', marginBottom: 32 }}>{block.text}</p>;
        case 'paragraph':
            return <p style={{ ...textStyle, fontSize: '1.1rem', marginBottom: 28 }}>{block.text}</p>;
        case 'heading':
            return <h2 style={{ fontSize: '1.8rem', fontWeight: 400, color: '#fff', marginTop: 56, marginBottom: 24, fontFamily: "var(--font-syne), sans-serif" }}>{block.text}</h2>;
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

export default function BlogPost() {
    const { postId } = useParams();
    const [copied, setCopied] = useState(false);
    const post = BLOG_DATA[Number(postId) || 1];

    useEffect(() => { window.scrollTo(0, 0); }, [postId]);

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    if (!post) return <div style={{ color: '#fff', textAlign: 'center', padding: '100px' }}>Post not found</div>;

    const relatedPosts = ALL_POSTS_BRIEF.filter(p => String(p.id) !== String(postId)).slice(0, 3);

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: "var(--font-mont), sans-serif" }}>
            <style>{`
                                .share-btn {
                    display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px;
                    border-radius: 100px; border: 1px solid rgba(255,255,255,0.1); background: #0a0a0a;
                    color: #fff; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.2s;
                }
                .share-btn:hover { background: #111; border-color: rgba(255,255,255,0.3); }
                .related-card {
                    padding: 24px; border: 1px solid rgba(255,255,255,0.05); border-radius: 20px;
                    background: #050505; text-decoration: none; display: block; transition: all 0.3s;
                }
                .related-card:hover { border-color: rgba(255,255,255,0.2); transform: translateY(-2px); }
            `}</style>

            <Navbar />
            <div style={{ height: 72 }} />

            {/* Header Content */}
            <header style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                        <ArrowLeft size={15} /> All articles
                    </Link>
                    <button className="share-btn" onClick={handleShare}>
                        <Share2 size={14} /> {copied ? 'Copied!' : 'Share'}
                    </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', marginBottom: 16 }}>
                    <span style={{ color: '#fff', opacity: 0.6, fontWeight: 600 }}>{post.category}</span>
                    <span style={{ opacity: 0.2 }}>·</span>
                    <span style={{ opacity: 0.4 }}>{post.date}</span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                    fontWeight: 400, color: '#fff',
                    lineHeight: 1.1, marginBottom: 32,
                    fontFamily: "var(--font-syne), sans-serif",
                    letterSpacing: '-0.02em'
                }}>
                    {post.title}
                </h1>

                <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{
                        width: 40, height: 40, borderRadius: '50%',
                        background: 'linear-gradient(135deg, #333, #111)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600
                    }}>VP</div>
                    <div>
                        <div style={{ fontSize: '14px', fontWeight: 600 }}>{post.author}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '12px', opacity: 0.4 }}>
                            <Clock size={12} /> {post.readTime}
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div style={{ maxWidth: 1100, margin: '48px auto', padding: '0 24px' }}>
                <BlogHero post={post} />
            </div>

            {/* Article Content */}
            <article style={{ maxWidth: 850, margin: '0 auto', padding: '0 24px 100px' }}>
                {post.content.map((block, i) => (
                    <ContentBlock key={i} block={block} />
                ))}

                <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontSize: '12px', opacity: 0.4, marginBottom: 4 }}>Published by</div>
                        <div style={{ fontSize: '16px', fontWeight: 500 }}>{post.author}</div>
                    </div>
                    <button className="share-btn" onClick={handleShare}>
                        <Share2 size={14} /> Share article
                    </button>
                </div>
            </article>

            {/* More Posts Section */}
            <section style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '80px 24px' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: 40, fontFamily: "var(--font-syne), sans-serif" }}>More <span style={{ opacity: 0.3 }}>Insights</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
                        {relatedPosts.map(rp => (
                            <Link key={rp.id} href={`/blog/${rp.id}`} className="related-card">
                                <div style={{ fontSize: '11px', fontWeight: 600, opacity: 0.4, marginBottom: 12, textTransform: 'uppercase' }}>{rp.category}</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#fff', marginBottom: 24, lineHeight: 1.3 }}>{rp.title}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: 0.3, fontSize: '12px' }}>
                                    <span>{rp.date}</span>
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