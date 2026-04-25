import { Outfit, Bebas_Neue, Syne, Montserrat, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });
const barlow = Barlow({ weight: ['300', '400', '700', '800', '900'], subsets: ['latin'], variable: '--font-barlow' });
const barlowCondensed = Barlow_Condensed({ weight: ['300', '400', '700', '800', '900'], subsets: ['latin'], variable: '--font-barlow-cond' });

export const metadata = {
  metadataBase: new URL('https://vdpatil.com'),
  title: {
    default: 'VD Patil | Vinayak Dabhade Patil | Master Coach & Consultant',
    template: '%s | VD Patil',
  },
  description:
    'Vinayak Dabhade Patil (VD Patil) is a world-class business coach, leadership expert, speaker, and consultant helping entrepreneurs achieve 10X growth through VDPES (VD Patil Education System).',
  keywords: [
    'VD Patil',
    'vdpatil',
    'Vinayak Dabhade',
    'Vinayak Dabhade Patil',
    'VDPES',
    'VD Patil Education System',
    'vinayak dabhade VDPES',
    'vinayak dabhade patil',
    'archearc',
    'arc studio',
    'archearc studio',
    'business coach',
    'leadership coach',
    'executive consultant',
    'keynote speaker',
    '10X leadership',
    'entrepreneurship coach',
    'high performance coach',
    'mindset coach India',
  ],
  authors: [{ name: 'Vinayak Dabhade Patil (VD Patil)', url: 'https://vdpatil.com' }],
  creator: 'Vinayak Dabhade Patil',
  publisher: 'VD Patil Education System (VDPES)',
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
    siteName: 'Vinayak Dabhade Patil | VD Patil',
    title: 'VD Patil | Vinayak Dabhade Patil | Master Coach & Business Consultant',
    description:
      'Helping entrepreneurs and executives achieve 10X growth through elite mindset frameworks and VDPES.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VD Patil (Vinayak Dabhade) - Master Coach & Business Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VD Patil | Vinayak Dabhade Patil | Master Coach',
    description:
      'Helping entrepreneurs achieve 10X growth through VDPES. Elite coaching and consulting.',
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
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Vinayak Dabhade Patil",
      "alternateName": ["VD Patil", "Vinayak Dabhade", "VDPES", "VD Patil Education System", "vdpatil", "archearc", "arc studio"],
      "url": "https://vdpatil.com",
      "image": "https://vdpatil.com/og-image.jpg",
      "jobTitle": "Master Coach, Speaker & Business Consultant",
      "worksFor": {
        "@type": "Organization",
        "name": "VD Patil Education System (VDPES)"
      },
      "description": "Vinayak Dabhade Patil (VD Patil) is a world-class business coach, leadership expert, speaker, and consultant. Founder of VDPES (VD Patil Education System)."
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "VD Patil - Master Coach",
      "url": "https://vdpatil.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://vdpatil.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.className} ${outfit.variable} ${bebas.variable} ${syne.variable} ${montserrat.variable} ${barlow.variable} ${barlowCondensed.variable}`}>{children}</body>
    </html>
  );
}
