import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ritam Bharat - Bringing Order to Ambition",
  description: "Simple, powerful software for India's small and medium businesses. System Sahi. Sab Sahi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

