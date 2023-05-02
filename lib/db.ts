import type { NextApiRequest, NextApiResponse } from 'next';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL!);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const offerUrl = await redis.get('offerUrl');

  res.status(200).json({ offerUrl: offerUrl });
};

export default handler;
