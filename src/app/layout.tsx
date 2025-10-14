// Is file ka maqsad hai aapki main website ke har page par ek jaisa structure (jaise header, footer) aur zaroori scripts (jaise analytics) ko lagana.

// Hum zaroori cheezein import kar rahe hain.
import { ClarityScript } from '@/components/analytics/ClarityScript'; // Humara naya "CCTV camera" component
import { Suspense } from 'react'; // Yeh Next.js ka ek tool hai jo client components ko aaram se load karne mein madad karta hai
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; // Aapki global CSS file

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
      {/* HEAD SECTION: Yahan par hum zaroori scripts rakhte hain.
        Suspense component ke andar ClarityScript daalne se website ki performance achhi rehti hai.
      */}
      <head>
        <Suspense>
          <ClarityScript />
        </Suspense>
      </head>
      
      {/* BODY SECTION: Yahan par aapki website ka content (pages) dikhta hai */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

