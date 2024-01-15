export interface ClientType {
  id: string,
  name: string,
  description?: string
}

export interface Client {
  id: string,
  name: string,
  managerId: string,
  managerName?: string,
  type?: ClientType,
}