import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BERA | Best Ever Resume AI Powered',
  description: 'Beats the bots. Impress the boss.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
