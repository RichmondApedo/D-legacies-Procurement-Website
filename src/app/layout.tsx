import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';

// const inter = { className: 'font-sans' };
const fontSans = { className: 'font-sans' };

export const metadata: Metadata = {
  title: "D'LEGACIES | Procurement Consulting Accra",
  description: "D'LEGACIES E-PROCUREMENT CONSULT provides expert sourcing of goods and services for businesses, brands, and organizations in Accra, Ghana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.className} antialiased flex flex-col min-h-screen`}>
        <FirebaseClientProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          < Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
