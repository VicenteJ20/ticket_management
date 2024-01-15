export interface User {
  id: string,
  fullName: string,
  email: string,
  role: number,
  area: number,
  areaName?: string,
  areaCode?: number,
  status: number
}

export interface UserLogin {
  email: string,
  password: string
}

export interface UserRegister {
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string,
  area: number
}