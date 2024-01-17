import { Columns } from "@/components/TicketsHome/Columns"
import { DataTable } from "@/components/TicketsHome/DataTable"
import { TicketsData } from "@/constants/Tickets"

const TicketsHomePage = () => {
  return (
    <section>
      <DataTable columns={Columns} data={TicketsData} />
    </section>
  )
}

export default TicketsHomePage