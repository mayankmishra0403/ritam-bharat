// Is file ka maqsad hai aapki main website ke har page par ek jaisa structure (jaise header, footer) aur zaroori scripts (jaise analytics) ko lagana.

// Hum zaroori cheezein import kar rahe hain.
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Aapki global CSS file

const inter = Inter({ subsets: ["latin"] });

// Website ka metadata (jo Google search mein dikhta hai)
export const metadata: Metadata = {
  title: "Ritam Bharat - Bringing Order to Ambition",
  description: "Simple, powerful software for India's small and medium businesses. System Sahi. Sab Sahi.",
};

// Yeh aapka main layout component hai
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      
      {/* BODY SECTION: Yahan par aapki website ka content (pages) dikhta hai */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

