import { TicketTable } from "@/interfaces/TicketTable";
import { TicketIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const TicketsData: TicketTable[] = [
  {
    id: 1,
    title: 'Ticket 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.',
    finished: false,
    priority: 1,
    created_at: '2021-09-01',
    manager: 'vicente@gmail.com',
    client: 'smartparking@parking.com'
  },
  {
    id: 2,
    title: 'Ticket 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.',
    finished: false,
    priority: 2,
    created_at: '2021-09-01',
    manager: 'vicente@gmail.com',
    client: 'smartparking@parking.com'
  },
  {
    id: 3,
    title: 'Ticket 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.',
    finished: false,
    priority: 3,
    created_at: '2021-09-01',
    manager: 'vicente@gmail.com',
    client: 'smartparking@parking.com'
  },
  {
    id: 4,
    title: 'Ticket 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.',
    finished: true,
    priority: 3,
    created_at: '2021-09-01',
    manager: 'vicente@gmail.com',
    client: 'smartparking@parking.com'
  },
  {
    id: 5,
    title: 'Ticket 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.',
    finished: true,
    priority: 2,
    created_at: '2021-09-01',
    manager: 'vicente@gmail.com',
    client: 'smartparking@parking.com'
  },
  {
    id: 6,
    title: 'Ticket 6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.',
    finished: false,
    priority: 2,
    created_at: '2021-09-01',
    manager: 'thor@gmail.com',
    client: 'coopernico@ticketmanager.com'
  },
  {
    id: 7,
    title: 'Ticket 7',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.',
    finished: false,
    priority: 3,
    created_at: '2022-04-02',
    manager: 'thor@gmail.com',
    client: 'coopernico@ticketmanager.com'
  },
  {
    id: 8,
    title: 'Ticket 8',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.',
    finished: true,
    priority: 3,
    created_at: '2024-10-21',
    manager: 'thor@gmail.com',
    client: 'coopernico@ticketmanager.com'
  },
  {
    id: 9,
    title: 'Ticket 9',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.',
    finished: true,
    priority: 2,
    created_at: '2024-01-15',
    manager: 'vicente@gmail.com',
    client: 'smartparking@parking.com'
  }
]

const TICKETDATASTATIC = [
  {
    title: 'Tickets pendientes',
    value: 2,
    oldValue: 0,
    icon: <TicketIcon className="h-6 w-6 text-stone-700 fill-orange-400" aria-hidden="true" />,
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

export { TicketsData, TICKETDATASTATIC }