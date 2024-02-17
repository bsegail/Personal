import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import React from 'react'

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bailey Segail | Technical Lead",
  description: "I’m a Tech Lead that’s delivered inspiring digital products for some of Australia’s largest brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>{'Bailey Segail | Technical Lead'}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/favicon/site.webmanifest"/>
    </head>
    <body className={rubik.className}>{children}</body>
    </html>
  );
}
