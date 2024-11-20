import type {Metadata} from 'next';

import './global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export const metadara: Metadata = {
  title: 'Travel',
  description: 'Travel app for climbing and hiking',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hideen">
          {children}
        </main>
        <Footer />
      </body>
      </html>
  )
}