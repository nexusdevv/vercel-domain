import { GeistSans } from 'geist/font/sans';
import type { Metadata, Viewport } from 'next';
import { Toaster } from 'sonner';
import './globals.css';
import BackgroundGrid from '@/components/background-grid';
import { Analytics } from '@vercel/analytics/react';
import BackgroundGridMobile from '@/components/background-grid-mobile';

export const metadata: Metadata = {
  title: 'Vercel Domain Checker - Check & Find Perfect Domain Names',
  description: 'Find available domains with smart suggestions and alternatives for Vercel hosted projects',
  keywords: 'domain checker, vercel domain, domain finder, domain name, domain search, available domains',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  openGraph: {
    type: 'website',
    title: 'Vercel Domain Checker',
    description: 'Check domain availability for vercel.app and get smart suggestions',
    siteName: 'Vercel Domain Checker',
    images: '/og-image.png'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Domain Finder',
    description: 'Check domain availability for vercel.app and get smart suggestions',
    images: '/og-image.png'
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <div className="z-10 relative">{children}</div>
        <div className="md:block hidden fixed inset-0 pointer-events-none">
          <BackgroundGrid className="absolute inset-0 opacity-50 dark:opacity-20" />
        </div>
        <div className="md:hidden block fixed inset-0 pointer-events-none">
          <BackgroundGridMobile className="absolute inset-0 opacity-50 dark:opacity-20" />
        </div>
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}
