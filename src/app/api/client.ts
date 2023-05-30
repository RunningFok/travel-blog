import { PrismaClient } from "@prisma/client";
import * as dotenv from 'dotenv'

dotenv.config()
console.log(process.env.DATABASE_URL)


let prismaInit: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prismaInit = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prismaInit = (global as any).prisma;
}

export const prisma = prismaInit;
