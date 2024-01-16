'use client'

import { DashboardCard } from "@/components/dashboard_home/DashboardCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DASHBOARDSTATIC, RECENTACTIONS } from "@/constants/Dashboard"
import { DashboardCardProps } from "@/interfaces/Dashboard"
import { EyeIcon } from "@heroicons/react/24/outline"
import dynamic from "next/dynamic"

const AreaChart = dynamic(() => import('@/components/dashboard_home/AreaChart'), { ssr: false })

const DashboardHome = () => {
  return (
    <section className='grid grid-cols-4 gap-x-3 gap-y-4 grid-rows-3'>
      <div className='col-span-4 grid grid-flow-col gap-4 row-span-1'>
        {
          DASHBOARDSTATIC.map((item: DashboardCardProps, index: number) => (
            <DashboardCard
              key={index}
              title={item.title}
              icon={item.icon}
              value={item.value}
              oldValue={item.oldValue}
            />
          ))
        }
      </div>
      <Card className='col-span-3 bg-white h-full row-start-2 row-end-4 mr-1.5'>
        <CardHeader>
          <CardTitle className='text-xl'>Resumen de inicidencias</CardTitle>
          <CardDescription className='text-stone-600'>
            Este es un resumen de las insidencias totales por área dentro de la empresa, junto con el porcentaje de avance de cada una de ellas y los clientes involucrados.
          </CardDescription>
          <CardContent className='flex flex-col gap-4'>
            <AreaChart />
          </CardContent>
        </CardHeader>
      </Card>
      <Card className='col-span-1 bg-white row-start-2 row-end-4'>
        <CardHeader>
          <CardTitle>Acciones recientes</CardTitle>
          <CardDescription className='text-stone-600'>Aquí se muestra un resumen de las acciones que realiza usted y/o sus colaboradores respectos a tickets donde usted se encuentre involucrado</CardDescription>
        </CardHeader>
        <CardContent className='px-6 flex flex-col gap-4'>
          {
            RECENTACTIONS.map((item: any, index: number) => (
              <div key={index} className="flex flex-row gap-2 justify-between items-center">
                <div className='flex flex-col gap-1'>
                  <span className='font-medium'>{item.email}</span>
                  <span>{item.action}</span>
                </div>
                <Button className='bg-transparent hover:bg-zinc-700 hover:text-zinc-50 transition-all duration-300 ease-in-out shadow-none border-none'><EyeIcon className='w-5 h-5 font-bold' /></Button>
              </div>
            ))
          }
        </CardContent>
      </Card>
    </section>
  )
}

export default DashboardHome