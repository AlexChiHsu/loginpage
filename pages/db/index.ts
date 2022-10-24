import { PrismaClient } from '@prisma/client';

declare global {
  var loginDB: PrismaClient | undefined;
}

const loginDB = global.loginDB || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.loginDB = loginDB;

export default loginDB;
