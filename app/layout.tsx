import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Header } from '@/src/widgets/header'
import { Footer } from '@/src/widgets/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cut It Short',
  description: 'Фильмы короткого метра',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-x-black min-h-screen text-x-secondary">
          <div className="flex flex-col max-w-screen-2xl mx-auto">
            <Header />
            <main className="h-full grow">{children}</main>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  )
}
