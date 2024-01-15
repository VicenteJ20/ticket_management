import { DashboardLayout } from '@/components/layouts/DashboardLayout'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { OPTIONS } from '../api/[auth]/[...nextauth]/route'
import { redirect } from 'next/navigation'
import SessionProvider from '@/components/providers/SessionProvider'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Bienvenido al dahsboard aquí podrás administrar los tickets de tus clientes junto a tus colaboradores de forma fácil y sencilla.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(OPTIONS)

  if (!session) return redirect('/auth/signin')
  return (
    <SessionProvider session={session}>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </SessionProvider>
  )
}
