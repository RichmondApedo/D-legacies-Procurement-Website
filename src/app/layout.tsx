import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';

// const inter = { className: 'font-sans' };
const fontSans = { className: 'font-sans' };

const baseUrl = 'https://dlegacies.vercel.app'; // Update this to your final domain if different

export const metadata: Metadata = {
  title: {
    default: "D'LEGACIES | Elite Procurement & Sourcing Solutions Accra",
    template: "%s | D'LEGACIES Procurement"
  },
  description: "D'LEGACIES E-PROCUREMENT CONSULT provides institutional-grade sourcing, global logistics, and strategic procurement intelligence for businesses in Accra, Ghana, and beyond.",
  keywords: ["Procurement Consulting Accra", "Sourcing from China to Ghana", "Supply Chain Africa", "Institutional Logistics", "Executive Procurement Consult"],
  authors: [{ name: "D'LEGACIES E-PROCUREMENT CONSULT" }],
  creator: "D'LEGACIES",
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: baseUrl,
    title: "D'LEGACIES | Elite Procurement Consulting",
    description: "Ghana's premier partner for institutional-grade sourcing and global logistics. Elevate your supply chain with D'LEGACIES.",
    siteName: "D'LEGACIES E-PROCUREMENT CONSULT",
    images: [
      {
        url: "/images/shipping_global.png",
        width: 1200,
        height: 630,
        alt: "D'LEGACIES Global Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D'LEGACIES | Procurement Excellence Africa",
    description: "Sourcing, Logistics, and Procurement Intelligence in Accra, Ghana.",
    images: ["/images/shipping_global.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
