export interface AsignacionTicket {
  id: number,
  ticketId: string,
  asignedTo: string,
  asignedBy: string,
  createdAt?: string,
  updatedAt?: string,
  createdBy: string,
}