import Navbar from '../components/navigation/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="w-full min-h-screen bg-slate-50">
        <Navbar />
        <div className="w-full min-h-screen flex flex-col justify-top items-center gap-20 mb-[100px]">{children}</div>
      </body>
    </html>
  );
}
