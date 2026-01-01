import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: 'Michael Adeleye | Full-Stack Software Developer & Designer',
    template: '%s | Michael Adeleye'
  },
  description: 'Full-stack software developer specializing in modern web applications. Expert in React, Next.js, TypeScript, Node.js, and cloud technologies. Building scalable, performant solutions for businesses.',
  keywords: [
    'Michael Adeleye',
    'Software Developer',
    'Full-Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Node.js',
    'JavaScript',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
    'Portfolio',
    'Creative Mike Studios'
  ],
  authors: [{ name: 'Michael Adeleye', url: 'https://mikeadeleye.dev' }],
  creator: 'Michael Adeleye',
  publisher: 'Michael Adeleye',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mikeadeleye.dev',
    siteName: 'Michael Adeleye Portfolio',
    title: 'Michael Adeleye | Full-Stack Software Developer & Designer',
    description: 'Full-stack software developer specializing in modern web applications. Expert in React, Next.js, TypeScript, Node.js, and cloud technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Michael Adeleye - Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michael Adeleye | Full-Stack Software Developer',
    description: 'Full-stack software developer specializing in modern web applications.',
    creator: '@mikeadeleye',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://mikeadeleye.dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${notoSansSC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
