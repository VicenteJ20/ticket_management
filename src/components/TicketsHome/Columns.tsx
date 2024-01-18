'use client'

import { ColumnDef } from '@tanstack/react-table'
import { TicketTable } from '@/interfaces/TicketTable'
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { ArrowsUpDownIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

export const Columns: ColumnDef<TicketTable>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'title',
    header: 'Titulo',
  },
  {
    accessorKey: 'description',
    header: 'Descripción',
  },
  {
    accessorKey: 'finished',
    header: 'Estado',
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
          Prioridad
          <ArrowsUpDownIcon className='h-4 w-4 ml-2' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'created_at',
    header: 'Fecha de creación',
  },
  {
    accessorKey: 'manager',
    header: 'Encargado',
  },
  {
    accessorKey: 'client',
    header: 'Cliente',
  },
  {
    accessorKey: 'actions',
    header: 'Acciones',
    cell: ({ row }) => {
      const ticket = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-6
             w-6 p-0 text-center text-zinc-600'>
              <span className='sr-only'>Open Menu</span>
              <EllipsisHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='bg-white flex flex-col gap-1 py-1'>
            <DropdownMenuLabel className='text-zinc-600'>
              Acciones
            </DropdownMenuLabel>
            <DropdownMenuItem className='pl-2 outline-none hover:bg-zinc-100 cursor-pointer transition-all duration-300 ease-in-out' onClick={() => alert(ticket.id)}>
              Ver ticket
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='pl-2 outline-none hover:bg-zinc-100 cursor-pointer transition-all duration-300 ease-in-out' onClick={() => alert(ticket.id)}>
              Ver cliente
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='pl-2 outline-none hover:bg-zinc-100 cursor-pointer transition-all duration-300 ease-in-out' onClick={() => alert(ticket.id)}>
              Ver encargado
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
]