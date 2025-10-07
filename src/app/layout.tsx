import type { Metadata } from 'next'
import './globals.css'
import SpeedInsightsWrapper from '@/components/SpeedInsightsWrapper';

export const metadata: Metadata = {
  title: 'Ritam Bharat - Bringing Order to Ambition',
  description: 'We build elegant software systems for India\'s small and medium businesses, turning their daily chaos into clarity and growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6231830445101258" crossOrigin="anonymous"></script>
      </head>
      <body className="bg-sandstone text-gray-800 font-sans antialiased">
        {children}
        <SpeedInsightsWrapper />
      </body>
    </html>
  )
}
