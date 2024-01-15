import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Ticket Manager',
    template: '%s | Ticket Manager',
  },
  description: 'Este proyecto es un organizador de tickets con soporte de usuarios, es ideal para negocios pequeños que necesitan un sistema de gestión de tickets para trabajar con sus clientes y de forma colaborativa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
