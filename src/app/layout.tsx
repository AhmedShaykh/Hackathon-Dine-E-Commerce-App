import Providers from '@/Components/Providers';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Head from './Head';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <Providers>
        <body>
          <Navbar />
          {children}
          <Toaster
            reverseOrder={true}
          />
          <Footer />
        </body>
      </Providers>
    </html>
  )
};