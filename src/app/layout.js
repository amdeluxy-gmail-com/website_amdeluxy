import Hero from '@/components/hero'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AM Deluxy',
  description: 'Software Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Hero/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
