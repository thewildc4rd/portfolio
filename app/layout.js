import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

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
      <body
        className={`${poppins.className} min-h-screen flex-col flex bg-space-cadet-dark text-lavender overflow-x-hidden`}
      >
        <Navbar />
        <div className='flex-1'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
