export interface Session {
  id: string,
  userId: string,
  token: string,
  createdAt?: string,
  updatedAt?: string,
  createdBy: string,
}