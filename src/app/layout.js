import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://vdpatil.com'),
  title: {
    default: 'VD Patil | Master Coach, Speaker & Business Consultant',
    template: '%s | VD Patil',
  },
  description:
    'VD Patil is a world-class business coach, leadership expert, speaker, and consultant helping entrepreneurs and executives achieve 10X growth through elite mindset frameworks, strategic systems, and proven performance blueprints.',
  keywords: [
    'VD Patil',
    'business coach',
    'leadership coach',
    'executive consultant',
    'keynote speaker',
    '10X leadership',
    'entrepreneurship coach',
    'high performance coach',
    'sales trainer',
    'mindset coach India',
    'VD Patil Education System',
    'peak performance coach',
  ],
  authors: [{ name: 'VD Patil', url: 'https://vdpatil.com' }],
  creator: 'VD Patil',
  publisher: 'VD Patil Education System',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vdpatil.com',
    siteName: 'VD Patil',
    title: 'VD Patil | Master Coach, Speaker & Business Consultant',
    description:
      'Helping entrepreneurs and executives achieve 10X growth through elite mindset frameworks, strategic systems, and proven performance blueprints.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VD Patil - Master Coach & Business Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VD Patil | Master Coach, Speaker & Business Consultant',
    description:
      'Helping entrepreneurs achieve 10X growth. Elite coaching, consulting, and live events.',
    images: ['/og-image.jpg'],
    creator: '@vdpatil',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  verification: {
    google: '',   // Add your Google Search Console verification token here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
