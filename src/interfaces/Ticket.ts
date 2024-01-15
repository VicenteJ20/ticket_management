export interface Ticket {
  id: string,
  title: string,
  description?: string,
  assignedId?: string,
  assignedName?: string,
  assignedEmail?: string,
  areaId: number,
  areaName?: string,
  statusId: number,
  statusName?: string,
  priorityId: number,
  priorityName?: string,
  createdById: string,
  createdByName?: string,
  createdByEmail?: string,
  createdDate: Date,
  updatedById?: string,
  updatedByName?: string,
  updatedByEmail?: string,
  updatedDate?: Date,
  comments?: TicketComment[]
}

export interface TicketComment {
  id: string,
  ticketId: string,
  comment: string,
  createdById: string,
  createdByName?: string,
  createdByEmail?: string,
  createdDate: Date
}