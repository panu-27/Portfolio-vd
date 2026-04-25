export const metadata = {
  title: {
    default: 'Blog | VD PATIL',
    template: '%s | VD PATIL Blog',
  },
  description:
    'Read insights on leadership, mindset, wealth psychology, sales, and peak performance from VD PATIL — master coach and business consultant.',
  openGraph: {
    type: 'article',
    siteName: 'VD PATIL',
  },
};

export default function BlogLayout({ children }) {
  return children;
}
