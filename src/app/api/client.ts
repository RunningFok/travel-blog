import { PrismaClient } from "@prisma/client";

let prismaInit: PrismaClient;

if (process.env.NODE_ENV === "development") {
  prismaInit = new PrismaClient({
    datasources:{
      db:{
        url: process.env.DATABASE_URL
      }
    }
  });
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prismaInit = (global as any).prisma;
}

export const prisma = prismaInit;
