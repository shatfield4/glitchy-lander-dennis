// set-approved.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL!);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { isApproved, password } = req.body;
    if (password !== 'Dennis8888') {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    await redis.set('isApproved', isApproved ? '1' : '0');
    res.status(200).json({ message: "Value updated successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;