import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components'
import { ToasterProvider } from '@/providers'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Motorola Solutions Code Challenge',
  description: 'Web Challenge'
}

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Header />
        <ToasterProvider>
          {children}
        </ToasterProvider>
      </body>
    </html>
  )
}
