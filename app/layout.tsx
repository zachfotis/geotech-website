import Footer from '@/components/navigation/Footer';
import Navbar from '@/components/navigation/Navbar';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geotech Energy',
  description:
    'Geotech S.A. offers specialized services and in situ support, evaluation, exploitation and management of Groundwater resources, Ground Renewable Energy sources, Mining Resources, and Geotechnical and Environmental applications.',
  keywords:
    'oil, gas, energy, renewable, energy, wireline, slickline, coiled tubing, geotechnical, groundwater, well logging, well construction, surface geophysics',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="w-full min-h-screen bg-slate-50">
        <Navbar />
        <div className="w-full min-h-screen flex flex-col justify-top items-center gap-20 mb-[100px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
