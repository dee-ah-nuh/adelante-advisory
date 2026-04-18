import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Adelante Advisory — Career strategy for Latin Americans in the US',
  description: "From graduation to your first promotion — we're two salvadoreñas who've been there. Career coaching for students and young professionals from Latin America navigating US corporate life.",
  openGraph: {
    title: 'Adelante Advisory',
    description: 'Career strategy for Latin Americans in the US.',
    siteName: 'Adelante Advisory',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
