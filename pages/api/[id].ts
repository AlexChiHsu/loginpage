import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getUserDetail(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(500).json({ message: "Method not allowed" });
    }

    try {
        const {
            query: { id },
        } = req;
        const user = await prisma.userList.findFirst({
            select: {
                id: true,
                userName: true,
                email: true,
            },
            where: {
                id: parseInt(id as string, 10),
            },
        });

        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' });
    }
}