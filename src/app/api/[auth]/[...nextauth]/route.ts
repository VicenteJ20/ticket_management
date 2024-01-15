import { PrismaClient, User } from "@prisma/client"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import { GithubProfile } from "next-auth/providers/github"
import bcrypt from 'bcrypt'
import NextAuth from "next-auth/next"
import { db } from "@/lib/prismaClient"

const prisma = db

export const OPTIONS: NextAuthOptions = {
  providers: [
    GithubProvider({
      profile(profile: GithubProfile) {
        return {
          ...profile,
          role: profile.role ?? 'user',
          id: profile.id.toString(),
          image: profile.avatar_url,
        }
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "tucorreo@dominio.cl" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const { email, password } = credentials

        if (!email || !password) return null

        const user = await prisma.user.findUnique({
          where: { email },
        })

        if (!user || !user.passwordHash) return null

        const match = await bcrypt.compare(password, user.passwordHash)

        if (!match) return null

        return user
      }
    })
  ],
  callbacks: {
    // Se utiliza JWT para que se pueda tratar el rol asignado desde el servidor
    async jwt({ token, user }: { token: any, user: any}) {
      if (user) token.role = user.roleId
      return token
    },
    // Se utiliza el método session para que se pueda tratar el rol asignado desde el servidor
    async session({ session, token }: { session: any, token: any}) {
      session.user.role = token.role
      return session
    }
  }
}

const handler = NextAuth(OPTIONS)

export {
  handler as GET,
  handler as POST
}