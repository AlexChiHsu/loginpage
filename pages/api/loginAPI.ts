import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getUserDetail (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const signUp: Prisma.userListCreateInput = JSON.parse(req.body);
    const savedUserList = await prisma.userList.create({ data: signUp });
    res.status(200).json(savedUserList);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
}