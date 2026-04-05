export const metadata = {
  title: {
    default: 'Blog | VD Patil',
    template: '%s | VD Patil Blog',
  },
  description:
    'Read insights on leadership, mindset, wealth psychology, sales, and peak performance from VD Patil — master coach and business consultant.',
  openGraph: {
    type: 'article',
    siteName: 'VD Patil',
  },
};

export default function BlogLayout({ children }) {
  return children;
}
