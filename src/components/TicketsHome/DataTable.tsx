'use client'

import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from '@tanstack/react-table'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from '@/components/ui/table'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { DataTableProps } from '@/interfaces/TicketTable'
import { use, useState } from 'react'
import { Label } from '@radix-ui/react-dropdown-menu'

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    }
  })

  return (
    <div>
      <div className='flex items-center py-4 gap-4'>
        <div className='flex flex-col gap-3'>
          <Label className='text-stone-900 font-semibold'>Filtrar por cliente</Label>
          <Input
            placeholder='ej: smartparking@gmail.com'
            value={(table.getColumn('client')?.getFilterValue() as string) ?? ''}
            onChange={(e) =>
              table.getColumn('client')?.setFilterValue(e.target.value)
            }
          />
        </div>
        <div className='flex flex-col gap-3'>
          <Label className='text-gray-900 font-semibold'>Filtrar por encargado</Label>
          <Input
            placeholder='ej: vicente@gmail.com'
            value={(table.getColumn('manager')?.getFilterValue() as string) ?? ''}
            onChange={(e) =>
              table.getColumn('manager')?.setFilterValue(e.target.value)
            }
          />
        </div>
        <div className='flex flex-col gap-3'>
          <Label className='text-gray-900 font-semibold'>Visibilidad columnas</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto w-full text-stone-600 select-none hover:bg-zinc-900 hover:text-white transition-all duration-300 ease-in-out">
                Columnas
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white'>
              {table
                .getAllColumns()
                .filter(
                  (column) => column.getCanHide()
                )
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className='rounded-lg bg-white border shadow shadow-zinc-100'>
        <Table className='bg-white rounded-lg'>
          <TableHeader>
            {
              table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {
                    headerGroup.headers.map((column) => {
                      return (
                        <TableHead key={column.id}>
                          {column.isPlaceholder ? null :
                            flexRender(
                              column.column.columnDef.header,
                              column.getContext()
                            )}
                        </TableHead>
                      )
                    })
                  }
                </TableRow>
              ))
            }
          </TableHeader>
          <TableBody>
            {
              table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}
                    className='max-w-96'
                  >
                    {
                      row.getVisibleCells().map((cell) => (
                        <TableCell title={`${cell.getValue() as string}`} key={cell.id} className='max-w-72 overflow-hidden whitespace-nowrap overflow-ellipsis '>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))
                    }
                  </TableRow>
                )
                )) : (
                <TableRow>
                  <TableCell colSpan={columns.length}>
                    Sin resultados.
                  </TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Siguiente
        </Button>
      </div>
    </div>
  )
}