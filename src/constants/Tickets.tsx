import { TicketTable } from "@/interfaces/TicketTable";

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
  }
]

export { TicketsData }