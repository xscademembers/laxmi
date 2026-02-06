import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Laxmi Engineering Equipments - Agricultural & Industrial Equipment Manufacturer",
    template: "%s | Laxmi Engineering Equipments",
  },
  description: "Trusted manufacturer of Hydraulic Tractor Trolleys, Water Tankers, and Storage Tanks since 1996. ISO 9001:2015 certified. Based in Nagpur, Maharashtra.",
  keywords: [
    "tractor trolley",
    "water tanker",
    "storage tanks",
    "agricultural equipment",
    "industrial equipment",
    "Vidarbha",
    "Nagpur",
    "hydraulic trolley",
    "bitumen tank",
    "polymer tank",
    "M.S. storage tank",
  ],
  authors: [{ name: "Laxmi Engineering Equipments" }],
  creator: "Laxmi Engineering Equipments",
  publisher: "Laxmi Engineering Equipments",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "Laxmi Engineering Equipments",
    title: "Laxmi Engineering Equipments - Agricultural & Industrial Equipment Manufacturer",
    description: "Trusted manufacturer of Hydraulic Tractor Trolleys, Water Tankers, and Storage Tanks since 1996. ISO 9001:2015 certified.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Laxmi Engineering Equipments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laxmi Engineering Equipments - Agricultural & Industrial Equipment Manufacturer",
    description: "Trusted manufacturer of Hydraulic Tractor Trolleys, Water Tankers, and Storage Tanks since 1996.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
