import { TicketIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const DASHBOARDSTATIC = [
  {
    title: 'Tickets pendientes',
    value: 2,
    oldValue: 0,
    icon: <TicketIcon className="h-6 w-6 text-stone-700 fill-orange-400" aria-hidden="true" />,
  },
  {
    title: 'Tickets asignados',
    value: 4,
    oldValue: 20,
    icon: <TicketIcon className="h-6 w-6 text-stone-700 fill-cyan-400" aria-hidden="true" />,
  },
  {
    title: 'Tickets cerrados',
    value: 9,
    oldValue: 20,
    icon: <TicketIcon className="h-6 w-6 text-stone-700 fill-lime-400" aria-hidden="true" />,
  },
  {
    title: 'Clientes registrados',
    value: 4,
    oldValue: 4,
    icon: <UserCircleIcon className="h-6 w-6 text-stone-700" aria-hidden="true" />,
  }
]

export { DASHBOARDSTATIC }