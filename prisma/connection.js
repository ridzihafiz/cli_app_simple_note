import { PrismaClient } from "@prisma/client";

// kyeword "new" sifat class PrismaClient diturunkan ke variable conn
const conn = new PrismaClient();

export default conn;
