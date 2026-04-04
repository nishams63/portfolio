import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Your Name — AI Automation & Content Strategist',
  description:
    'I help brands grow using AI automation and content. Let\'s build something extraordinary together.',
  openGraph: {
    title: 'Your Name — AI Automation & Content Strategist',
    description: 'I help brands grow using AI automation and content.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-obsidian text-ivory antialiased">{children}</body>
    </html>
  );
}
