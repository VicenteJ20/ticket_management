'use client'

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from '@/components/ui/table'
import { DataTableProps } from '@/interfaces/TicketTable'

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className='rounded-lg border shadow shadow-zinc-100'>
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
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {
                    row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
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
  )
}