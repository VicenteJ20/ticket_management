import { DashboardCard } from "@/components/dashboard_home/DashboardCard"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DASHBOARDSTATIC } from "@/constants/Dashboard"
import { DashboardCardProps } from "@/interfaces/Dashboard"

const DashboardHome = () => {
  return (
    <section className='flex flex-col gap-6 h-full'>
      <div className='flex w-full gap-4 items-center'>
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
      <div className='grid grid-cols-3 gap-4 h-full'>
        <div className='col-span-2'>
          a
        </div>
        <Card className='bg-white col-span-1'>
          <CardHeader>
            <CardTitle>Acciones recientes</CardTitle>
            <CardDescription
             className='text-zinc-500'
            >Detalles de acciones realizadas con los tickets marcados como importantes</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}

export default DashboardHome