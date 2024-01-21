import { Columns } from "@/components/TicketsHome/Columns"
import { DataTable } from "@/components/TicketsHome/DataTable"
import { TICKETDATASTATIC, TicketsData } from "@/constants/Tickets"
import { DASHBOARDSTATIC } from "@/constants/Dashboard"
import { DashboardCardProps } from "@/interfaces/Dashboard"
import { DashboardCard } from "@/components/dashboard_home/DashboardCard"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RocketLaunchIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { TicketCard } from "@/components/dashboard_ticket/TicketCard"

const TicketsHomePage = () => {
  return (
    <section className='flex flex-col gap-6'>
      <div className='col-span-4 grid grid-flow-col gap-4 row-span-1'>
        {
          TICKETDATASTATIC.map((item: DashboardCardProps, index: number) => (
            <TicketCard
              key={index}
              title={item.title}
              icon={item.icon}
              value={item.value}
              oldValue={item.oldValue}
            />
          ))
        }
        <Card className='bg-white w-auto'>
          <CardHeader className='flex flex-row gap-y-2 gap-x-8 items-center w-full justify-between'>
            <CardTitle className='text-gray-700'>Acciones rápidas</CardTitle>
            <span className='pb-1.5 text-xl'><RocketLaunchIcon className='h-6 w-6 text-stone-700' /></span>
          </CardHeader>
          <CardContent className='grid grid-cols-1 grid-rows-3 gap-1'>
            <Button className='bg-stone-700 text-white w-full rounded-xl hover:bg-stone-900 transition-all duration-300 ease-in-out'>Crear ticket</Button>
            <Button className='bg-cyan-700 text-white w-full rounded-xl hover:bg-stone-900 transition-all duration-300 ease-in-out'>Crear cliente</Button>
            <Button className='bg-orange-700 text-white w-full rounded-xl hover:bg-stone-900 transition-all duration-300 ease-in-out'>Obtener soporte</Button>
          </CardContent>
        </Card>
      </div>
      <DataTable columns={Columns} data={TicketsData} />
    </section>
  )
}

export default TicketsHomePage