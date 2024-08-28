import { testRequest } from '@/request';
import { type NextApiRequest, type NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await testRequest();
  const data = await response.json();
  return res.json({
    data,
    status: response.status,
  });
};

export default handler;
