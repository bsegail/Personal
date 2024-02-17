import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import React from 'react'

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bailey Segail",
  description: "I’m a purpose driven, senior engineer that leads teams and aligns business goals, project outcomes, and user needs when creating digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>{'Bailey Segail'}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/favicon/site.webmanifest"/>
    </head>
    <body className={rubik.className}>{children}</body>
    </html>
  );
}
