import type { Metadata } from "next";
import type { ReactNode } from "react";
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
  title: {
    default:
      "Bob Sosamphanxay | Application Security Developer",

    template:
      "%s | Bob Sosamphanxay",
  },

  description:
    "Portfolio of Bob Sosamphanxay, a developer focused on application security, cybersecurity and secure software development.",

  keywords: [
    "Application Security",
    "Cybersecurity",
    "Secure Software Development",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "RBAC",
    "JWT",
    "Web Security",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}