export interface AsignacionArea {
  id: number,
  areaId: number,
  areaName?: string,
  clienteId: string,
  clienteName?: string,
  fechaInicio: string,
  fechaFin?: string,
  estado: string,
  observaciones?: string,
  createdAt?: string,
  updatedAt?: string,
  asignedTo?: string,
}