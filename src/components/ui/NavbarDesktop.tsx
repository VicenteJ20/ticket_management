'use client'

import Link from "next/link"
import { NAVBAR_ITEMS } from "@/constants/Navbar"
import { AlertDialogTrigger, AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from "./alert-dialog"
import { ItemNav } from "@/interfaces/ItemNav"
import { usePathname } from "next/navigation"

const NavbarDesktop = () => {
  
  const searchUrl = usePathname()
  const url = searchUrl.toString() as any

  return (
    <section className='p-4 flex flex-col gap-3 w-56 min-h-fit h-screen justify-between fixed bg-white'>
      <header className='h-16'>
        <h2 className='block text-xl lg:text-2xl font-semibold'>
          <Link href='/' className='px-1'>Ticket Planner</Link>
        </h2>
      </header>
      <ul className="flex flex-col gap-3 py-7 h-full">
        {
          NAVBAR_ITEMS.map((item: ItemNav, index: number) => (
            <li key={index}>
              <Link href={item.href} title={item.title}
                className={`flex flex-row gap-3 items-center px-2 hover:bg-zinc-700 hover:text-white transition-colors duration-300 py-2 rounded-md ${url === item.href ? 'bg-zinc-700 text-white' : 'text-zinc-700'}`}
              >{item.icon} {item.title}</Link>
            </li>
          ))
        }
      </ul>
      <AlertDialog>
        <AlertDialogTrigger
          className='bg-red-500 text-white w-full hover:bg-zinc-700 transition-colors duration-300 py-2'
        >Cerrar sesión</AlertDialogTrigger>
        <AlertDialogContent className='bg-white'>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro de que quieres cerrar sesión?</AlertDialogTitle>
            <AlertDialogDescription>
              Si cierras tu sesión actual, deberás volver a iniciar sesión en este equipo la próxima vez que accedas, esta acción es recomendable en equipos compartidos o públicos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}

export { NavbarDesktop }