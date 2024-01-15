import { NextResponse, NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client"
import { UserRegister } from "@/interfaces/User"
import bcrypt from 'bcrypt'

export const POST = async (req: NextRequest) => {

  const body = await req.json() as UserRegister

  if (!body) return new NextResponse(JSON.stringify({ message: 'Bad request' }), { status: 400 })

  const { email, password, confirmPassword, fullName } = body

  if (!email || !password || !confirmPassword || !fullName) return new NextResponse(JSON.stringify({ error: 'Bad request' }), { status: 400 })

  if (password !== confirmPassword) return new NextResponse(JSON.stringify({ message: 'Las contraseñas no coinciden' }), { status: 400 })

  const prisma = new PrismaClient()

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (user) return new NextResponse(JSON.stringify({ message: 'El email ya se encuentra registrado' }), { status: 400 })

  try {
    await prisma.user.create({
      data: {
        email,
        passwordHash: await bcrypt.hash(password, 12),
        name: fullName,
      }
    })
    return new NextResponse(JSON.stringify({ message: 'Usuario creado con éxito' }), { status: 200 })
  }  catch (error: any) {
    return new NextResponse(JSON.stringify({ message: 'Error al crear el usuario', details: error.message }), { status: 500 })
  }
}