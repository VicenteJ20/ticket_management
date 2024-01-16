'use client'
import { NavbarDesktop } from "@/components/ui/NavbarDesktop"
import { HeaderDesktop } from "./HeaderDesktop"

const DashboardLayout = ({ children }: any) => {
  return (
    <>
      <NavbarDesktop />
      <HeaderDesktop />
      <section className='pl-64 pr-8 pb-4 pt-24 bg-zinc-50 max-w-screen min-h-screen ' suppressHydrationWarning>
        {children}
      </section>
    </>
  )
}

export { DashboardLayout }