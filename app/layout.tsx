import './globals.css'
import { Inter } from 'next/font/google'
import Gtm from './gtm'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Regalos Para Mama',
  description: 'Una tienda online con una exclusiva selección de regalos para mama',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
          <Gtm/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
