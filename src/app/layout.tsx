import './globals.css'
import { NextAuthProvider } from '@/providers/auth'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight:[ '100','200','300','400', '500', '600', '700', '800', '900',]})

export const metadata: Metadata = {
  title: 'Authentication System',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body className={poppins.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
