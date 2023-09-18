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

  // const header = (
  //   <header>
  //     <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
  //       <Image src="/next.svg" alt="Next.js Logo" width={100} height={100} className='mx-auto' /> 
  //       <Link href="/"><h1 className='text-3xl text-white font-bold'>ColorfulCoding Blog</h1></Link>
  //       <p className='text-slate-300'>Welcome to my blog</p>
  //     </div>
  //   </header >
  // );

  // const footer = (
  //   <footer className='border-t border-slate-400 mt-6 py-6 text-center text-slate-400'>
  //     <div>
  //       <h3>Made with ❤️ in Iași</h3>
  //     </div>
  //   </footer>
  // );


  return (
    <html lang="en">
      <Head />
      <body className="w-full">
        {children}
      </body>
    </html>
  )
}
