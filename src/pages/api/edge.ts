import { testRequest } from '@/request';
import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
  regions: ['fra1', 'iad1'],
};

export async function handler() {
  const response = await testRequest();
  return NextResponse.json({
    status: response.status,
  });
}

export default handler;
