import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Software Developer",
  description: "Professional portfolio showcasing my skills, projects, and experience as a software developer. Specializing in modern web development with React, Next.js, and TypeScript.",
  keywords: ["software developer", "web developer", "portfolio", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Software Developer",
    description: "Professional portfolio showcasing my skills and projects",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
