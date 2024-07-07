import Link from 'next/link';
import Image from 'next/image';
import '../styles/globals.css'
import Head from './head';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ColorfulCoding - XR experiences',
  description: 'End-to-end XR experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body className="w-full">
        {children}
      </body>
    </html>
  )
}
