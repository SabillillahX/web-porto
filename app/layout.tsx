import '../styles/globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export const metadata = {
  title: 'Sabillillah | Portfolio',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  description: 'Portfolio site for Brown Mayers – Web Developer & Designer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-gray-900 text-white min-h-screen flex flex-col dark:bg-white dark:text-gray-900">
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}