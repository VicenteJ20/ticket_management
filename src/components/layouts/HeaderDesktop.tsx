'use client'
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuGroup } from "../ui/dropdown-menu"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { MENULINKS } from "@/constants/Navbar"
import { BellAlertIcon } from "@heroicons/react/24/outline"

const HeaderDesktop = () => {
  const router = useRouter()
  const session = useSession()
  const searchUrl = usePathname()
  const url = searchUrl.split('/').pop()?.toString() as any

  // Selecciona las iniciales para mostrar el avatar sin imagen al estilo de GMAIL o similares
  const user = session.data?.user?.name?.split(' ').map((n: string) => n[0]).join('') || 'A'
  return (
    <div className='fixed left-56 right-0 bg-white dark:bg-zinc-800 h-16 max-w-screen px-8 py-5 flex flex-row gap-4 items-center justify-between'>
      <h2 className='text-lg font-semibold'>{url[0].toUpperCase() + url.substring(1)}</h2>
      <ul className='flex flex-row gap-3 items-center'>
        <li className='relative w-fit'>
          <div className='rounded-full w-3 h-3 border-2 border-zinc-900 bg-orange-300 absolute -top-0.5 -right-0.5' />
          <BellAlertIcon className='w-6 h-6' />
        </li>
        <li className='relative'>
          <DropdownMenu>
            <DropdownMenuTrigger className='outline-none select-none'>
              <Avatar>
                <AvatarImage src='' />
                <AvatarFallback className='bg-zinc-600 text-white'>{user}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white mr-8'>
              <DropdownMenuLabel className='px-4'>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className='p-0 gap-0'>
                {
                  MENULINKS.map((link, index: number) => (
                    <DropdownMenuItem key={index} onClick={() => router.push(`/dashboard/${link.href}`)} title={`Ir a ${link.title}`}>
                      <span className='hover:bg-zinc-600 hover:text-white transition-all duration-300 cursor-pointer w-full px-2 py-1'>{link.title}</span>
                    </DropdownMenuItem>
                  ))
                }
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </div>
  )
}

export { HeaderDesktop }