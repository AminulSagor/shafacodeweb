import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shafacode - Next Generation Software Development',
  description: 'Shafacode - Next Generation Software Development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
