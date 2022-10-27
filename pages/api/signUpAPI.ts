import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function createUserDetail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { userName, email, password, PasswordSalt } = JSON.parse(req.body);

    const savedUserList = await prisma.userList.create({
      data: {
        userName,
        email,
        userPassword: {
          create: [{
            password,
            passwordSalt: PasswordSalt,
          }]
        }
      }
    });
    res.status(200).json(savedUserList);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
}