import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-hanken-grotesk'
})

export const metadata: Metadata = {
  title: "Jaysel Chit Funds - Build Wealth With Trust",
  description: "Empowering dreams through transparent, flexible chit fund solutions. Join 100,000+ satisfied customers with Jaysel Chit Funds.",
  icons: {
    icon: [
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
        sizes: "32x32"
      },
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    apple: [
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
        sizes: "180x180"
      }
    ],
    shortcut: [{ url: "/images/idevibelogo.png" }],
    other: [
      {
        rel: "icon",
        url: "/images/idevibelogo.png",
      },
    ],
  },
  manifest: "/manifest.json",
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/idevibelogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/idevibelogo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/idevibelogo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${hankenGrotesk.variable} font-sans bg-black bg-dotted-grid`}>{children}</body>
    </html>
  );
}
