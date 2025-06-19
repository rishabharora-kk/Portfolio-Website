import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#10b981" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Rishabh Arora - AI Engineer & Full-Stack Developer",
    template: "%s | Rishabh Arora",
  },
  description:
    "Professional portfolio of Rishabh Arora, AI Engineer and Full-Stack Developer specializing in Machine Learning, Computer Vision, and Web Development. Explore innovative projects and technical expertise.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "Full-Stack Developer",
    "YOLO",
    "Python",
    "React",
    "Next.js",
    "Portfolio",
    "Rishabh Arora",
  ],
  authors: [{ name: "Rishabh Arora", url: "https://rishabharora.dev" }],
  creator: "Rishabh Arora",
  publisher: "Rishabh Arora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rishabharora.dev",
    title: "Rishabh Arora - AI Engineer & Full-Stack Developer",
    description: "Professional portfolio showcasing AI/ML projects, web development skills, and technical expertise.",
    siteName: "Rishabh Arora Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rishabh Arora - AI Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Arora - AI Engineer & Full-Stack Developer",
    description: "Professional portfolio showcasing AI/ML projects, web development skills, and technical expertise.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://rishabharora.dev",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
