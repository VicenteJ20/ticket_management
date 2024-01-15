import { PrismaClient } from "@prisma/client"


let db: PrismaClient;

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  //@ts-ignore
  if (!global.db) { //@ts-ignore
    global.db = new PrismaClient();
  }
  //@ts-ignore
  db = global.db;
}

export { db }