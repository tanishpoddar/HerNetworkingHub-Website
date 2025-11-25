import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import GoToTop from "@/components/GoToTop";
import StructuredData from "@/components/StructuredData";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HerNetworkingHub - Exclusive Women's Community | Network • Grow • Succeed",
  description: "Join HerNetworkingHub, an exclusive community for ambitious women entrepreneurs, founders, investors, and business leaders. Connect, collaborate, and create real impact with powerhouse women worldwide.",
  keywords: ["women entrepreneurs", "women's networking", "business women community", "female founders", "women investors", "professional women network", "women empowerment", "business networking for women"],
  authors: [{ name: "HerNetworkingHub" }],
  creator: "HerNetworkingHub",
  publisher: "HerNetworkingHub",
  metadataBase: new URL('https://hernetworkinghub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "HerNetworkingHub - Exclusive Women's Community",
    description: "Connect with powerhouse women entrepreneurs, founders, and business leaders. Join our exclusive community where collaboration meets empowerment.",
    url: 'https://hernetworkinghub.com',
    siteName: 'HerNetworkingHub',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'HerNetworkingHub - Exclusive Women\'s Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "HerNetworkingHub - Exclusive Women's Community",
    description: "Connect with powerhouse women entrepreneurs, founders, and business leaders. Join our exclusive community.",
    images: ['/logo.png'],
    creator: '@hernetworkinghub',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
      <body className={`${poppins.variable} bg-background-light dark:bg-background-dark font-display text-foreground-dark antialiased`} suppressHydrationWarning>
        <CustomCursor />
        <GoToTop />
        {children}
      </body>
    </html>
  );
}
