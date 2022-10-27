import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getUserDetail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, password } = JSON.parse(req.body);

    const user = await prisma.userList.findFirst({
      select: {
        id: true,
        userName: true,
        email: true,
        userPassword: true,
      },
      where: { email },
    });

    if (!user) return res.status(400).json({ error: 'user not found' });
    if (user.userPassword[0].password !== password) return res.status(400).json({ error: 'wrong password!' });

    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
}