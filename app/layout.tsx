import type { Metadata } from "next";
import { Poppins, Montserrat, Inter, Roboto } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import GoToTop from "@/components/GoToTop";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "HerNetworkingHub - Exclusive Women's Community | Network • Grow • Succeed",
    template: "%s | HerNetworkingHub"
  },
  description: "Join HerNetworkingHub, the premier exclusive community for ambitious women entrepreneurs, founders, investors, and business leaders. Connect, collaborate, and create real impact with powerhouse women worldwide. Official website: hernetworkinghub.online",
  keywords: [
    "HerNetworkingHub",
    "hernetworkinghub",
    "her networking hub",
    "women entrepreneurs network",
    "women's networking community",
    "business women community",
    "female founders network",
    "women investors community",
    "professional women network",
    "women empowerment network",
    "business networking for women",
    "women entrepreneurs India",
    "women business leaders",
    "female entrepreneur community",
    "women in business",
    "women's professional network",
    "ambitious women network",
    "women founders community",
    "women CEO network",
    "women business owners",
    "exclusive women's community",
    "women collaboration network",
    "women mentorship network",
    "women leadership community"
  ],
  authors: [{ name: "HerNetworkingHub", url: "https://www.hernetworkinghub.online" }],
  creator: "HerNetworkingHub",
  publisher: "HerNetworkingHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.hernetworkinghub.online'),
  alternates: {
    canonical: 'https://www.hernetworkinghub.online',
  },
  openGraph: {
    title: "HerNetworkingHub - Exclusive Women's Community | Network • Grow • Succeed",
    description: "Join the premier exclusive community for ambitious women entrepreneurs, founders, investors, and business leaders. Connect with powerhouse women worldwide and create real impact together.",
    url: 'https://www.hernetworkinghub.online',
    siteName: 'HerNetworkingHub',
    images: [
      {
        url: 'https://www.hernetworkinghub.online/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HerNetworkingHub - Exclusive Women\'s Community for Entrepreneurs and Business Leaders',
        type: 'image/png',
      },
      {
        url: 'https://www.hernetworkinghub.online/logo.png',
        width: 512,
        height: 512,
        alt: 'HerNetworkingHub Logo',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: "HerNetworkingHub - Exclusive Women's Community | Network • Grow • Succeed",
    description: "Join the premier exclusive community for ambitious women entrepreneurs, founders, investors, and business leaders. Connect with powerhouse women worldwide.",
    images: ['https://www.hernetworkinghub.online/og-image.png'],
    creator: '@hernetworkinghub',
    site: '@hernetworkinghub',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'business',
  classification: 'Business Networking, Women Empowerment, Professional Community',
  other: {
    'application-name': 'HerNetworkingHub',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'HerNetworkingHub',
    'mobile-web-app-capable': 'yes',
    'theme-color': '#FF007F',
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
        <link rel="canonical" href="https://www.hernetworkinghub.online" />
        <link rel="alternate" hrefLang="en" href="https://www.hernetworkinghub.online" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
      <body className={`${poppins.variable} ${montserrat.variable} ${inter.variable} ${roboto.variable} bg-background-light dark:bg-background-dark font-body text-foreground-dark antialiased`} suppressHydrationWarning>
        <CustomCursor />
        <GoToTop />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
