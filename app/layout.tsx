import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abreham Bekele - Full-Stack Engineer & Mobile Developer',
  description: 'Professional portfolio of Abreham Bekele, a Full-Stack Engineer with expertise in React, Node.js, React Native, and Flutter development.',
  keywords: 'Full-Stack Engineer, Mobile Developer, React, Node.js, React Native, Flutter, Web Development',
  authors: [{ name: 'Abreham Bekele' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
