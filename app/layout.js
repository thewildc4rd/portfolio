import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sabrina Nahabedian',
  description: 'My portfolio website',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} min-h-screen flex-col flex`}>
        <Navbar />
        <div className='flex-1'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
