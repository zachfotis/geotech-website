import Navbar from '../components/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="relative max-w-full min-h-screen bg-slate-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
