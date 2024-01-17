import { ColumnDef } from "@tanstack/react-table";

export interface TicketTable {
  id: number;
  title: string;
  description: string;
  priority: number;
  finished: boolean;
  created_at: string;
  manager: string;
  client: string;
}

export interface DataTableProps<TData, TValue>{
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}