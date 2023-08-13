import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Local Meetup',
  description: 'The Local Meetup is a web-based application created by students from the Zero To Mastery Academy. The goal of the app is to make it easier for ZTM students to find local meetups near them and to track the history of the local meetups.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
