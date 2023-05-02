// get-approved.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL!);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const isApproved = await redis.get('isApproved');

  res.status(200).json({ isApproved: isApproved === '1' });
};

export default handler;