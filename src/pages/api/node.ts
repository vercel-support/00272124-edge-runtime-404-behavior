import { testRequest } from '@/request';
import { type NextApiRequest, type NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await testRequest();
  return res.json({
    status: response.status,
  });
};

export default handler;
