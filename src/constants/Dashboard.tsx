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

const RECENTACTIONS = [
  {
    username: 'Vicente Jorquera',
    email: 'vicente@gmail.com',
    action: 'Creó el ticket #123',
    date: '11/01/2024 13:29',
  },
  {
    username: 'Jhon Doe',
    email: 'jhondoe@gmail.com',
    action: 'Actualizó el ticket #123',
    date: '13/01/2024 23:44',
  },
  {
    username: 'Emma Martin',
    email: 'emma.martin@gmail.com',
    action: 'Creó el ticket #1289',
    date: '15/01/2024 17:12',
  }
]

const AREACHARTDATA = {
  labels: [
    'Soporte TI',
    'Desarrollo comercial',
    'Desarrollo interno',
    'Insumos',
    'Infraestructura',
  ],
  datasets: [
    {
      label: 'Tickets vencidos',
      borderRadius: 30,
      data: [2, 3, 13, 5, 1, 4],
      backgroundColor: '#b71947',
      barThickness: 10,
    },
    {
      label: 'Tickets asignados',
      borderRadius: 30,
      data: [5, 1, 2, 15, 2, 3],
      backgroundColor: '#0bb3cf',
      barThickness: 10,
    }
  ]
}

const CHART_OPTIONS = {
  plugins: {
    legend: {
      position: 'top',
      align: 'start',
      labels: {
        boxWidth: 7,
        usePointStyle: true,
        pointStyle: 'circle',
      },
      title: {
        text: 'Tickets',
        display: true,
        color: '#111827',
        font: {
          size: 18,
          weight: 'bold',
        },
      }
    }
  },
  scales: {
    x: {
      min: 0,
      max: 10,
      ticks: {
        stepSize: 1,
      }
    },
    y: {
      min: 0,
      max: 10,
      ticks: {
        stepSize: 0.5,
      }
    }
  },
  elements: {
    bar: {
      barPercentage: 0.3,
      categoryPercentage: 0.5,
    }
  }
}

export { DASHBOARDSTATIC, RECENTACTIONS, AREACHARTDATA, CHART_OPTIONS }