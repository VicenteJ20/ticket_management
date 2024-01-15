import { Square3Stack3DIcon, TagIcon, UserIcon, UsersIcon, Cog6ToothIcon } from "@heroicons/react/20/solid"

export const NAVBAR_ITEMS = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <Square3Stack3DIcon className='w-6 h-6' />,
  },
  {
    title: 'Tickets',
    href: '/dashboard/tickets',
    icon: <TagIcon className='w-6 h-6' />,
  },
  {
    title: 'Clientes',
    href: '/dashboard/clientes',
    icon: <UsersIcon className='w-6 h-6' />,
  },
  {
    title: 'Colaboradores',
    href: '/dashboard/colaboradores',
    icon: <UserIcon className='w-6 h-6' />,
  },
  {
    title: 'Configuración',
    href: '/dashboard/configuracion',
    icon: <Cog6ToothIcon className='w-6 h-6' />,
  },
]

export const MENULINKS = [
  {
    title: 'Perfil',
    href: '/dashboard/perfil',
  },
  {
    title: 'Configuración',
    href: '/dashboard/configuracion',
  },
  {
    title: 'Tema',
    href: '/dashboard/tema',
  }
]