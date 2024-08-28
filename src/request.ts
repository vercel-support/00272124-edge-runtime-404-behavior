const BASE_URL = process.env.BASE_URL;

export const testRequest = async () => {
  const response = await fetch(`${BASE_URL}/api/groups/`, {
    method: 'POST',
    body: '{}',
    headers: {
      Authorization: `Bearer WRONG`,
    },
  });
  return response;
};
