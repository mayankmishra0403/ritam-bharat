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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ritam Bharat Software",
          "url": "https://www.ritambharat.software",
          "logo": "https://www.ritambharat.software/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@ritambharat.software",
            "contactType": "Customer Service"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kanpur",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
          },
          "potentialAction": {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.ritambharat.software",
              "inLanguage": "en-US",
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/IOSPlatform",
                "http://schema.org/AndroidPlatform"
              ]
            },
            "name": "Request a Demo"
          },
          "sameAs": [
            "https://www.youtube.com/@Ritambharat",
            "https://www.linkedin.com/company/ritam-bharat/",
            "https://x.com/Ritam_bharat",
            "https://www.instagram.com/ritam_bharat/"
          ]
        }) }} />
      </head>
      <body className="bg-sandstone text-gray-800 font-sans antialiased">
        {children}
        <SpeedInsightsWrapper />
      </body>
    </html>
  )
}
